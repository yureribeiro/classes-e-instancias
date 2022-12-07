class User {
  constructor( fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('login realizado com sucesso!')
    } else {
      console.log('falha ao fazer login! email ou senha incorretos.')
    }
  }
}

const yure = new User('yure ribeiro', 'yureribeiro@gmail.com', 'yure1234')

yure.login('yureribeiro@gmail.com', 'yure1234')