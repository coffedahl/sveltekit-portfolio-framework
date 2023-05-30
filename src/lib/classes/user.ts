export class User {
	private _firstName: string;
	private _lastName: string;
	private _username: string;
	private _password: string;

	constructor(firstName: string, lastName: string, username: string, password: string) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._username = username;
		this._password = password;
	}

	get firstName(): string {
		return this._firstName;
	}

	set firstName(firstName: string) {
		this._firstName = firstName;
	}

	get lastName(): string {
		return this._lastName;
	}

	set lastName(lastName: string) {
		this._lastName = lastName;
	}

	get username(): string {
		return this._username;
	}

	set username(username: string) {
		this._username = username;
	}

	get password(): string {
		return this._password;
	}

	set password(password: string) {
		this._password = password;
	}
}