import { Surreal } from 'surrealdb.js';
import { Session } from './classes/session';
import { User } from './classes/user';

/**
 * Represents a connection to a database.
 */
export class Database {
	private _db: Surreal;

	/**
	 * Creates a new instance of the Database class.
	 * @param url The URL of the database.
	 */
	constructor(url: string) {
		this._db = new Surreal(url);
	}

	/**
	 * Initializes the database connection.
	 * @param user The username for authentication.
	 * @param pass The password for authentication.
	 * @param ns The namespace to use.
	 * @param db The database to use.
	 */
	async initDb(user: string, pass: string, ns: string, db: string) {
		this._db.signin({ user, pass });
		this._db.use(ns, db);
	}

	/**
	 * Retrieves a user from the database by their username.
	 * @param username The username of the user.
	 * @returns A promise that resolves to a User object.
	 * @throws An error if no user with the given username is found.
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
	 * Retrieves a session from the database by its session ID.
	 * @param sessionId The ID of the session.
	 * @returns A promise that resolves to a Session object.
	 * @throws An error if the session with the given ID is not found.
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

	/**
	 * Creates a new session for the specified user.
	 * @param username The username of the user.
	 * @returns A promise that resolves to the created Session object.
	 * @throws An error if the session cannot be created.
	 */
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

	/**
	 * Deletes a session from the database by its session ID.
	 * @param sessionId The ID of the session to delete.
	 * @returns A promise that resolves to a boolean indicating whether the session was successfully deleted.
	 */
	async deleteSessionById(sessionId: string): Promise<boolean> {
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
	 * Gets the underlying Surreal database object.
	 * @returns The Surreal database*/
	get db() {
		return this._db;
	}
}
