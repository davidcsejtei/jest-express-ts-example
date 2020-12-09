import { Request, Response } from 'express';
import getAllPosts from './getAllPosts';

describe('Get all posts request', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject = {};

    beforeEach(() => {
        mockRequest = {
        };
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation((result) => {
                responseObject = result;
            })
        };
    });

    test('200 - posts', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = { 
            posts: ["A", "B"] 
        };

        getAllPosts(mockRequest as Request, mockResponse as Response);        

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedReponse);
    });
});
