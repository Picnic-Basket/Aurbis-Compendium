export class Category {
    private _id:number;
    private _name: String;
    private _subCategories: Category[];

    constructor();
    constructor(obj?:any) {
        this._id = obj && obj._id;
        this._name = obj && obj._name;
        this._subCategories = obj && obj._subCategories || [];
    }

	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}
    
	public get name(): String {
		return this._name;
	}

	public set name(value: String) {
		this._name = value;
	}

	public get subCategories(): Category[] {
		return this._subCategories;
	}

	public set subCategories(value: Category[]) {
		this._subCategories = value;
	}
}