import { Request, Response } from "express"
import * as jwt from 'jsonwebtoken'
import { decode } from "jsonwebtoken";
import { apiConfig } from "./api-config";

export const handlerAuthorization = (req: Request, resp: Response, next) => {
    const token = extractToken(req)
    if (!token) {
        resp.header('WWW-Authenticate', 'Bearer token_type="JWT"')
        return resp.status(401).json({message: 'Você precisa se autenticar.'})
    } else {
        jwt.verify(token, apiConfig.secret, (error, decoded) => {
           if (decode) {
               next()
           } else {
               resp.status(403).json({message: 'Não autorizado.'})
           }
        })
    }

}

function extractToken(req: Request): string {
    let token = undefined
    if (req.headers && req.headers.authorization) {
        const parts: string[] = req.headers.authorization.split(' ')
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1]
        }
    }
    return token
}