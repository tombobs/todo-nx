import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { HttpUtils } from '@todo-nx/utils';

interface OpenAIRequest {
  model: string;
  messages: [{role: 'user', content: string}];
}

interface OpenAIResponse {
  choices: {message: {content: string}}[];
}

const apiKey = process.env.OPEN_AI_KEY;

@Injectable()
export class OpenAIService {

  async chat(text: string): Promise<string> {
    const res = await this.call(this.chatUrl, this.getRequest(text));
    return res.choices[0].message.content;
  }


  private readonly openAiUrl = 'https://api.openai.com/v1/';
  private readonly chatUrl = 'chat/completions';

  private http = new HttpUtils();

  private getRequest(content: string): OpenAIRequest {
    return {
      model:  'gpt-3.5-turbo',
      messages: [
        { role: 'user', content }
      ]
    }
  }

  private async call(url: string, request: OpenAIRequest): Promise<OpenAIResponse> {

    try {
      const res = await this.http.post(this.openAiUrl + url, request, {Authorization: 'Bearer ' + apiKey});
      console.log(res)
      return res;
    } catch (e) {
      console.log(e)
      throw new InternalServerErrorException();
    }
  }

}
