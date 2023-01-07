const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const create = async ({ authorId, postId, text }) => {
    let comment = {
        createdAt: new Date(),
        text: text.text,
        postId: postId,
        authorId: authorId,
    };
    try {
        const createComment = await prisma.comment.create({ data: comment });
    } catch (e) {
        throw e;
    }
}

const getById = async ({ id }) => {
    try {
        const post = await prisma.comment.findMany({
            where: {
                id: id
            }
        });
        return post;
    } catch (error) {
        throw (error);
    }
}

const getByUserId = async ({ user }) => {
    try {
        const posts = await prisma.comment.findMany({
            where: {
                authorId: user.id
            },
            orderBy: [{
                createdAt: 'desc'
            }]
        });
        return posts;
    } catch (error) {
        throw (error)
    }
}

const getByPostId = async ({ postId }) => {
    try {
        const posts = await prisma.comment.findMany({
            where: {
                postId: postId
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

const deletePost = async ({ id }) => {
    try {
        const deletePost = await prisma.comment.delete({
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
    getByPostId,
    getById,
    deletePost,
}