import { Request, Response } from "express";

export default function getAllPosts(request: Request, response: Response) {
    response.statusCode = 200
    response.send({ posts: ["A", "B"] });
}
