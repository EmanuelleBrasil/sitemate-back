import { Module } from '@nestjs/common';
import { IssuesController } from './issues.controller';
import { IssuesService } from './issues.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Issue, IssueSchema } from './issue.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Issue.name,
        schema: IssueSchema,
      },
    ]),
  ],
  controllers: [IssuesController],
  providers: [IssuesService],
})
export class IssuesModule {}
