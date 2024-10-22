document.getElementById('dddForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const ddd = document.getElementById('dddInput').value;
    const loading = document.querySelector('.loading');
    const dddInfo = document.getElementById('dddInfo');
    const citiesList = document.getElementById('citiesList');
  
    
    dddInfo.classList.add('d-none');
    citiesList.innerHTML = '';
    loading.classList.remove('d-none');
  //API UTILIZADA
    fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
      .then((response) => response.json())
      .then((data) => {
        loading.classList.add('d-none');
  
        if (data.error) {
          alert('DDD não encontrado. Verifique o valor e tente novamente.');
        } else {
          document.getElementById('state').innerText = data.state;
  
          data.cities.forEach((city) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerText = city;
            citiesList.appendChild(listItem);
          });
  
          dddInfo.classList.remove('d-none');
        }
      })
      .catch((error) => {
        loading.classList.add('d-none');
        alert('Erro ao consultar o DDD. Tente novamente mais tarde.');
      });
  });
  