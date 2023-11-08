var amounts = []
var dates = []
var amount = 265
 for (i=0 ; i <= 31 ; i++){
       amounts[i]=amount * 0.0226
       amount = amounts[i] + amount
       dates.push(i)
       console.log('Day '+ dates[i]+' Amount Earned '+ amounts[i]+ ' Total '+ amount)
}
console.log('TOTAL AMOUNT---'+ amount)
