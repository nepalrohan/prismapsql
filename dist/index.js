"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//create operation
function createUser(username, password, firstname, lastname, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                username,
                password,
                firstname,
                lastname,
                email
            }
        });
        console.log(response);
    });
}
// createUser('test' ,'test' ,'test' ,'test', 'test');
//get user-read operation
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                userId: userId
            }
        });
        console.log(response);
    });
}
// getTodos(1);
//create todos
function createTodos(title, description, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todo.create({
            data: {
                title: title,
                description: description,
                userId: userId
            }
        });
    });
}
// createTodos("John don hain", "I am a boy from palpa currently living in butwal, haha",1);
//get todos and user details
function getTodosanduser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    });
}
getTodosanduser(1);
