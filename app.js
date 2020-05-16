window.addEventListener("load", () => {
  const api = `https://restcountries.eu/rest/v2/all`;
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let newData;

      for (let i = 0; i < data.length; i++) {
        newData = data[i];

        //Elements creation section.

        const newDiv = document.createElement("div");
        const newParag1 = document.createElement("p");
        const newParag2 = document.createElement("p");
        const newParag3 = document.createElement("p");
        const newParag4 = document.createElement("p");
        const newParag5 = document.createElement("p");
        const img = document.createElement("img");

        const newSpan1 = document.createElement("span");
        const newSpan2 = document.createElement("span");
        const newSpan3 = document.createElement("span");
        const newSpan4 = document.createElement("span");
        const newSpan5 = document.createElement("span");

        //content creation section

        const {
          name,
          capital,
          languages,
          flag,
          currencies,
          callingCodes,
          alpha3Code,
        } = newData;
        newSpan1.textContent = "Name: " + name;
        newSpan2.textContent = "Capital: " + capital;
        newSpan3.textContent = "Language: " + languages[0].name;
        newSpan4.textContent = "Currency symbol: " + currencies[0].symbol;
        newSpan5.textContent = "Calling Code: " + callingCodes;

        //pagraphs appending section.

        newParag1.appendChild(newSpan1);
        newParag2.appendChild(newSpan2);
        newParag3.appendChild(newSpan3);
        newParag4.appendChild(newSpan4);
        newParag5.appendChild(newSpan5);

        newDiv.appendChild(img);

        const flagUs = alpha3Code.toLowerCase();

        //Set Attributes section

        img.setAttribute("src", `https://restcountries.eu/data/${flagUs}.svg`);
        img.setAttribute("alt", "flag");
        newDiv.setAttribute("class", "country-one");
        newSpan1.setAttribute("class", "country-name");
        newSpan3.setAttribute("class", "country-languages[0]");

        //Div appending section
        newDiv.appendChild(newParag1);
        newDiv.appendChild(newParag2);
        newDiv.appendChild(newParag3);
        newDiv.appendChild(newParag4);
        newDiv.appendChild(newParag5);

        const container = document.querySelector(".container");
        container.appendChild(newDiv);
      }
    });
});
