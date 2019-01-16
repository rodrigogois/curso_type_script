requirejs.config({
    baseUrl:"/js",
    paths:{
        "teste":"teste",
        "module1":"module1"
    }
})

requirejs(['teste'],function(){
})