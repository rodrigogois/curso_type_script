import Http from './http';
import Response from './response';

export default class PostHttp {

    private http: Http;
    private url = 'https://jsonplaceholder.typicode.com/posts';
    constructor() {
        this.http = new Http();
    }

    query(): Promise<Array<any>> {
        return this.http.get(this.url)
            .then(function (response: Response) {
                console.table(JSON.parse(response.body));
                return JSON.parse(response.body);
            });
    }

    save(data: { title: string, body: string }):Promise<object> {
        return this.http.post(this.url, data)
            .then(function (response: Response) {
                return JSON.parse(response.body)
            })
    }
}