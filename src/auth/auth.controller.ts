import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('register')
    register() {
        return 'user created successfully';
    }

    @Post('login')
    login() {
        return 'user login successfully';
    }


    
}
