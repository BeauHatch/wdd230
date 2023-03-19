const url = 'https://beauhatch.github.io/wdd230/chamber/html/scripts/index.json';

async function getCompanyData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);
    displayCompany(data.companies);
  }
  
  getCompanyData(url);


  const displayCompany = (companies) => {

    const cards = display; //document.querySelector('.busi'); // select the output container element
  
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let portrait = document.createElement('img');
      let h4 = document.createElement('h4');
      let h6 = document.createElement('h6');
      let p = document.createElement('p');
      let website = document.createElement('h4');
      let phone = document.createElement('h6');
      let address = document.createElement('p');

      // Build the h4 content out to show the company's full name - finish the template string
      h4.textContent = `${company.website} `;
      h6.textContent = `${company.phone} `;
      p.textContent = `${company.address}`;

  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', company.imageurl);
      portrait.setAttribute('alt', `Portait of ${company.name} ______________`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(portrait);
      card.appendChild(h4);
      card.appendChild(h6);
      card.appendChild(p);
      card.appendChild(phone);
      card.appendChild(address);
      card.appendChild(website);

      cards.appendChild(card);
    }) // end of forEach loop
  }// end of function expression