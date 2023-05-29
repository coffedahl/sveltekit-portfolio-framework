import { Session } from './session';
import { User } from './user';
import { randomBytes } from 'crypto';

// Create mock database
export class Database {
	// Variables
	sessions: Array<Session>;
	users: Array<User>;
	// Constructor
	constructor() {
		this.sessions = [];
		this.users = [new User('Christoffer', 'Dahl', 'coffedahl', 'test')];
	}

	// Sessionfunction
	createSession(username: string): Session {
		// Create variables
		const sessionId = randomBytes(16).toString('hex');
		const expires = new Date();
		expires.setHours(expires.getHours() + 2);
		// Create object
		const sessionObject = new Session(sessionId, expires, username);
		// Add to database
		this.sessions.push(sessionObject);
		// Delete username and return object
		return sessionObject;
	}

	/**
	 * Function for getting a session from a key
	 * @param key The key that is beeing found
	 * @returns Session object
	 */
	getSessionByKey(key: string): Session {
		// Find the session with the key
		const session = this.sessions.find((e) => e.sessionId == key);
		// If session is fund
		if (session) {
			return session;
		} else {
			throw console.error('session not found');
		}
	}

	/**
	 * Function for getting all sessions in database
	 * @returns Array with sessions
	 */
	getAllSessions(): Array<Session> {
		return this.sessions;
	}

	/**
	 * Function for getting users by username
	 * @param username The username for the user
	 * @returns User object
	 */
	getUserByUsername(username: string): User {
		// Find user with username
		const user = this.users.find((e) => e.username == username);
		// If user is found
		if (user) {
			return user;
		} else {
			throw console.log('No user with username: ' + username + ' was found');
		}
	}
}
