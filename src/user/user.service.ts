import { Injectable, Post } from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/dto/registerUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async createUser(registerUserDto: RegisterUserDto) {
        return await this.prisma.userModel.create({
            data:{
                firstName:registerUserDto.firstName,
                lastName:registerUserDto.lastName,
                email:registerUserDto.email,
                password:registerUserDto.password,
                role:registerUserDto.role
            }
        })

    }
}
