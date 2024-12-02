/*
function Player(nickname){
    this.nickname = nickname  
    this.playedMatch = 0  
}

Player.prototype.GetTierLevel = function(){
    if(this.playedMatch <= 3){
        console.log(this.nickname + "| Rank: Elite")
    }
    else if(this.playedMatch > 3 && this.playedMatch <= 6){
        console.log(this.nickname + "| Rank: Champion")
    }
    else if(this.playedMatch > 6){
        console.log(this.nickname + "| Rank: Unreal")
    }
}

Player.prototype.Played = function(){
    this.playedMatch += 1
    console.log(this.nickname + " eddig " + this.playedMatch + " meccset ment.")
}

const gomszab = new Player("gomszab")
gomszab.Played()
gomszab.Played()
gomszab.GetTierLevel()
gomszab.Played()
gomszab.Played()
gomszab.GetTierLevel()
gomszab.Played()
gomszab.Played()
gomszab.Played()
gomszab.GetTierLevel()
console.log(gomszab);
*/

class Player{
    constructor(nickname){
        this.nickname = nickname
        this.playedMatch = 0
    }

    Played(){
        this.playedMatch += 1
        console.log(this.nickname + " eddig " + this.playedMatch + " meccset ment.")
    }

    GetTierLevel(){
        if(this.playedMatch <= 3){
            console.log(this.nickname + "| Rank: Elite")
        }
        else if(this.playedMatch > 3 && this.playedMatch <= 6){
            console.log(this.nickname + "| Rank: Champion")
        }
        else if(this.playedMatch > 6){
            console.log(this.nickname + "| Rank: Unreal")
        }
    }
}

const gomszab = new Player("gomszab")
gomszab.Played()
gomszab.Played()
gomszab.GetTierLevel()
gomszab.Played()
gomszab.Played()
gomszab.GetTierLevel()
gomszab.Played()
gomszab.Played()
gomszab.Played()
gomszab.GetTierLevel()
console.log(gomszab);


// function Person(name){
//     this.name = name;
// }

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

Person.prototype.GetName = function(){
    return this.name;
}

// function Student(name, school){
//     Person.call(this, name);
//     this.school = school;
// }

class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
}

// Object.setPrototypeOf(Student.prototype, Person.prototype)

const student = new Student("Géza", "Bolyai");
console.log("Név: " + student.GetName() + " | " + "Iskola: " + student.school);

class Animal {
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log(this.name + " hangot ad ki.")
    }
}

class Bird extends Animal {
    constructor(name){
        super(name);
    }
    fly(){
        console.log(this.name + " repül.");
    }
}

class Mammal extends Animal { 
    constructor(name){
        super(name);
    }
    walk(){
        console.log(this.name + " sétál."); 
    } 
}

const bird = new Bird("Sas"); 
bird.sound(); 
bird.fly();

const mammal = new Mammal("Kutya");
mammal.sound();
mammal.walk();