// практика по аватарке
// let name = "https://api.github.com/users/Yuliya0712"

// $.ajax({
//   url: "https://api.github.com/users/Yuliya0712",
//   type: "GET",
//   dataType: "json",
//   success: function(res) {
//     console.log(res);
//     for (let item in res){
//         console.log(item+"="+res[item]);
//         $('#result').append('<div>'+res[item]+'</div>');

//     }


    // $('#result').append('<div>'+res.avatar_url+'</div>');
    // $('#result').append('<div>'+JSON.stringify(res)+'</div>');
//   },
// });

// function Animal(name){
//     this.name = name;
//     this.speed = 0;
// }

// function Rabbit(name){
//     this.eats = true;
//     this.name = name;
//     this.speed = 0;
// }

// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;



// let obj = new Rabbit("T-Rex");

// for (let item in obj){
//     console.log(item + '=' +obj.hasOwnProperty(item));
// }
// console.log(typeof obj.eats);

// String.prototype.repeat = function(times){
//     return new Array(times+1).join(this);
// }

// console.log("yulia".repeat(5));


class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log("Hi from " + this.name);
    }
}

// let user = new User("Alex");
// user.sayHi();

class Admin extends User{
sayHi(){
    super.sayHi();
    console.log("By from " + this.name);
}
}
let admin = new Admin("Serhii");
console.log(admin.sayHi());