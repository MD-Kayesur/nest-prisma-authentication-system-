import { Injectable } from '@nestjs/common';
import bcrypt from "bcrypt"
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
 async register(registerUserDto:RegisterUserDto) {

console.log(registerUserDto)

const  hashedPassword = await bcrypt.hash(registerUserDto.password, 10);





return this. userService.createUser(registerUserDto) 
}

}

//logic for user register
/**
 * 1.check if email already exist
 * 2.hash password
 * 3.create user
 * 4.store user in database 
 * 5.generate jwt token
 * 6.set http cookie
 * 7.return response message with user data
 * 8.login user
 * 9. logout user
 * 10. generate new token when access token expired
 * 11. 
 * 
 * 
 */