import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Ant {
  @Field(type => Int)
  name: string;

  @Field()
  colony: string;

  constructor() {
      this.name = '';
      this.colony = 'Red';
  }

}