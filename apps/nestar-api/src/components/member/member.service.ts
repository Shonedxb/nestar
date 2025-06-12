import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { MemberStatus } from '../../libs/enums/member.enum';
import { Message } from '../../libs/enums/common.enum';

@Injectable()
export class MemberService {
    constructor(@InjectModel('Member') private readonly memberModel: Model<Member>) {}
    
    public async signup(input: MemberInput): Promise<Member> {
        //TODO: Implement HASH password

        try {
            const result = await this.memberModel.create(input);
        //TODO: Implement Authentication token generation
            return result;
        }   catch (err) {
            console.log('Error, Service.model:', err);
            throw new BadRequestException(err);
        }
    }
    
    public async login(input: LoginInput): Promise<Member> {
        const { memberNick, memberPassword } = input;
        const response: Member = await this.memberModel
            .findOne({ memberNick: memberNick })
            .select('+memberPassword')
            .exec();

        if (!response || response.memberStatus === MemberStatus.DELETE) { throw new InternalServerErrorException(Message.NO_MEMBER_NICK); 
        } else if (response.memberStatus === MemberStatus.BLOCK) {
            throw new InternalServerErrorException(Message.BLOCKED_USER);
        }

        //TODO: Implement password verification with bcrypt or similar library

        const isMatch = memberPassword === response.memberPassword; // Placeholder for actual password check
        if (!isMatch) throw new InternalServerErrorException(Message.WRONG_PASSWORD);

        return response;
    }
    
    public async updateMember(): Promise<string> {
        console.log('Service: updatemember');
        return 'Member update successful';
    }
    
    public async getMember(): Promise<string> {
        console.log('Service: getmember');
        return 'getmember successful';
    }
}
