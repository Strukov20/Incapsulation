function User(name, age){
    this.name = name;
    // this.age = age;
    let userAge = age;

    this.say = function() {
        console.log( ` User Name: ${this.name}, age: ${userAge}`);
    };
    this.getAge = function() {
        return userAge;
    };
    this.setAge = function(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            userAge = age;
        } else {
            console.log('Error');
        }
    };
}

let ivan = new User('Ivan', 25);
console.log(ivan.name);
console.log(ivan.userAge);
console.log(ivan.getAge());

ivan.setAge(30);
console.log(ivan.getAge());

ivan.say();

// ПРИЙОМ МОДУЛЬ - - -- -- -- - - - - - -- - - -- - - -
// скрытый метод

let number = 1;

(function(){
    let number =2 ;
    console.log(number);


    return console.log(number + 3);
}());

console.log(number);

// об'єктний інтерфейс

let user = (function(){
    let privat = function(){
        console.log('i`m privat');
    };
    return{
        sayHelllo: function(){
            console.log('hello!');
        }

    };
}());

console.log(user);
console.log(user.sayHelllo());



let user = (function(){
    let privat = function(){
        console.log('i`m privat');
    };

    let sayHello = function(){
        console.log('hello!');
    };
    return{
        sayHello: sayHello

    };
}());

console.log(user);
console.log(user.sayHelllo());



