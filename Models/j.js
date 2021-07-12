export default class Jellyfish{
    constructor(){
        this.name = 'name',
        this.color = 'color',
        this.edible = false,
        this.tentacles = 0,
        this.stinging = Boolean
    }
    eat(food){
        console.log(`blurb blurb blurb all the ${food}ies.`)
    }
    speak(noise){
        console.log(`the ${this.constructor.name} says ${noise}.`)
    }
}