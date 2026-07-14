import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
register() {

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



      return { message: "user created successfully"}
    }
}
