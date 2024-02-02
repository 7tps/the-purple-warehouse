import mongoose from "../db";

export interface key {
    apiKey: string,
    name: string,
    team: string,
    app: string,
    scopes: string[],
    expiration: number,
    creation: number,
    source: string,
    live: boolean,
    hashType: string
}

export default mongoose.model(
    "APIKey",
    new mongoose.Schema({
        apiKey: {
            required: true,
            type: String
        },
        name: {
            required: true,
            type: String
        },
        team: {
            required: true,
            type: String
        },
        app: {
            required: true,
            type: String
        },
        scopes: {
            required: true,
            type: Array
        },
        expiration: Number,
        creation: Number,
        source: { // "login flow" or "manual"
            required: true,
            type: String
        },
        live: Boolean,
        hashType: { // "sha256"
            required: true,
            type: String
        }
    })
);