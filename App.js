const getCountryBtn = document.querySelector('.getCountry');
const inputField = document.querySelector('input[type="text"]');

const countryList = document.querySelector('.country');
const countryTLDList = document.querySelector('.TLD');
const countryCCList = document.querySelector('.CallingCode');
const countryCapitalList = document.querySelector('.capital');
const countryRegionList = document.querySelector('.region');
const countrySubRegionList = document.querySelector('.subregion');
const countryPopulationList = document.querySelector('.population');
const countryTimezoneList = document.querySelector('.timezone');
const countryCurrenciesList = document.querySelector('.currencies');
const countryTranslationsList = document.querySelector('.translations');
const countryCodeList = document.querySelector('.code');
const countryNameList = document.querySelector('.name');
const countrySymbolList = document.querySelector('.symbol');
const countryFlagsList = document.querySelector('.countryFlagList');
;

getCountryBtn.addEventListener('click', getCountry);

function getCountry(){
    let countryName = inputField.value;
    let url = `https://restcountries.com/v2/name/${countryName}`;
    let img = document.createElement("img")

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then( data => {
        console.log(data[0].flag);
        let output = '';
        let output2 = '';
        let output3 = '';
        let output4 = '';
        let output5 = '';
        let output6 = '';
        let output7 = '';
        let output8 = '';
        let output9 = '';
        let output10 = '';
        let output11= '';
        let output12= '';
        let output13= '';
        let output14= '';
        
        output += `<p><mark>Country:</mark> ${data[0].name}</p>` ;
        output2 += `<p><mark>TLD:</mark> ${data[0].topLevelDomain}</p>` ;
        output3 += `<p><mark>Calling Codes:</mark> ${data[0].callingCodes}</p>` ;
        output4 += `<p><mark>Capital:</mark> ${data[0].capital}</p>` ;
        output5 += `<p><mark>Region:</mark> ${data[0].region}</p>` ;
        output6 += `<p><mark>Subregion:</mark> ${data[0].subregion}</p>` ;
        output10 += `<p><mark>Population:</mark> ${data[0].population}</p>` ;
        output7 += `<p><mark>Timezones:</mark> ${data[0].timezones}</p>` ;
        output8 += `<p><mark>Currencies:</mark> ${data[0].currencies}</p>` ;
        output9 += `<p><mark>CountryFlagList:</mark> ${data[0].countryFlagList }</p>` ;
        output11 += `<p><mark>Translation(br):</mark> ${data[0].translations.br }</p>` ;
        output12 += `<p><mark>Translation(br):</mark> ${data[0].currencies[0].code }</p>` ;
        output13 += `<p><mark>Translation(br):</mark> ${data[0].currencies[0].symbol }</p>` ;
        output14 += `<p><mark>Translation(br):</mark> ${data[0].currencies[0].name }</p>` ;
        img.src = `${data[0].flags.png}`;

        countryList.innerHTML = output;
        countryTLDList.innerHTML = output2;
        countryCCList.innerHTML = output3;
        countryCapitalList.innerHTML = output4;
        countryRegionList.innerHTML = output5;
        countrySubRegionList.innerHTML = output6;
        countryPopulationList.innerHTML = output10;
        countryTimezoneList.innerHTML = output7;
        countryCurrenciesList.innerHTML = output8;
        countryFlagsList.innerHTML = output9;
        countryTranslationsList.innerHTML = output11;
        countryCodeList.innerHTML = output12;
        countryNameList.innerHTML = output13;
        countrySymbolList.innerHTML = output14;

    })
}