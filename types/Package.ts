export interface IAuthor {
    email?: string;
    name: string;
    url?: string;
    username?: string;
}

export interface ILink {
    npm: string;
    bugs?: string;
    homepage?: string;
    repository?: string;
}

export interface IUser {
    email: string;
    username: string;
}

export interface IPackage {
    name: string;
    version: string;
    author: IAuthor;
    date: string;
    description: string;
    maintainers: IUser[];
    keywords: string[];
    links: ILink;
    publisher: IUser;
    scope: string;
}
