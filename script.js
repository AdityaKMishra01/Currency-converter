const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const h2 = document.querySelector("h2");
const img = document.querySelectorAll("img");

const currconvt = async () => {
  const url =
    `https://currency-converter-pro1.p.rapidapi.com/convert?from=${select1.value}&to=${select2.value}&amount=${input.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ed2e825bc2msh35e4f09b2aa961ep1f0eb1jsn0b18be8675de",
      "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const finalAmt = data.result.toFixed(2);
  h2.innerText = `${input.value}${select1.value} = ${finalAmt}${select2.value}`;
};

for (code in countryList) {
  let option = document.createElement("option");
  option.value = code;
  option.innerText = code;
  select1.append(option);
  if(code === "USD"){
    option.selected = "selected";
  }
}
for (code in countryList) {
  let option = document.createElement("option");
  option.value = code;
  option.innerText = code;
  select2.append(option);
  if(code === "INR"){
    option.selected = "selected";
  }
}
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  currconvt();
});

