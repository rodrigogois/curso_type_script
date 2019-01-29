import Page from './page';
import PostHttp from '../http/post-http';

class PostNewPage implements Page {
    constructor(private postHttp: PostHttp) {
        this.init();
    }

    init(): void {
        this.postHttp.save({title:'teste', body:'conteudo'})
        .then((obj)=>console.table(obj))
        document.querySelector('#my-form').addEventListener('submit', (event: Event) => {
            event.preventDefault();
            this.submit();
            return false;
        })
    }

    submit() {

    }

    isvalid(): boolean {
        return true;
    }
}

new PostNewPage(new PostHttp());