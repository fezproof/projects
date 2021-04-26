import type { AWS } from '@serverless/typescript';

const isRunningLocally = !process.env.AWS_EXECUTION_ENV;

import graphql from '@functions/graphql';

const serverlessConfiguration: AWS = {
  org: 'fezproof',
  app: 'dnd',
  service: 'graphql-gateway',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    'serverless-offline': {
      httpPort: 3100,
      websocketPort: 3101,
      lambdaPort: 3102,
    },
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: isRunningLocally ? 'nodejs12.x' : 'nodejs14.x',
    region: 'ap-southeast-2',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: {
    graphql,
  },
};

module.exports = serverlessConfiguration;
