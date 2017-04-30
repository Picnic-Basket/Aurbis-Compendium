export class Page{
    private _id:number;
    private _title:String;
    private _gallaryUrls:String[];
    private _textContent:String;

	

    constructor();
    constructor(obj?:any){
        this._id = obj && obj._id;
        this._title = obj && obj._title;
        this._gallaryUrls = obj && obj._gallaryUrls || [];
        this._textContent = obj && obj._textContent;
    }
    

	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}
    

	public get title(): String {
		return this._title;
	}

	public set title(value: String) {
		this._title = value;
	}
    

	public get gallaryUrls(): String[] {
		return this._gallaryUrls;
	}

	public set gallaryUrls(value: String[]) {
		this._gallaryUrls = value;
	}
    
    public get textContent(): String {
		return this._textContent;
	}

	public set textContent(value: String) {
		this._textContent = value;
	}
}