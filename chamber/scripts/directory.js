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
      h2.textContent = `${company.phone} `;
      h3.textContent = `${company.website} `;
      p.textContent = `${company.phone} Address: ${company.address}`;

  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', company.imageurl);
      portrait.setAttribute('alt', `Portait of ${company.name} ______________`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(phone);
      card.appendChild(address);

      card.appendChild(website);
      card.appendChild(portrait);
      cards.appendChild(card);
    }) // end of forEach loop
  }// end of function expression