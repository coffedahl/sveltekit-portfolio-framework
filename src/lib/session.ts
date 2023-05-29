export class Session {
	sessionId: string;
	expires: Date;
	username?: string;

	constructor(sessionId: string, expires: Date, username?: string) {
		this.sessionId = sessionId;
		this.expires = expires;
		this.username = username;
	}

	static createFromObject(object: any): Session {
		if (typeof object.sessionId === 'string') {
			try {
				const date = new Date(object.expire);
				return new Session(object.sessionId, date, object.username);
			} catch {
				throw console.error('Wrong type when trying to parse Session: ' + object);
			}
		} else {
			throw console.error('Wrong type when trying to parse Session: ' + object);
		}
	}

	validateSession(): boolean {
		const timeNow = new Date();
		if (timeNow < this.expires) {
			return false;
		} else {
			return true;
		}
	}
}
