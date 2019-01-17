import Http from './http';

export default class PostHttp {

    private http: Http;
    constructor() {
        this.http = new Http();
    }

    query(callable) {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
    }

    save() {
    }
}