import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }
    
    @Post('register')
    register() {
      const result=  this.authService.register()
console.log("result",result)
        return result
    }

    @Post('login')
    login() {
        return 'user login successfully';
    }


    
}
