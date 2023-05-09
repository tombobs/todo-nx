import { Controller, Get, Query } from "@nestjs/common";
import { StorytimeService } from "./storytime.service";

@Controller('storytime')
export class StorytimeController {
  constructor(private storytimeService: StorytimeService) {
  }

  @Get()
  async getStoryAbout(@Query() {name, gender}): Promise<{data: string}> {
    return {
      data: await this.storytimeService.getStoryAbout(name, gender)
    };
  }
}
