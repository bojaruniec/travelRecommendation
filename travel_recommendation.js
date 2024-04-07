function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        Object.keys(data).forEach((key) => {
            if (key.toLowerCase().startsWith(input)) {
              console.log(`Key "${key}" has value: ${data[key]}`);
            }})
        const condition = data.find(item => item.toLowerCase() === input);
        console.log(condition)

        if (country) {
          const cities = country.cities.join(', ');
          resultDiv.innerHTML += `<h2>${country.name}</h2>`;

          for (const city of cities){
            resultDiv.innerHTML += `<p><strong>City:</strong> ${city.name}</p>`;
          }
        } else {
          resultDiv.innerHTML = 'Country not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);