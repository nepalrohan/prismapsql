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



// getTodos(1);


//create todos

async function createTodos (title:string,
    description:string,
    userId:number
){

    await prisma.todo.create({
        data:{
            title: title,
            description:description,
            userId:userId
        }
    })

}

// createTodos("John don hain", "I am a boy from palpa currently living in butwal, haha",1);

//get todos and user details


async function getTodosanduser (userId:number){

    const response = await prisma.todo.findMany({
        where:{
            userId:userId
        },
        select:{
            id:true,
            title:true,
            description:true,
            user:true
        }
    })
    
    console.log(response);
}

getTodosanduser(1);