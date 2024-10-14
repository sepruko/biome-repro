/**
 * If possible, put your minimal reproduction in this file, but feel free to
 * create other files elsewhere in the project if necessary.
 *
 * Once you have a minimal reproduction, commit it and push it to a public
 * GitHub repo.
 */

export type MyType = {
	[index: string]: string;
};

export type MyOtherType = {
	readonly [index: string]: string;
};

export interface MyInterface {
	[index: string]: string;
}

export interface MyOtherInterface {
	readonly [index: string]: string;
}

export class MyClass {
	[index: string]: string;
}

export class MyOtherClass {
	readonly [index: string]: string;
}
