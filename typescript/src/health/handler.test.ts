import {describe, expect, it} from "vitest";
import {Response, Request} from "express";

class HealthContoller {
    getAction(req: Request, resp: Response) {
        resp.status(201);
    }
}

describe('Health Check HTTP Handler', () => {
    describe('When the service is healthy', () => {
        it('should return HTTP 200', () => {
            const resp = new Response();
            const req = new Request(new URL("http://example.com/health"));

            const controller = new HealthContoller();
            controller.getAction(req, resp);

            expect(resp.status).toEqual(201);
        });
    });
});