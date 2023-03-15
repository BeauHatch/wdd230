const url = 'https://beauhatch.github.io/wdd230/chamber/scripts/directory.json';

async function getCompanyData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);
    displayCompany(data.companies);
  }
  
  getCompanyData(url);


  const displayCompany = (companies) => {

    const cards = document.querySelector('div.cards'); // select the output container element
  
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let portrait = document.createElement('img');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let website = document.createElement('h2');
      let phone = document.createElement('h3');
      let address = document.createElement('p');

      // Build the h2 content out to show the company's full name - finish the template string
      h2.textContent = `${company.website} `;
      h3.textContent = `${company.phone} `;
      p.textContent = `${company.address}`;

  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', company.imageurl);
      portrait.setAttribute('alt', `Portait of ${company.name} ______________`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(portrait);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(phone);
      card.appendChild(address);

      card.appendChild(website);
      cards.appendChild(card);
    }) // end of forEach loop
  }// end of function expression




// list grid shi
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
