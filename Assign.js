function Person(FirstName,LastName,OfficeAddress){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.OfficeAddress=OfficeAddress
}

var p1 = new Person("VEDA","SREE","BHAGYA NAGAR, KADAPA");
var p2 = new Person("KUSUMA","SREE","RK NAGAR , Hyderabad");
var p3 = new Person("MISHA","MAHATHI","INDIRA NAGAR,VISHAKAPATNAM");

console.log(p1);
console.log(p2);
console.log(p3);