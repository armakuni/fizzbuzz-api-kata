import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (_req: Request, res: Response) => {
    res.send("REALLY HEALTHY");
})

app.listen(port)