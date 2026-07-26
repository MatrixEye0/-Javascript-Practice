const myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)
console.log(myDate.getMonth()+1) // month start from 0 thats why we add 1 on it

const coustomise = myDate.toLocaleString('default',{
    weekday:"long",
    month: "2-digit",
    timeZone:"Asia/Kolkata",
    timeZoneName:"long"
});
console.log(coustomise)// we coustomise this in brief


const myts = Date.now()
console.log(Math.floor(myts/31536000000))// 1 jan 1970 se abb tak kitna time hua ahi
