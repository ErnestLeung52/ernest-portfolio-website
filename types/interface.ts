export interface ITypeWorkData {
	company: string;
	logoPath: string;
	role: string;
	date: string;
	techStacks: string[];
	bulletPoints: string[];
}

interface ITypeFeature {
	name: string;
	description: string[];
	imageSrc: string;
	imageAlt: string;
	githubURL: string;
	hostURL: string;
	techStack: string[];
}

export interface ITypeProject {
	name: string;
	features: ITypeFeature[];
}

export interface ITypeSkill {
	tech: string;
	proficiency: string;
	iconPath: string;
}

export interface ITypeSkills {
	skills: ITypeSkill[];
}
