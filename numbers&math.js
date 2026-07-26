 const score = 400
 console.log(score,typeof score)

 const news = new Number(47)
 console.log(news)
 console.log(news.toString().length)
 console.log(news.toFixed(3))//give numbers of zeros after point use in ecommers//

 const other = 123.9077
 console.log(other.toPrecision(3))// tell digit ke kitne number chaiye start se or ye round of bhi kar deta hai//
 console.log(news.toExponential(1))//It converts a number into scientific (exponential) notation.//

 const num = 30000000
 console.log(num.toLocaleString())// default USA standard but my pc set india so it show indian way//
 console.log(num.toLocaleString('en-US'))// change in which country you want//

 //========+++++++++ MATH +++++++++==========//

 console.log(Math.abs(-4))//conver - in + & + in + we use direct math function from here

 const value = 456.34
 console.log(Math.round(value))// Math lagana must hai
 console.log(Math.floor(value))
 console.log(Math.ceil(value))

 console.log((Math.random()*10)+1)// give random value between 0 and 1 if multiply by 10 value given multi by 10
// if want one digit value so wrap (Math.random()*10)+1 this whole in Math.floor, ceil, round.

const min=10
const max=20
console.log(Math.round(Math.random()*(max-min+1))+min)


