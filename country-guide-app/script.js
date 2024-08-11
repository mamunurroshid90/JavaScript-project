let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0]);
      //   console.log(data[0].capital[0]);
      //   console.log(data[0].flags.svg);
      //   console.log(data[0].name.common);
      //   console.log(data[0].continents[0]);
      //   console.log(Object.keys(data[0].currencies)[0]);
      //   console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      //   console.log(
      //     Object.values(data[0].languages).toString().split(",").join(", ")
      //   );

      const currency = Object.keys(data[0].currencies)[0];

      result.innerHTML = `
        <img src='${data[0].flags.svg}' class = 'flag-img' />
        <h2>${data[0].name.common}</h2>
        <div class='wrapper'>
            <div class='data-wrapper'>
                <h4>Capital: <span>${data[0].capital[0]}</span></h4>
            </div>
        </div>
        <div class='wrapper'>
            <div class='data-wrapper'>
                <h4>Continents: <span>${data[0].continents[0]}</span></h4>
            </div>
        </div>
        <div class='wrapper'>
            <div class='data-wrapper'>
                <h4>Continents: <span>${data[0].population}</span></h4>
            </div>
        </div>
        <div class='wrapper'>
            <div class='data-wrapper'>
                <h4>Currency: <span>${
                  data[0].currencies[currency].name
                } - ${currency}</span></h4>
            </div>
        </div>
        <div class='wrapper'>
            <div class='data-wrapper'>
                <h4>Common Languages: <span>
                ${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span></h4>
            </div>
        </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3> The input field cannot be empty</h3> `;
      } else {
        result.innerHTML = `<h3> Please enter a valid country name.</h3> `;
      }
    });
});
