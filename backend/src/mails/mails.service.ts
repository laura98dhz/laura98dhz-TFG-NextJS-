import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailsService {

    constructor(private mailerService: MailerService) {}

    async sendMailWelcome(email: string, name: string) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Creacion Usuario Golden Houses',
            template: '/emailBienvenida',
            context: {
                name: name,
            }
        })
    }

    async sendMailPassword(email: string, name: string, password: string) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Recuperar Contraseña Golden Houses',
            template: '/emailContraseña',
            context: {
                name: name,
                password: password
            }
        })
    }
}
