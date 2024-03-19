import { Injectable, Logger } from '@nestjs/common';
import { Issue } from './issue.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateIssueDto } from './dto/issue.dto';

@Injectable()
export class IssuesService {
  private readonly logger = new Logger('MoviesService');
  constructor(@InjectModel(Issue.name) private issueModel: Model<Issue>) {}

  async createIssue(issue: CreateIssueDto) {
    this.logger.log(`CEATING ${issue}`);
    return await this.issueModel.create(issue);
  }

  async findOneIssue(issueId: string): Promise<Issue> {
    return await this.issueModel.findById(issueId);
  }

  async updateIssue(issueId: string, issue: Partial<Issue>): Promise<void> {
    this.logger.log(`UPDATING ${issue}`);
    await this.issueModel.updateOne({ _id: issueId }, issue);
  }

  async deleteIssue(issueId: string): Promise<void> {
    this.logger.log(`DELETING ${issueId}`);
    await this.issueModel.deleteOne({ _id: issueId });
  }
}
