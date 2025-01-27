import express, { Request, Response } from 'express'
import { fizzbuzz } from './fizzbuzz'

const app = express()
const port = process.env.PORT || 3000

app.get("/fizzbuzz/:number", (req:Request, res:Response) => {
    const number = parseInt(req.params.number, 10)
    if (isNaN(number)) {
        res.status(400).send("Invalid number")
        return
    }

    res.send(`FIZZBUZZ: ${fizzbuzz(number)}`)
})

app.get("/health", (req: Request, res: Response) => {
    res.send("REALLY HEALTHY")
})

app.listen(port)