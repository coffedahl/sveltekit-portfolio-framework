export class Website {
	private _publicUrl: string;
	private _pageUrl: string;
	private _name: string;
	private _imgUrl: string;

	constructor(publicUrl: string, pageUrl: string, name: string, imgUrl: string) {
		this._publicUrl = publicUrl;
		this._pageUrl = pageUrl;
		this._name = name;
		this._imgUrl = imgUrl;
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
}
