import { BaseEntity } from './base.models';

export interface Poll extends BaseEntity {
  question: string;
  options: string[];
}

export interface CreatePollPayload {
  question: string;
  options: string[];
}
