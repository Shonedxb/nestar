import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
    constructor( private readonly MemberService: MemberService) {}

    @Mutation(() => String)
    public async signup(): Promise<string> {
        console.log('Mutation: signup');
        return this.MemberService.signup();
    }

    @Mutation(() => String)
    public async login(): Promise<string> {
        console.log('Mutation: login');
        return this.MemberService.login();
    }
    @Mutation(() => String)
    public async updatemember(): Promise<string> {
        console.log('Mutation: updatemember');
        return this.MemberService.updatemember();
    }

    @Query(() => String)
    public async getmember(): Promise<string> {
        console.log('Query: getmember');
        return this.MemberService.getmember();
    }
}
