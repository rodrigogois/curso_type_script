import Response from "./response";

enum HttpVerbs {
    GET = "GET",
    POST = "POST",
}

export default class Http {

    public get(url: string): Promise<Response> {
        return new Promise((resolve, reject) => {
            const xhttp = this.createXhttp(HttpVerbs.GET, url);
            this.configureCallback(xhttp, resolve, reject);
            xhttp.send();
        });
    }

    public post(url: string, data: object): Promise<Response> {
        return new Promise((resolve, reject) => {
            const xhttp = this.createXhttp(HttpVerbs.POST, url);
            this.configureCallback(xhttp, resolve, reject);
            xhttp.send(JSON.stringify(data));
        });
    }

    private createXhttp(verb: HttpVerbs, url: string) {
        const xhttp = new XMLHttpRequest();
        xhttp.open(verb, url, true);
        return xhttp;
    }

    private configureCallback(xhttp, resolve, reject) {
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                const response = new Response(this.responseText, this.status);
                if (this.status.toString().startsWith("20")) {
                    resolve(response);
                }
            }

        };
    }
}