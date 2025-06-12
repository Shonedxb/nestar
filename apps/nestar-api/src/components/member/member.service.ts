import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
    constructor(@InjectModel('Member') private readonly memberModel: Model<null>) {}
    
    public async signup(): Promise<string> {
        console.log('Service: signup');
        return 'Member signup successful';
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
