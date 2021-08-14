interface IMailTo {
    name: String,
    email: String
}

interface IMailMessage{
    subject: String,
    body:String,
    attachment?: String[];
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

class EmailService {
    sendMail({ to, message}: IMessageDTO){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService;