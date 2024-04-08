function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultReport = document.getElementById('report_result');

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
          resultReport.innerHTML = ''
            console.log(`Condition name: ${condition_key}`)
        //   resultDiv.innerHTML += `<h2>${cond_names}</h2>`;
          condition.forEach (item => {
            console.log(`Condition item: ${item.name}`);
            const reusltSubDiv = document.createElement("div");
            const resultSubDivTitle = document.createElement("h1");
            const resultPicture = document.createElement("img")
            const resultDescription = document.createElement("p")

            resultPicture.src = item.imageUrl
            resultDescription.innerText = item.description
            resultSubDivTitle.innerText = item.name;
            reusltSubDiv.appendChild(resultSubDivTitle);
            reusltSubDiv.appendChild(resultDescription);
            reusltSubDiv.appendChild(resultPicture)
            resultReport.appendChild(reusltSubDiv);

          })

         
        } else {
          resultReport.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultReport.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);

function resetForm() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultReport = document.getElementById('report_result');
    input.value = ''
    resultReport.innerHTML = ''
    }
btnReset.addEventListener('click', resetForm);