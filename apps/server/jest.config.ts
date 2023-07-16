import { Config } from '@jest/types';
import base from 'config/jest/base.jest.config';

const config: Config.InitialOptions = {
  ...base,
  //setupFiles: ['../../packages/config/jest/test-config.ts']
};

export default config;

