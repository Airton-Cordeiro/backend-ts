import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {
        name: 'Airton',
        email: 'AirtonCordeiro@gmail.com.br'
    }
];

class UserController {
    async  get(req: Request, res: Response) {
        return res.json(users)
    }

    async create(req:Request, res:Response){
        const emailService = new EmailService()
        
        emailService.sendMail({
            to:   { 
                name: "Airton cordeiro",
                email: "airton.cordeiro@gmail.com" },
            message:  { 
                subject: "email suspeito", 
                body: "teste de email" }
        });

        return res.send()
    }
};

export default new UserController;