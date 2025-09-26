const option = document.querySelector('#select-value');
const linkPS5 = document.querySelector('.link-ps5');
const changeValue = () => {
    if (option.value === 'Pro') {  
        linkPS5.classList.remove('link-ps5-slim', 'link-ps5-pro');

        linkPS5.innerHTML = "Compre Aqui O PS5 Pro";
        linkPS5.href = "https://www.google.com/aclk?sa=L&ai=DChsSEwjGqa-Ks_aPAxUUUEgAHaUFJM4YACICCAEQCxoCY2U&co=1&gclid=CjwKCAjw89jGBhB0EiwA2o1On8NtuEYQa4qH7aOGXiCu9K1buLrSB916RB1UkU4EmnFLkTZiyo9tIxoCnf8QAvD_BwE&cid=CAASQuRogmUAybCfojswZ8RK5PKPdWmD0kvUrKsuHco7PktMbh3OSYfvFW8Zx8YE4xP5k5Gofjck6Wh6OQstYXWlgoF8tw&cce=2&sig=AOD64_1QnGsOg-qRSLetjkGEBVZ7xS4QzQ&ctype=5&q=&ved=2ahUKEwidnKqKs_aPAxWWiJUCHSZdEP4Q9aACKAB6BAgKEFY&adurl=";
        linkPS5.classList.add('link-ps5-pro');
    } else if (option.value === 'Slim') {
        linkPS5.innerHTML = "Compre Aqui O PS5 Slim!";
        linkPS5.href = "https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Edi%C3%A7%C3%A3o-Digital-Jogos/dp/B0CYJBWGH5/ref=asc_df_B0CYJBWGH5?mcid=24deaabda68e3b9aa3150dfa1ab41c61&tag=googleshopp00-20&linkCode=df0&hvadid=709884703642&hvpos=&hvnetw=g&hvrand=10775064414980526280&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197894&hvtargid=pla-2300389685916&psc=1&language=pt_BR&gad_source=1"
        linkPS5.classList.add('link-ps5-slim');
    }
};

option.addEventListener('change', changeValue);