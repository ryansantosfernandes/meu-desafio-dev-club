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
        linkXbox.href = "https://www.amazon.com.br/Xbox-1TB-Console-Robot-White/dp/B0D934SHFG/ref=asc_df_B0D934SHFG?mcid=99400a6b8dae33dea05f39db24551b3b&tag=googleshopp00-20&linkCode=df0&hvadid=709884703630&hvpos=&hvnetw=g&hvrand=16516107415037124965&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197894&hvtargid=pla-2365041323731&language=pt_BR&gad_source=1&th=1";
    }

};

option.addEventListener('change', changeValue);
