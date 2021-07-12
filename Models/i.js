export default class Iguana{
    constructor(){
        this.name = 'name',
        this.color = 'color',
        this.dragon = false 
        this.lifespan = 0
    }
    eat(food){
        console.log(`Gobble gobble all the ${food}s.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}