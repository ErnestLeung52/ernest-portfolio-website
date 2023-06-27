export interface ITypeWorkData {
	company: string;
	logo: string;
	role: string;
	date: string;
	bulletPoints: string[];
}

export interface ITypeFeature {
	name: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
}

export interface ITypeProject {
	name: string;
	features: ITypeFeature[];
}
