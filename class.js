class Trainer{
  constructor(){
    this.name = name
    this.party  = []
  }
  all = () => {
    return this.party
  }

  get = (name) => {
    for (let i = 0; i < this.party.length; i++){
      if(name == this.party[i].name){
        return this.party[i]
      }
    }
  }
}
    class Pokemon{
      constructor(myJson){
        this.name = name
        this.hp = null
        this.atk = null
        this.def = null
        this.abilities = []
      }
}
