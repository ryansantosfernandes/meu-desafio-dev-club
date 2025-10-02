const option = document.querySelector('#select-value');
const linkXbox = document.querySelector('.link-xbox');

const changeValue = () => {
    linkXbox.classList.remove('link-xbox-s', 'link-xbox-1t');

    if (option.value === 'S') {
        linkXbox.classList.add('link-xbox-s');
        linkXbox.innerHTML = "Compre Aqui O Xbox Series S";
        linkXbox.href = "https://www.google.com/aclk?..."; 
    } else if (option.value === '1t') {
        linkXbox.classList.add('link-xbox-1t');
        linkXbox.innerHTML = "Compre Aqui O Xbox Series S1TB!";
        linkXbox.href = "https://www.amazon.com.br/PlayStation%C2%AE5-Slim...";
    }

};

option.addEventListener('change', changeValue);
