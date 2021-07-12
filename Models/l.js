export default class Leopard{
    constructor(){
        this.name = 'name',
        this.age = 0,
        this.spotted = true, 
        this. color = 'color'
    }
    eat(food){
        console.log(`Chomp chomp chomp all the little ${food}ies.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}