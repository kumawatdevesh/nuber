import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { Options } from 'graphql-yoga';
import mongoose from 'mongoose';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
}

const handleAppStart = () => console.log(`Listening on port ${PORT}`)

mongoose.connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.tpp9z.mongodb.net:27017,cluster0-shard-00-01.tpp9z.mongodb.net:27017,cluster0-shard-00-02.tpp9z.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
)
    .then(() => {
        app.start(appOptions, handleAppStart);
    })
    .catch(err => {
        console.log(err);
    });


