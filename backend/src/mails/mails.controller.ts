import { Controller, Post, Query } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller('mails')
export class MailsController {
    
    constructor(private readonly mailsService: MailsService) {}

    @Post('send')
    async sendEmail(@Query('laura98dhz@gmail.com') email, @Query('laura') name) {
        return await this.mailsService.sendMail(email, name);
    }
    
}
