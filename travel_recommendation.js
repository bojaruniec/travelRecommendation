function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        let condition = ''
        let condition_key = ''
        Object.keys(data).forEach((key) => {
            if (key.toLowerCase().startsWith(input)) {
                condition = data[key];
                condition_key = key;
            }})

        if (condition) {
          console.log(`Condition name: ${condition_key}`)
        //   resultDiv.innerHTML += `<h2>${cond_names}</h2>`;
          condition.forEach (item => {
            console.log(`Condition item: ${item.name}`);
          })
         
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);