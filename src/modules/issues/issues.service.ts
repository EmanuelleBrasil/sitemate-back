import { Injectable } from '@nestjs/common';
import { Issue } from './issue.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateIssueDto } from './dto/issue.dto';

@Injectable()
export class IssuesService {
  constructor(@InjectModel(Issue.name) private issueModel: Model<Issue>) {}

  async createIssue(issue: CreateIssueDto) {
    return await this.issueModel.create(issue);
  }

  async findOneIssue(issueId: string): Promise<Issue> {
    return await this.issueModel.findById(issueId);
  }
}
