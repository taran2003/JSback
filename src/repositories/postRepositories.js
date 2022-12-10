const { PrismaClient } = require("@prisma/client");

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

const getByUserId = async ({user}) => {
    const posts = await prisma.post.findMany({
        where: {
            authorId: user.id
        }
    });
    return posts;
}

const deletePost = async ({id}) => {
    const deletePost = await prisma.post.delete({
        where:{
            id
        },
    });
}

module.exports = {
    create,
    getByUserId,
    deletePost,
}