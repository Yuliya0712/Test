// $("#container").children().css("background-color", "yellow");

// let n = $(".item").length;

// for(let i = 0; i < n; i++ ){
//     if (i%2) {
//         $(".item").eq(i).css("background-color","yellow");
//     }else{
//         $(".item").eq(i).css("background-color","green");
//     }
// }

// let n = $(".item").length;
// console.log($("#container").height());
// console.log($(window).height());

//  for(let i = 0; i < n; i++ ){
//     $(".item").eq(i).css("background-color","yellow");
//  }

//  $(".item").each(function (index) {
//      if(index%2){
//         $(this).addClass("yellow");
//      }else{
//         $(this).html("<strong>Hello world</strong>");
//      }
   //   console.log(index +" - "+ $(this).html());
   //   if($(this).hasClass("box")){
   //   $(this).removeClass("box");
   //   }
// console.log($(this).height(60));
//  })

//  console.log($(".item").parent()); 

// $("#container").after("<p>End of document</p>")

for(let i = 0; i < 5; i++){
   $("#block").append("<p>"+ i +" Lorem</p>");
}

