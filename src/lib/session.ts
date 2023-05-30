/**
 * Represents a session.
 */
export class Session {
	/** The session ID. */
	private _sessionId: string;
	/** The expiration date of the session. */
	private _expires: Date;
	/** The username associated with the session, if available. */
	private _username?: string;

	/**
	 * Creates a new Session instance.
	 * @param sessionId - The session ID.
	 * @param expires - The expiration date of the session.
	 * @param username - The username associated with the session (optional).
	 */
	constructor(sessionId: string, expires: Date, username?: string) {
		this._sessionId = sessionId;
		this._expires = expires;
		this._username = username;
	}

	/**
	 * Creates a new Session instance from an object.
	 * @param object - The object to create the session from.
	 * @returns A new Session instance.
	 * @throws Error if the object is of the wrong type.
	 */
	static createFromObject(object: any): Session {
		const sessionId = object.sessionId || object._sessionId;
		const expires = object.expires || object._expires;
		const username = object.username || object._username;

		if (typeof sessionId === 'string' && typeof expires === 'string') {
			try {
				const date = new Date(expires);
				return new Session(sessionId, date, username);
			} catch {
				throw new Error('Wrong type when trying to parse Session: ' + JSON.stringify(object));
			}
		} else {
			throw new Error('Wrong type when trying to parse Session: ' + JSON.stringify(object));
		}
	}

	/**
	 * Gets the session ID.
	 * @returns The session ID.
	 */
	get sessionId(): string {
		return this._sessionId;
	}

	/**
	 * Sets the session ID.
	 * @param value - The session ID to set.
	 */
	set sessionId(value: string) {
		this._sessionId = value;
	}

	/**
	 * Gets the expiration date of the session.
	 * @returns The expiration date.
	 */
	get expires(): Date {
		return this._expires;
	}

	/**
	 * Sets the expiration date of the session.
	 * @param value - The expiration date to set.
	 */
	set expires(value: Date) {
		this._expires = value;
	}

	/**
	 * Gets the username associated with the session.
	 * @returns The username or undefined if not available.
	 */
	get username(): string | undefined {
		return this._username;
	}

	/**
	 * Sets the username associated with the session.
	 * @param value - The username to set.
	 */
	set username(value: string | undefined) {
		this._username = value;
	}

	/**
	 * Checks if the session is valid.
	 * @returns True if the session is valid, otherwise false.
	 */
	validateSession(): boolean {
		const timeNow = new Date();
		return timeNow < this.expires;
	}
}
