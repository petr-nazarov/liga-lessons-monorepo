"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const swaggerSetup = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth({
        type: 'http',
    }, 'default')
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('doc', app, document);
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    swaggerSetup(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map