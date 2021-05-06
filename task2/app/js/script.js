try{
    console.log("show");
    //  i;
    throw new SyntaxError("возникла ошибка");
     console.log("hidden");
}catch(err){
    console.log("Err + " + err.message + "---" + err.stack);
}finally {
    console.log("app is running");
}
console.log("script");







// $("#box").on("click",function(){
//     alert("Hello World");
// })

// $("#box").click(function() {
//     $("#box").animate({left: "100px"})
// })

// $("#box").hover(function(){
//     $("#box").css("background-color","grey");
// }, function(){
//     $("#box").css("background-color","brown");
// } );

// $(window).resize(function(){
//     console.log("Resize event");
// })

// $("#box").scroll(function() {
//     alert("Hello World");
// })

// $.ajax({
//     type: 'GET',
//     dataType: 'json',
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     success: function(data) {
//     $('#box').html(data);
//     }
//     });