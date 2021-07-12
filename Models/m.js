export default class Minotaur{
    constructor(){
        this.name = 'name',
        this.color = 'color',
        this.manEater = true,
        this.peopleEaten = 0
    }
    eat(food){
        console.log(`Crunch crunch crunch all the ${food}'s bones.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}