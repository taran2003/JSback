const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const getByLogin = async ({login}) => {

        const user = await prisma.users.findUnique({
            where: {
                login: login
            }
        });
        return user;
}

const getById = async ({id}) => {
    const user = await prisma.users.findUnique({
        where: {
            id: id
        }
    });
    return user;
}

const write = async ({login, password, firstName, lastName}) => {
    let user={
        login: login,
        password: password,
        firstName: firstName,
        lastName: lastName,
        //posts: Post[]

    };
    try {
        const createUser = await prisma.users.create({data: user});
    } catch(e) {
        throw e;
    }
}

const deleteUser = async (login) =>
{
    const deleteUser = await prisma.users.delete({
        where:{
            login
        },
    });
}

const update = async ({user, updatedUser}) => {
    const updateUser = await prisma.users.update({
        where:{
            login : user.login
        },
        data:{
            login : updatedUser.login,
            password : updatedUser.password,
            firstName : updatedUser.firstName,
            lastName : updatedUser.lastName,
        }
    });
}

const disconnect = async () =>{
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