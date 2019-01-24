import Http from './http';
import Response from './response';

export default class PostHttp {

    private http: Http;
    constructor() {
        this.http = new Http();
    }

    query():Promise<Array<any>> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response: Response) {
                console.table(JSON.parse(response.body));
                return JSON.parse(response.body);
            })
    }

    save() {
    }
}