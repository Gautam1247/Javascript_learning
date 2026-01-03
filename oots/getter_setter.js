//Using Class constructor
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  set password(value) {
    this._password = value;
  }
  get password() {
    return `${this._password}***`;
  }
}
const obj = new User("gautam", "gautam.12@gmail.com", "gautam1990");
console.log(obj.password);
//Using Constructor FuNCTION
function func(username, email, password) {
  this.username = username;
  this.email = email;
  Object.defineProperty(this, "password", {
    set: function (value) {
      this._password = value;
    },
    get: function () {
      return `${this._password}****`;
    },
  });
  this.password = password;
}
const obj2 = new func("gautam", "gautam@gmail.com", "abc123");
console.log(obj2.password);
//Using Object
const User3 = {
  _username: "Gautam",
  _password: "abc",
  set password(value) {
    this._password = value;
  },
  get password() {
    return `${this._password}****`;
  },
};
const obj3 = Object.create(User3);
console.log(obj3.password);
