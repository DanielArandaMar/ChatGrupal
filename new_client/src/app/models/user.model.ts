export class User {
    constructor(
        public _id: string,
        public name: string,
        public password: string,
        public image: string,
        public role: string,
        public created_at: string
    ){}
}