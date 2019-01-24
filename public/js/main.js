requirejs.config({
    baseUrl:"/js",
    paths:{
        "teste":"teste",
        "page/post-list-page":"page/post-list-page"
    }
})

requirejs(['page/post-list-page'],function(){
})