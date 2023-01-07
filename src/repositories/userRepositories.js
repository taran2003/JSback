const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getByLogin = async ({ login }) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                login
            }
        });
        return user;
    } catch (error) {
        throw (error);
    }
}

const getById = async ({ id }) => {
    const user = await prisma.users.findUnique({
        where: {
            id: id
        }
    });
    return user;
}

const write = async ({ login, password, firstName, lastName }) => {
    let user = {
        login: login,
        password: password,
        firstName: firstName,
        lastName: lastName,
    };
    try {
        const createUser = await prisma.users.create({ data: user });
    } catch (e) {
        throw e;
    }
}

const deleteUser = async (login) => {
    try {
        const deleteUser = await prisma.users.delete({
            where: {
                login
            },
        });
    } catch (error) {
        throw error;
    }
}

const update = async ({ user, updatedUser }) => {
    try {
        const updateUser = await prisma.users.update({
            where: {
                login: user.login
            },
            data: {
                login: updatedUser.login,
                password: updatedUser.password,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
            }
        });
    } catch (error) {
        throw error;
    }
}

const disconnect = async () => {
    await prisma.$disconnect();
}

module.exports = {
    write,
    getByLogin,
    getById,
    update,
    disconnect,
    deleteUser
}