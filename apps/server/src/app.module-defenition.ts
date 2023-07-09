import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface AppModuleOptions {
  mongodbURI: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE} =
  new ConfigurableModuleBuilder<AppModuleOptions>().build();
