import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {

    public async signup(): Promise<string> {
        console.log('Service: signup');
        return 'Member signup successful';
    }
    
    public async login(): Promise<string> {
        console.log('Service: login');
        return 'Member login successful';
    }
    
    public async updatemember(): Promise<string> {
        console.log('Service: updatemember');
        return 'Member update successful';
    }
    
    public async getmember(): Promise<string> {
        console.log('Service: getmember');
        return 'getmember successful';
    }
}
