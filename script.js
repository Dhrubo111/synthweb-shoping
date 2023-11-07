let cartButton = document.querySelector(".coustom-record")
let list = document.querySelector("ul")
let inputPrice = document.querySelector(".input-price")

let inputName = document.querySelector(".input-name")

let totalBalanceMassage = document.querySelector(".total-balance")

let refill = document.querySelector(".refill-balance")

let aircraftPriceButton = document.querySelector(".aircraft-price")

let castelPriceButton = document.querySelector(".castle-price")

let dimondPriceButton = document.querySelector(".diamond-price")

let crownPriceButton = document.querySelector(".crown-pirce")

let fishPriceButton = document.querySelector(".fish-price")

let watchPriceButton = document.querySelector(".watch-price")

let reffilGif = document.getElementById("refill-gif")


totalBalance = 200000000000

function historyForButtion(name , price){
  
  let listItem = document.createElement("li")
  let listText = document.createElement("span")
  let listBtn = document.createElement("button")
  listBtn.classList.add("delete")
  listItem.appendChild(listText)
  listText.textContent = `${name} $${price}`
  listItem.appendChild(listBtn)
  listBtn.textContent = "remove"
  list.appendChild(listItem)
  if(totalBalance > 0 ){
    printTotal()
  }else{
    totalBalanceMassage.textContent = "Paysa Nehi hay"
  }
 

  listBtn.addEventListener(
    "click" , ()=>{
      list.removeChild(listItem)

    }
  )



}


function printTotal(){
  totalBalanceMassage.textContent = `$${totalBalance}`

}
watchPriceButton.addEventListener(
  "click", ()=>{
    price = 60000000
    totalBalance = totalBalance - price
    printTotal()
    historyForButtion("white watch", price)

  }
)




fishPriceButton.addEventListener(
  "click", ()=>{
    price = 9990000000
    totalBalance = totalBalance - price
    printTotal()
    historyForButtion("magic fish", price)

  }
)






crownPriceButton.addEventListener(
  "click", ()=>{
    price = 4000000000
    totalBalance = totalBalance - price
    printTotal()
    historyForButtion("gem crown", price)

  }
)





dimondPriceButton.addEventListener(
  "click", ()=>{
    price = 380000000
    totalBalance = totalBalance - price
    printTotal()
    historyForButtion("Dimond", price)

  }
)



castelPriceButton.addEventListener(
  "click",()=>{
    price = 1900000000
    totalBalance = totalBalance - price
    printTotal()
    historyForButtion("castle", price)
  }
)

aircraftPriceButton.addEventListener(
  "click", ()=>{
    price = 660000000
    totalBalance = totalBalance - price
    printTotal()
    historyForButtion("privet aircraft", price)

  }
)

refill.addEventListener(
  "click", ()=>{
    totalBalance = 200000000000
    printTotal()
    
    reffilGif.style.display = "block"
    reffilGif.style.boxShadow = "0 0 30px pink"

    setTimeout(
      ()=>{
        reffilGif.style.display = "none"
      } , 3000
    )
    
  }
)

cartButton.addEventListener(
  "click" , ()=>{
    Name = inputName.value 
    Price = inputPrice.value
    inputName.value = ''
    inputPrice.value = ''
    let listItem = document.createElement("li")
    let listText = document.createElement("span")
    let listBtn = document.createElement("button")
    listBtn.classList.add("delete")
    listItem.appendChild(listText)
    listText.textContent = `${Name} $${Price}`
    listItem.appendChild(listBtn)
    listBtn.textContent = "remove"
    list.appendChild(listItem)
    totalBalance = totalBalance - Number(Price)
    if(totalBalance > 0 ){
      printTotal()
    }else{
      totalBalanceMassage.textContent = "Paysa Nehi hay"
    }
   

    listBtn.addEventListener(
      "click" , ()=>{
        list.removeChild(listItem)

      }
    )

  }
)