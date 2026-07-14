import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/registerUser.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register( @Body() registerUserDto : RegisterUserDto) {
      const result=  this.authService.register(registerUserDto)
console.log("result",result)
        return result
    }

    @Post('login')
    login() {
        return 'user login successfully';
    }


    
}
