export default class PostHttp {

    query() {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.send();
    }

    save() {
    }
}