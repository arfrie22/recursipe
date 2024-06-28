import { getSession } from "@auth/express";
import { AuthConfig } from "@auth/core";
import { NextFunction, Request, Response } from "express";

export function authSession(authConfig: AuthConfig) {
    return async function (req: Request, res: Response, next: NextFunction) {
        res.locals.session = await getSession(req, authConfig as any);
        next();
    }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!res.locals.session) {
        return res.status(401).send("Unauthorized");
    }

    next();
}
