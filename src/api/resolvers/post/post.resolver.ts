import {Args, Query, Resolver} from '@nestjs/graphql';
import {PostResponse} from "./responses";
import {PostFacade} from "@lib/post/application-services";

@Resolver(() => PostResponse)
export class PostResolver {

  constructor(
    private readonly postFacade: PostFacade
  ) {}

  @Query(() => PostResponse, {name: 'get_post'})
  async getPostById(
    @Args('id') id: string
  ) {
    return this.postFacade.queries.getPost(id)
  }
}