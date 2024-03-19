import { Body, Controller, Post } from '@nestjs/common';
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
}
