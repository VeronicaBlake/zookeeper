export default class Nematode{
    constructor(){
        this.name = 'name',
        this.squirmy = true,
        this.ringworm = true,
        this.lifespan = 0
    }
    eat(food){
        console.log(`Slurp slurp slurp the ${food}.`)
    }
    speak(noise){
        console.log(`the ${this.constructor.name} says ${noise}.`)
    }
}