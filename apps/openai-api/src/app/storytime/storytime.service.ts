import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../shared/open-ai.service';

@Injectable()
export class StorytimeService {
  constructor(private openAIService: OpenAIService) {}

  async getStoryAbout(name: string, gender: string): Promise<string> {
    return this.openAIService.chat(
      `Tell me a short story about a ${gender} named ${name}`
    );
  }
}
