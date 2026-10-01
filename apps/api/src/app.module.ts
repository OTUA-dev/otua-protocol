/**
 * AppModule — root NestJS module for the OTUA Protocol API.
 *
 * Foundation phase: only the HealthModule is registered.
 * Future domain modules will be added here as the protocol is implemented:
 *   - AuthModule
 *   - UsersModule
 *   - SuppliersModule
 *   - CampaignsModule
 *   - ParticipantsModule
 *   - ContributionsModule
 *   - FulfillmentModule
 *   - PaymentsModule
 *   - StellarModule
 */
import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';

@Module({
  imports: [HealthModule],
})
export class AppModule {}
