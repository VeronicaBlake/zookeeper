export default class Giraffe{
    constructor(){
        this.name = 'name'
        this.neck = 'long',
        this.lifespan = 0,
        this.tongueColor = 'black',
        this.evil = Boolean
    }
    eat(food){
        console.log(`Gobble gobble all the ${food}s.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}