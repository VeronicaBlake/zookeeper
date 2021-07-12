export default class Quail{
    constructor(){
        this.name = 'name',
        this.wingspan = 0,
        this.color = 'color',
        this.quailing = Boolean
    }
    eat(food){
        console.log(`Peck peck the ${food}s.`)
    }
    speak(noise){
        console.log(`the ${this.constructor.name} says ${noise}.`)
    }
}