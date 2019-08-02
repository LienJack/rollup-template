console.log('hello')

class Hello {
  constructor(props) {
    this.name = props
  }
  say () {
    console.log(this.name)
  }
}

let hello = new Hello('ni hao')

hello.say()

(()=>{console.log('es6')})()
