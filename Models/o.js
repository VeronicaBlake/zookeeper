export default class Octopus{
    constructor(){
        this.name= 'name',
        this.legs = 0,
        this.smart = true
    }
    eat(food){
        console.log(`Slurp slurp slurp the ${food}.`)
    }
    speak(noise){
        console.log(`the ${this.constructor.name} says ${noise}.`)
    }
}