import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class DocSetup {
  public static load(app: INestApplication){
    const config = new DocumentBuilder()
    .setTitle('structure-swagger-integration')
    .setDescription('API para estudo')
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('doc', app, document)
  }
}
