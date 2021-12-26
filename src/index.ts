import express, { NextFunction, Request, Response } from 'express';
import { URLController } from './controller/url_controller';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const urlController = new URLController(); 

app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);

app.listen(3001, () => {
    console.log('Server running');
})
