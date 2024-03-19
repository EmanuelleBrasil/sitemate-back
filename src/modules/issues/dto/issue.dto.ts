import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIssueDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description?: string;
}
