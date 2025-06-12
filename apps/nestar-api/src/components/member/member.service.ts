import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { MemberInput } from '../../libs/dto/member/member.input';

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
    
    public async login(): Promise<string> {
        console.log('Service: login');
        return 'Member login successful';
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
