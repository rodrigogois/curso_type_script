import Http from './http';
import Response from './response';

export default class PostHttp {

    private http: Http;
    constructor() {
        this.http = new Http();
    }

    query() {
        this.http.get('http://gateway.marvel.com:80/v1/public/characters')
            .then(function (response: Response) {
                console.log(JSON.parse(response.body));
                console.log(response.status);
            })
    }

    save() {
    }
}