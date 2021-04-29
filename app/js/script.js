console.log('start');
setTimeout(
    function() {alert('stop');},5000
)
clearTimeout(id);
console.log('finish');

// $.ajax({
//     type: 'GET',
//     cache: false,
//     url: 'https://jsonplaceholder.typicode.com/todos/',
//     success: function(data, textStatus,request){
//     // console.log(data);
//     data = JSON.stringify(data);
//     // console.log(data);
//     data = JSON.parse(data);
//     // console.log(typeof data);
    
// let result = "";
//     for (let i = 0; i < data.length; i++) {
//     //   console.log(data[i].userId);
//     //   console.log(data[i].id);
//     //   console.log(data[i].title);
//     //   console.log(data[i].completed);

//      result+= 
//      '<tr>'+
//      '<td>'+
//      data[i].userId+
//      '</td>'+
//      '<td>'+
//      data[i].id+
//      '</td>'+
//      '<td>'+
//      data[i].title+
//      '</td>'+
//      '<td>'+
//      data[i].completed;
//      '</td>'+
//      '</tr>'+
//     }
//     $('#result').append("<table>"+result+"</table>");


//     // console.log(textStatus);
//     // console.log(request);
// },
// error: function (error){
//     console.log(error);
// }
// })
