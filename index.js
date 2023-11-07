let name = "Felipao"
let age = 30

class heroi{
    constructor(tipo, ataque){
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log( `O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let guerreiro = new heroi("guerreiro", "espada")
let mago = new heroi("mago", "magia")
let monge = new heroi("monge", "artes marciais")
let ninja = new heroi("ninja", "shuriken")

guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()
