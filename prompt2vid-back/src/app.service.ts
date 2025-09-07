import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	checkServer(): string {
		return 'REST API Server is working fine!';
	}
}
