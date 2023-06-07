export interface WebData {
	id: string;
	publicUrl: string;
	pageUrl: string;
	name: string;
	imgUrl: string;
}

export class Website {
	private _id: string;
	private _publicUrl: string;
	private _pageUrl: string;
	private _name: string;
	private _imgUrl: string;

	constructor(publicUrl: string, pageUrl: string, name: string, imgUrl: string, id: string) {
		this._id = id;
		this._publicUrl = publicUrl;
		this._pageUrl = pageUrl;
		this._name = name;
		this._imgUrl = imgUrl;
	}

	getDataAsObject(): WebData {
		return {
			id: this._id,
			publicUrl: this._publicUrl,
			pageUrl: this.pageUrl,
			name: this._name,
			imgUrl: this._imgUrl
		};
	}

	static createFromObject(object: any) {
		if (
			typeof object.publicUrl === 'string' &&
			typeof object.pageUrl === 'string' &&
			typeof object.name === 'string' &&
			typeof object.imgUrl === 'string' &&
			typeof object.id === 'string'
		) {
			return new Website(object.publicUrl, object.pageUrl, object.name, object.imgUrl, object.id);
		} else {
			throw new Error('Unable to create website from object: ' + JSON.stringify(object));
		}
	}

	get publicUrl(): string {
		return this._publicUrl;
	}

	set publicUrl(url: string) {
		this._publicUrl = url;
	}

	get pageUrl(): string {
		return this._pageUrl;
	}

	set pageUrl(url: string) {
		this._pageUrl = url;
	}

	get name(): string {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	get imgUrl(): string {
		return this._imgUrl;
	}

	set imgUrl(url: string) {
		this._imgUrl = url;
	}

	get id(): string {
		return this._id;
	}
	set id(id: string) {
		this._id = id;
	}
}
