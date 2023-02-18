import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation.pipe";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)
    app.enableCors();
    const config = new DocumentBuilder()
    .setTitle('Startup')
    .setDescription('Back-end for startup-school project')
    .setVersion('1.0.0')
    .addTag('School-Programmer')
    .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document)
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()