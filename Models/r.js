export default class Raven{
    constructor(){
        this.name = 'name',
        this.noise = 'Nevermore',
        this.metaphor = true 
    }
    eat(food){
        console.log(`Caw caw peck the ${food}.`)
    }
    speak(noise){
        console.log(`the ${this.constructor.name} quoth ${noise}.`)
    }
}