import express from 'express';
import {
    connectDB
} from './config/mongodb';
import {
    env
} from './config/environment'

//pass yhtUOu8allg7ke3Q

connectDB()
    .then(() => console.log('Connected successfully!!!'))
    .then(() => bootServer())
    .catch(error => {
        console.error(error);
        process.exit(1)
    })

const bootServer = () => {
    const app = express();

    connectDB().catch(console.log)

    app.get('/', (req, res) => {
        res.end('<h1>Hello</h1><hr/>')
    })

    app.listen(env.PORT, env.HOST, () => {
        console.log(`hello, this is ${env.HOST}:${env.PORT}/`)
    })
}