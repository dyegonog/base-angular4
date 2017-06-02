import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export class HttpDouble extends Http {
	mockBackend: MockBackend;

	constructor() {
		let connectionBackend: MockBackend = new MockBackend();
		super(connectionBackend, new BaseRequestOptions());
		this.mockBackend = connectionBackend;
	}

	get connections(): any {
		return this.mockBackend.connections;
	}

	respondingWith(responseOptions: any, connection: MockConnection): void {
		connection.mockRespond(new Response(new ResponseOptions(responseOptions)));
	}
}