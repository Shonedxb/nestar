import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class MemberResolver {
    constructor( private readonly memberService: MemberService) {}

    @Mutation(() => Member)
    public async signup(@Args('input') input: MemberInput): Promise<Member> {
        console.log('Mutation: signup');
        return this.memberService.signup(input);
    }

    @Mutation(() => Member)
    public async login(@Args('input') input: LoginInput): Promise<Member> {
        console.log('Mutation: login');
        return this.memberService.login(input);
    }

    // Authenticated member operations
    @Mutation(() => String)
    public async updateMember(): Promise<string> {
        console.log('Mutation: updatemember');
        return this.memberService.updateMember();
    }

    @Query(() => String)
    public async getMember(): Promise<string> {
        console.log('Query: getmember');
        return this.memberService.getMember();
    }

    /** ADMIN **/

//Authoriziation operations: ADMIN
@Mutation(() => String)
public async getAllMemberbyAdmin(): Promise<string> {
    return this.memberService.getAllMemberbyAdmin();
    }

// Authoriziation operations: ADMIN
@Mutation(() => String)
public async updateMemberbyAdmin(): Promise<string> {
    console.log('Mutation: updateMemberbyAdmin');
    return this.memberService.updateMemberbyAdmin();
    }
}
