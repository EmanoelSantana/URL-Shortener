import { Request, Response, NextFunction } from 'express';
import shortId from 'shortid';
import { config } from '../config/contans';

export class URLController {
    public async shorten(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { originURL } = req.body;
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;

        res.json({ originURL, hash, shortURL });
    }

    public async redirect(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { hash } = req.params;

        const url = {
            originURL: "",
            hash: "",
            shortURL: "",
        }

        res.redirect(url.originURL);
    }
}