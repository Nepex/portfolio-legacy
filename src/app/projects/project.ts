export class Project {
    id: string;
    title: string;
    description: string;
    techUsed: string;
    isMobileProject: boolean;
    sourceCode: { frontEndUrl: string, backEndUrl: string };
    images: { src: string, thumb: string, caption: string }[];
}