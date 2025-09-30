const option = document.querySelector('#select-value');
const linkPS5 = document.querySelector('.link-ps5');

const changeValue = () => {
    linkPS5.classList.remove('link-ps5-slim', 'link-ps5-pro');

    if (option.value === 'Pro') {
        linkPS5.classList.add('link-ps5-pro');
        linkPS5.innerHTML = "Compre Aqui O PS5 Pro";
        linkPS5.href = "https://www.google.com/aclk?..."; 
    } else if (option.value === 'Slim') {
        linkPS5.classList.add('link-ps5-slim');
        linkPS5.innerHTML = "Compre Aqui O PS5 Slim!";
        linkPS5.href = "https://www.amazon.com.br/PlayStation%C2%AE5-Slim..."; 
    }

};

option.addEventListener('change', changeValue);
