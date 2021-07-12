export default class Unicorn{
    constructor(){
        this.name = 'name',
        this.hornNumber = 1,
        this.color = 'color',
        this.magical = true
    }
    eat(food){
        console.log(`Chew chew the ${food}ies.`)
    }
    speak(noise){
        console.log(`the ${this.constructor.name} says ${noise}.`)
    }
}