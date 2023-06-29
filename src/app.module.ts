import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import TypeOrmConfig from './config/type-orm /type-orm.config';
import { TypeOrmConfigService } from './config/type-orm /type-orm.services';

@Module({
  imports: [UsersModule,
    ConfigModule.forRoot({ 
      isGlobal: true,
      load:[TypeOrmConfig],
    }), 
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
