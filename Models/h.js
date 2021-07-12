export default class Hippogriff{
    constructor(){
        this.hippo = false,
        this.name = 'name',
        this.color = 'color'
        this.wingspan = 0
    }
    eat(food){
        console.log(`Gobble gobble all the ${food}s.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}