import { Surreal } from 'surrealdb.js';

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

	get db() {
		return this._db;
	}
}
