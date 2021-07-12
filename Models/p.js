export default class Penguin{
    constructor(){
        this.name = 'name',
        this.canFly = false,
        this.blackAndWhite = true,
        this.age = 0
    }
    eat(food){
        console.log(`Peck peck peck all the ${food}ies.`)
    }
    speak(noise){
        console.log(`the ${this.constructor.name} says ${noise}.`)
    }
}