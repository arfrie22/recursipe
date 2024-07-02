import { getSession } from "@auth/express";
import { AuthConfig } from "@auth/core";
import { NextFunction, Request, Response } from "express";

export function authSession(authConfig: AuthConfig) {
    return async function (req: Request, res: Response, next: NextFunction) {
        res.locals.session = await getSession(req, authConfig as any);
        
        res.locals.isSignedIn = !!res.locals.session;

        const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
        res.locals.isAdmin = adminEmails.includes(res.locals.session?.user?.email);
        
        next();
    }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!res.locals.isSignedIn) {
        return res.status(401).send("Unauthorized");
    }

    next();
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
    if (!res.locals.isAdmin) {
            return res.status(403).send("Forbidden")
    }

    next()
}