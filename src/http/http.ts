enum HttpVerbs {
    GET = 'GET',
    POST = 'POST'
}

export default class Http {

    get(url: string) {
        const promise = new Promise((resolve, reject) => {
            let xhttp = this.createXhttp(HttpVerbs.GET, url);
            this.configureCallback(xhttp, resolve, reject);
            xhttp.send();
        });
    }

    private createXhttp(verb: HttpVerbs, url: string) {
        let xhttp = new XMLHttpRequest();
        xhttp.open(verb, url, true);
        return xhttp
    }

    private configureCallback(xhttp, resolve, reject) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            }
        };
    }

    post() {

    }
}