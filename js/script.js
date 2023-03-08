// seleção de elementos 

const btn = document.querySelector('#btn');
const nameCidade = document.querySelector('.cidade');
const temperatura = document.querySelector('.temp');
const tempMin = document.querySelector('.min');
const tempMax = document.querySelector('.max');
const umidity = document.querySelector('.umidade--valor');
const wind = document.querySelector('.vento--valor');




// functions
function showInfo(data) {
    if (data.country === 'BR') {
        nameCidade.innerText = data.name
        temperatura.innerText = `${data.temp.toFixed(0)} °C`
        temperatura.style.fontSize = '50px'
        tempMin.innerText = `Min ${data.tempMin}`
        tempMax.innerText = `Max ${data.tempMax}`
        umidity.innerText = `${data.humidity}%`
        wind.innerText = `${data.wind} km/h`
    } else {
        nameCidade.innerText = ""
        temperatura.style.fontSize = '18px'
        temperatura.style.padding = '20px'
        temperatura.style.textAlign = 'center'
        temperatura.innerText = `Estamos trabalhando para trazer melhores resuldatos de outros paises!`
        tempMin.innerText = ""
        tempMax.innerText = ""
        umidity.innerText = ""
        wind.innerText = ""
    }

    input.value = ""
}

// eventos

btn.addEventListener('click', async (e) => {
    e.preventDefault();

    let input = document.querySelector('#input').value;
    
    if(input == "") {
        alert('preencha uma cidade!')
    }else if (input) {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=1965df3f2dc9801d189a45c9225b02ab&units=metric&lang=pt_br`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data)

        
        if(data.cod === 200) {
            showInfo({
                name: data.name,
                temp: data.main.temp,
                country: data.sys.country,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                wind: data.wind.speed
            })
        } else {
            alert('cidade não encontrada!')
        }
        

    }
});

