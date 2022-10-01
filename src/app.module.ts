import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { RewiewController } from './rewiew/rewiew.controller';

@Module({
  imports: [AuthModule, TopPageModule, ProductModule, ReviewModule],
  controllers: [AppController, RewiewController],
  providers: [AppService],
})
export class AppModule {}
