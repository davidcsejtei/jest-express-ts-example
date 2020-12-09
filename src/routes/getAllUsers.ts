import { Request, Response } from "express";

export default function getAllUsers(request: Request, response: Response) {
    const users = [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Peter',
            age: 40
        }
    ];

    response.statusCode = 200;
    response.send({ users });
}
