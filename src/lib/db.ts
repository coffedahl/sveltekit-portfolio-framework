import { Surreal } from 'surrealdb.js';
import { Session } from './classes/session';
import { User } from './classes/user';

/**
 * Database handler
 */
export class Database {
	private _db: Surreal;
	/**
	 * Constructor.
	 */
	constructor(url: string) {
		this._db = new Surreal(url);
	}

	async initDb(user: string, pass: string, ns: string, db: string) {
		this._db.signin({ user, pass });
		this._db.use(ns, db);
	}

	/**
	 * USERS
	 */
	async getUserByUsername(username: string): Promise<User> {
		const response = await this._db.query('SELECT * FROM user WHERE username=$username;', {
			username
		});
		if (response[0].result[0]) {
			return User.createFromObject(response[0].result[0]);
		} else {
			throw new Error('No user with username: ' + username + ' was found.');
		}
	}

	/**
	 * SESSIONS
	 */
	async getSessionBySessionId(sessionId: string): Promise<Session> {
		const response = await this._db.query('SELECT * FROM $sessionId;', {
			sessionId: 'session:' + sessionId
		});
		if (response[0].result[0]) {
			return Session.createFromObject(response[0].result[0]);
		} else {
			throw new Error('Session with id: ' + sessionId + ' was not found');
		}
	}
	async createSession(username: string): Promise<Session> {
		const session = Session.createSession(username);
		const response = await this._db.query(
			'CREATE $sessionId SET username=$username, expires=$expires;',
			{
				sessionId: 'session:' + session.sessionId,
				username: session.username,
				expires: session.expires
			}
		);
		if (response[0].result[0]) {
			return session;
		} else {
			throw new Error('Unable to create session for user: ' + username);
		}
	}

	async deleteSesssionById(sessionId: string): Promise<boolean> {
		const response = await this._db.query('DELETE $sessionId;', {
			sessionId: 'session:' + sessionId
		});
		if (response[0].status == 'OK') {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * GETTER AND SETTER
	 */
	get db() {
		return this._db;
	}
}
