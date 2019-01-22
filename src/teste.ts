import "module1";
import PostHttp from 'http/post-http';

function getPosts(responseText){
    console.table(responseText);
}
new PostHttp().query();