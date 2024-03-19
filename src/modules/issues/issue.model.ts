import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'issues' })
export class Issue {
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
