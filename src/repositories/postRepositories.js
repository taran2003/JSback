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

const getById = async ({ id }) => {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        });
        return post;
    } catch (error) {
        throw error
    }
}

const getByUserId = async ({ user }) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                authorId: user.id
            },
            orderBy: [{
                createdAt: 'desc'
            }]
        });
        return posts;
    } catch (error) {
        throw error
    }
}

const getAll = async () => {
    try {
        const posts = await prisma.post.findMany({
            orderBy: [{
                createdAt: 'desc'
            }]
        });
        return posts;
    } catch (error) {
        throw error;
    }
}

const deletePost = async ({ id }) => {
    try {
        const post = await getById({ id });
        await fs.unlink('D:\\modernPrograming\\JSback\\image\\' + post[0].imgSours);
        const deletePost = await prisma.post.delete({
            where: {
                id
            },
        });
    } catch (error) {
        throw error
    }
}

module.exports = {
    create,
    getByUserId,
    getAll,
    getById,
    deletePost,
}