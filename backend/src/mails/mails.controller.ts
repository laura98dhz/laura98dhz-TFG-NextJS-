import { Controller, Param, Post, Query } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
    
    constructor(private readonly mailsService: MailsService) {}

    @Post('send')
    async sendEmail(@Query() email: any, @Query() name :any) {
        
        console.log(email.email, name.name)
        return await this.mailsService.sendMail(email.email, name.name);
    }
    
}
