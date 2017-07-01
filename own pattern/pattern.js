var templateString = 'Hello, {{title}} {{name}} from {{city}}!'

function User() { //constructor for user instances
var names = ['Robert', 'Ned', 'Jhon', 'Tirion', 'Jamie', 'Sersey', 'Arya', 'Sansa', 'Petir', 'Reyegar']
var surnames = ['Targarien', 'Mormont', 'Stark', 'Tirell', 'Lannister', 'Arren']
var city = ['Winterfell', 'Highgarden', 'Dorn', 'Braavos', 'Oldtown', 'Lannisport']
var title = ['Sir', 'Milady', 'King', 'Your majesty', 'Lord']

this.name = names[Math.round(Math.random() * names.length)] + ' ' + surnames[Math.round(Math.random() * surnames.length)]
this.city = city[Math.round(Math.random() * city.length)] 
this.title = title[Math.round(Math.random() * title.length)] 
}


var compile = function (template) {
  return function (object) {
    var header = template.replace(/{{\w+}}/g, function (expression) {
      var index = expression.substr(2, expression.length - 4);
       return (object[index] !== undefined) ? substr = object[index] : ""
    });
    return header;
  }
}


var template = compile(templateString);

function add() {
var user = new User()
var person = {'title':user.title, 'name': user.name, 'city': user.city};
document.querySelector('#user').innerHTML = '<p>' + template(person) + '</p>';

user = new User()
document.querySelector('#user').innerHTML = '<p>' + template(person) + '</p>';

}


