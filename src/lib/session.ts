export interface Session {
	sessionId: string;
	expires: Date;
	username?: string
}

export function parseSession(indata: any): Session {
	if (typeof indata.sessionId === 'string') {
		try {
			const expireDate = new Date(indata.expire);
			return { sessionId: indata.sessionId, expires: expireDate };
		} catch {
			throw console.error('Wrong type when trying to parse Session: ' + indata);
		}
	} else {
		throw console.error('Wrong type when trying to parse Session: ' + indata);
	}
}

export function validateSession(session: Session): boolean {
	const timeNow = new Date();
	if (timeNow < session.expires) {
		return false;
	} else {
		return true;
	}
}
