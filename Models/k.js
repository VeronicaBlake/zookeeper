class Kingfisher{
    constructor(){
        this.name = 'name',
        this.color = 'color',
        this. wingspan = 0,
        this.kingSlayer = Boolean
    }
    eat(food){
        console.log(`peck peck peck all the ${food}s.`)
    }
    speak(noise){
        console.log(`The ${this.constructor.name} says ${noise}.`)
    }
}