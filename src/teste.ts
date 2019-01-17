import "module1";
import PostHttp from 'http/post-http';

function getPosts(responseText){
console.log(responseText);
}
new PostHttp().query(getPosts)