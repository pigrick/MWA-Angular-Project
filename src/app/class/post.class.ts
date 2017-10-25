export class Post {
    _id: String;
    title: String;
    content: String;
    type: PostType;
    author: String;
    dateCreated: Date;
    rating: Rating[];
}

export class Rating{
    username: String;
    rating: number;
}
export enum PostType{
    Story,
    Poem,
    Quote
}