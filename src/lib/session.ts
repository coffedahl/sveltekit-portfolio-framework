export interface Session {
	sessionId: string;
	expires: Date;
}

export function parseSession(object: any): Session {
	if (typeof object.sessionId === 'string' && typeof object.expires === 'string') {
		try {
			const expireDate = new Date(object.expire);
			return { sessionId: object.sessionId, expires: object.expires };
		} catch {
			throw console.error('Wrong type when trying to parse Session: ' + object);
		}
	} else {
		throw console.error('Wrong type when trying to parse Session: ' + object);
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
