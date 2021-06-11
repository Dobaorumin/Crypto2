
//*COINS INFO*// 
const data = axios
.get(
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`
)
.then((res) => {
  const html = res.data.map((info) => {  
    const dato = document.getElementById("color");
    const precio = info.price_change_percentage_24h.toFixed(2)


    return `
    <div class="coin-container">
    <div class="coin-row">
    <div class="coin">
    <p class="coin-volume">${info.symbol.toUpperCase() + `<p class="eur">/EUR</p>`}</p>
    </div>
    <div class="coin-data">
    <p class="coin-price">${info.current_price} €</p>
    <p id="color" class="coin-percent ${precio < 0 ? 'red' : 'green'}">${info.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
    </div>
    </div>
    `
  })
  .join("");
  document.querySelector(".coin-app").insertAdjacentHTML("beforeend",html)
})
.catch((error) => {
  console.log(error);
});
