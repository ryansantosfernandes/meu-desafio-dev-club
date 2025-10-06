const option = document.querySelector('#select-value');
const linkXbox = document.querySelector('.link-xbox');

const changeValue = () => {
    if (option.value === 'Series X') {
        linkXbox.innerHTML = "Compre Aqui O Xbox Series X!";
        linkXbox.href = "https://www.amazon.com.br/Microsoft-Console-Xbox-Series-X/dp/B088GHBH92/ref=asc_df_B088GHBH92?mcid=3987e80316ff3ef4ba49042dc98be0c3&tag=googleshopp00-20&linkCode=df0&hvadid=709884703642&hvpos=&hvnetw=g&hvrand=16516107415037124965&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197894&hvtargid=pla-971946450713&psc=1&language=pt_BR&gad_source=1"; 
    } else if (option.value === 'All digital') {
        linkXbox.innerHTML = "Compre Aqui Series X All Digital!";
        linkXbox.href = "https://www.amazon.com.br/Microsoft-Console-Xbox-Series-X/dp/B088GHBH92/ref=asc_df_B088GHBH92?mcid=3987e80316ff3ef4ba49042dc98be0c3&tag=googleshopp00-20&linkCode=df0&hvadid=709884703642&hvpos=&hvnetw=g&hvrand=16516107415037124965&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197894&hvtargid=pla-971946450713&psc=1&language=pt_BR&gad_source=1";
    }

};

option.addEventListener('change', changeValue);
