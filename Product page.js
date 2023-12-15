function Searchitem(){
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase()
    let stocks = document.getElementsByClassName("stock")

    for (let i = 0; i < stocks.length; i++) {
       if(stocks[i].textContent.toLowerCase().includes(input)){
        stocks[i].style.display =""
       }else{
        stocks[i].style.display ="none"

       }
        
    }
}