const { PrismaClient } = require("@prisma/client");
const fs = require('fs/promises');

const prisma = new PrismaClient();

const create = async ({ user, imgSours, text }) => {
    let post = {
        createdAt: new Date(),
        text: text,
        imgSours: imgSours,
        authorId: user.id,
    };
    try {
        const createPost = await prisma.post.create({ data: post });
    } catch (e) {
        throw e;
    }
}

const getById = async ({id}) =>{
    const post = await prisma.post.findMany({
        where: {
            id: id
        }
    });
    return post;
}

const getByUserId = async ({user}) => {
    const posts = await prisma.post.findMany({
        where: {
            authorId: user.id
        },
        orderBy:[{
            createdAt:'desc'
        }]
    });
    return posts;
}

const getAll = async () => {
    const posts = await prisma.post.findMany({
        orderBy:[{
            createdAt:'desc'
        }]
    });
    return posts;
}

const deletePost = async ({id}) => {
    const post = await getById({id});
    await fs.unlink('D:\\modernPrograming\\JSback\\image\\'+post[0].imgSours);
    const deletePost = await prisma.post.delete({
        where:{
            id
        },
    });
}

module.exports = {
    create,
    getByUserId,
    getAll,
    deletePost,
}