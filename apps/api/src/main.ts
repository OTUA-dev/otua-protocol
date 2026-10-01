/**
 * OTUA Protocol API — application entry point.
 *
 * Foundation phase: boots the NestJS application with a health endpoint.
 * Domain modules (auth, campaigns, contributions, etc.) will be added in
 * future phases after the protocol specification is finalized.
 */
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const port = process.env['API_PORT'] ?? '3001';

  await app.listen(port);

  console.log(`OTUA Protocol API running on port ${port}`);
}

bootstrap().catch((err: unknown) => {
  console.error('Failed to start API:', err);
  process.exit(1);
});
