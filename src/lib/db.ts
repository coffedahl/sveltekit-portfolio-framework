import { Session } from './session';
import { User } from './user';
import { randomBytes } from 'crypto';

/**
 * Mock database implementation.
 */
export class Database {
	private sessions: Session[];
	private users: User[];

	/**
	 * Constructor.
	 */
	constructor() {
		this.sessions = [];
		this.users = [new User('Christoffer', 'Dahl', 'coffedahl', 'test')];
	}

	/**
	 * Create a new session for a given username.
	 * @param {string} username - The username for the session.
	 * @returns {Session} The created session object.
	 */
	public createSession(username: string): Session {
		const sessionId = randomBytes(16).toString('hex');
		const expires = new Date();
		expires.setHours(expires.getHours() + 2);

		const sessionObject = new Session(sessionId, expires, username);

		this.sessions.push(sessionObject);

		return sessionObject;
	}

	/**
	 * Get a session object by its key.
	 * @param {string} key - The key of the session to retrieve.
	 * @returns {Session} The session object if found.
	 * @throws {Error} If the session is not found.
	 */
	public getSessionByKey(key: string): Session {
		const session = this.sessions.find((e) => e.sessionId === key);

		if (session) {
			return session;
		} else {
			throw new Error('Session not found');
		}
	}

	/**
	 * Get all sessions in the database.
	 * @returns {Session[]} An array of session objects.
	 */
	public getAllSessions(): Session[] {
		return this.sessions;
	}

	/**
	 * Get a user object by username.
	 * @param {string} username - The username of the user to retrieve.
	 * @returns {User} The user object if found.
	 * @throws {Error} If the user is not found.
	 */
	public getUserByUsername(username: string): User {
		const user = this.users.find((e) => e.username === username);

		if (user) {
			return user;
		} else {
			throw new Error('User not found');
		}
	}
}
