import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//create operation
async function createUser (
    username:string,
    password:string,
    firstname:string,
    lastname:string,
    email:string
){

    const response = await prisma.user.create({
        data:{
            username,
            password,
            firstname,
            lastname,
            email
        }
    })

    console.log(response);
}


// createUser('test' ,'test' ,'test' ,'test', 'test');



//get user-read operation


async function getTodos (userId:number){

    const response = await prisma.todo.findMany({
        where:{
            userId:userId
        }
    })

    console.log(response);
}



getTodos(1);