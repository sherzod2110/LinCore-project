import { Module } from '@nestjs/common';
import { connectDb } from './ormconfig/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';

@Module({
  imports: [ConfigModule.forRoot(config), TypeOrmModule.forRoot(connectDb)],
})
export class AppModule {}
