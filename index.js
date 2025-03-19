fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nike") // I a query of my liking
  .then(res => res.json())
  .then(data => {
    console.log(data.urls.regular);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch(err => {
    // This is just to make sure that when there is an error on the image display, this image link will be the backup so that it doesn't look like nothing is displaying.
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1580894529573-fc5e3f78ba06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDIwNDMyMDF8&ixlib=rb-4.0.3&q=80&w=1080)`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then(res => {
    if (!res.ok) {
      throw Error("Something is wrong");
    }
    return res.json();
  })
  .then(data => {
    document.getElementById("crypto-top").innerHTML = `
      <img src="${data.image.small}"/>
      <span>${data.name}</span>
    `;

    // This is where the current crypto prices are being displayed
    document.getElementById("crypto").innerHTML += `
      <p>🎯:R${data.market_data.current_price.usd}</p>
      <p>👆:R${data.market_data.high_24h.usd}</p>
      <p>👇:R${data.market_data.low_24h.usd}</p>
    `;
  })
  .catch(err => console.error(err));

function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString("en-us", { timeStyle: "short" });
}

setInterval(getCurrentTime, 1000);

navigator.geolocation.getCurrentPosition(position => {
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res => {
      if (!res.ok) {
        throw Error("Weather not available");
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    })
    .catch(err => console.error(err));
});
