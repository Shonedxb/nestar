import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { Roles } from '../auth/decorators/roles.decorator';
import { MemberType } from '../../libs/enums/member.enum';
import { RolesGuard } from '../auth/guards/roles.guard';

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

    @UseGuards(AuthGuard)
    @Mutation(() => String)
    public async updateMember(@AuthMember('_id') memberId: ObjectId): Promise<string> {
        console.log('Mutation: updatemember');
        return this.memberService.updateMember();
    }

    @UseGuards(AuthGuard)
    @Query(() => String)
    public async checkAuth(@AuthMember('memberNcik') memberNick: string): Promise<string> {
        console.log('Query: checkauth');
        console.log('memberNick:', memberNick);
        return `Hello ${memberNick}`;
    }   

    @Roles(MemberType.USER, MemberType.AGENT)
    @UseGuards(RolesGuard)
    @Query(() => String)
    public async checkAuthRoles(@AuthMember() authMember: Member): Promise<string> {
        console.log('Query: checkAuthRoles');
        return `Hello ${authMember.memberNick}, you are authenticated with role: ${authMember.memberType} (memberId: ${authMember._id})`;
    } 

    @Query(() => String)
    public async getMember(): Promise<string> {
        console.log('Query: getmember');
        return this.memberService.getMember();
    }

    /** ADMIN **/
    @Roles(MemberType.ADMIN)
    @UseGuards(RolesGuard)
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
