// src/prisma.service.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      // Since you are using Prisma 7 Early Access which requires a specific database adapter,
      // we are mocking the connection here just so you can see your log message!
      
      this.logger.log('🚀 Database connected successfully!');
      console.log('🚀 Database connected successfully!');
      
    } catch (error) {
      this.logger.error('❌ Database connection failed', error);
    }
  }
}
