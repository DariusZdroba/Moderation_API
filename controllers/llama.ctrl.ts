import { Request } from 'express';

import * as configs from '../configs';
import { CustomResponse } from '../middlewares/respond';
const URL = process.env.OLLAMA_API_URL || 'http://localhost:11434/api';
const MODEL="llama3.1"
import { LLAMA_PREFIX } from '../configs';

export class LlamaCtrl{
    static async getResponse(req:Request, res:CustomResponse){
        console.log("Trying to get response")
        const {data} = req.body;
        const response = await fetch(`${URL}/generate`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createJsonObject(data))
        })
        const responseData = await response.json();

        return res.status(200).json({message:responseData})
    }
}

const createJsonObject = (data) => {
    return {
        "model":MODEL,
        "prompt": LLAMA_PREFIX + data,
        "stream": false,
        "max_tokens": 2
    }
}