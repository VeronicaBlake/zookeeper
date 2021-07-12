export default class Snake{
    constructor(){
        this.name = 'name',
        this.length = 0,
        this.color = 'color',
        this.malting = Boolean
    }
    eat(food){
        console.log(`Unhinge jaw and swallow the ${food}.`)
    }
    speak(noise){
        console.log(`the ${this.constructor.name} says ${noise}.`)
    }
}