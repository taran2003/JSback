const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const verifyLogin = async ({login,password}) => {

        const user = await prisma.users.findUnique({
            where: {
                login: login
            }
        });
        return user;
}

const verifyId = async (id) => {
    const user = await prisma.users.findUnique({
        where: {
            id
        }
    });
    return user;
}

const write = async ({login, password}) => {
    let user={
        login: login,
        password: password
    };
    const createUser = await  prisma.users.create({data:user});
}

const update = async ({login,newLogin,password,newPassword}) => {
    console.log(!newLogin);
    if(!newLogin)
    {
        const deliteUser = await prisma.users.delete({
            where:{
                login
            },
        });
        return
    }
    const updateUser = await prisma.users.upsert({
        where:{
            login
        },
        update:{
            login : newLogin,
            password : newPassword
        },
        create:{
            login:newLogin,
            password
        }
    });
}

const disconnect = async () =>{
    await prisma.$disconnect();
}

module.exports = {
    write,
    verifyLogin,
    verifyId,
    update,
    disconnect
}