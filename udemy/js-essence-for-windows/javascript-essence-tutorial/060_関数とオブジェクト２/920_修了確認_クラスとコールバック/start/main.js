/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  hello() {
      console.log(`hello ${this.name}`);
  }
  old(){
    console.log(`I'am ${this.age}`)
  }
}

const bob = new Person('Bob', 23);
setTimeout(Person.prototype.hello.bind(bob),1000)
setTimeout(Person.prototype.old.bind(bob),2000)