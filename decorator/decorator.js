

function User() { //constructor for user instances
    var names = ['Robert', 'Ned', 'Jhon', 'Tirion', 'Jamie', 'Sersey', 'Arya', 'Sansa', 'Petir', 'Reyegar']
    var surnames = ['Targarien', 'Mormont', 'Stark', 'Tirell', 'Lannister', 'Arren']
    this.name = names[Math.round(Math.random() * (names.length-1))] + ' ' + surnames[Math.round(Math.random() * (surnames.length-1))]
    this.currentDate = new Date()
    this.lastVisitDate =   new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()+1, Math.round(Math.random() * (this.currentDate.getDate()-1)) , Math.round(Math.random() * this.currentDate.getHours()));
    this.tableDate = this.lastVisitDate.getDate()+'/'+ this.lastVisitDate.getMonth() +'/'+  this.lastVisitDate.getFullYear()
    this.globalDiscount = Math.round(Math.random() * 100); 
    this.nightDiscount =  Math.round(Math.random() * 150); 
    this.weekendDiscount =  Math.round(Math.random() * 200); 
    this.ordersCount =  Math.round(Math.random() * 25);
    this.bonus = Math.round(Math.random() * 100);
}

var user = new User();

function getDiscount(user) {  
    this.lastVisitDate = user.lastVisitDate;
    this.globalDiscount = user.globalDiscount;
    this.nightDiscount =  user.nightDiscount;
    this.weekendDiscount = user.weekendDiscount;
    this.totalDiscount = 0;
    this.ordersTotalPrice =   Math.round(Math.random() * 100);

    if (dayOrNight()) {
        user.globalDiscount += user.nightDiscount;
    }
    else if (weekend()){
        user.globalDiscount += user.weekendDiscount;
    }
    else if (dayOrNight() && weekend()){
        user.globalDiscount += (user.weekendDiscount + user.nightDiscount)
    }

    this.totalDiscount = user.globalDiscount; 
}

function dayOrNight(){ //find out if cuurent time is night and we should add night discount
    var night = false;
    if (getCurrentDate().time >= 0 && getCurrentDate().time <= 5 || getCurrentDate().time >= 23 && getCurrentDate().time <= 24) {
        isNight = true;
    }
    return night;
}


function weekend(){ //find out if cuurent time is night and we should add weekend discount
    var weekend = false
  if (user.currentDate.getDay() > 5) {
    weekend = true;
  }
  return user.globalDiscount;
}



function getBonus() { //find out how big will be user's bonus
    var user = new User();
    this.ordersCount = user.ordersCount + 1;
    this.lastVisitDate = user.lastVisitDate;
    this.currentDate = user.currentDate.getDate() +'/'+ user.currentDate.getMonth() +'/'+ user.currentDate.getFullYear() +' : ' + user.currentDate.getHours() +' hours';
    this.bonus = сountBonus();
    
  }
    function сountBonus() {
        var bonus;
        var gap = this.currentDate.getDate() - this.lastVisitDate.day

        if(gap <= 10) {
            bonus = (gap - 2) * 24 + (24 - user.lastVisitDate.getHours()) +  this.currentDate.getHours();
        } else {
            bonus = 0;
        }
    }




$('#submit').click(function(user) { //add new User into table as a new row
 var users = [];
    var user = new User();
  
    users.push(user);
    $('tbody').append('<tr />');
    $('tr:last').append(`<td>${user.name}</td>`).append(`<td>${user.globalDiscount +' %'}</td>`)
        .append(`<td>${user.tableDate}</td>`)
        .append(`<td>${'$ '+ user.bonus}</td>`)
        .append(`<td>${user.ordersCount}</td>`)
        console.log(users)
  
})

