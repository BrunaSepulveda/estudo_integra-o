import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocSetup } from './doc.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  DocSetup.load(app);
  await app.listen(3000);
}
bootstrap();
