import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
    @ApiProperty({ description: 'First name of the user', example: 'John' })
    firstName: string;

    @ApiProperty({ description: 'Last name of the user', example: 'Doe' })
    lastName: string;

    @ApiProperty({ description: 'Email address of the user', example: 'john.doe@example.com' })
    email: string;

    @ApiProperty({ description: 'Secure password for the user', example: 'password123' })
    password: string;
}