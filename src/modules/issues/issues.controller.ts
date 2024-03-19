import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/issue.dto';
import { Issue } from './issue.model';

@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @Post()
  async createIssue(@Body() issue: CreateIssueDto): Promise<Issue> {
    return this.issuesService.createIssue(issue);
  }

  @Get(':id')
  async getIssueById(@Param('id') id: string): Promise<Issue> {
    return this.issuesService.findOneIssue(id);
  }

  @Put(':id')
  async updateIssue(
    @Param('id') id: string,
    @Body() issue: Partial<Issue>,
  ): Promise<void> {
    await this.issuesService.updateIssue(id, issue);
  }
  @Delete(':id')
  async deleteIssue(@Param('id') id: string): Promise<void> {
    await this.issuesService.deleteIssue(id);
  }
}
