const serviceItems = document.querySelectorAll('.service-item');
for(let i = 0; i < serviceItems.length; i++){
    const id = serviceItems[i].getAttribute('data-id');
    serviceItems[i].addEventListener('mouseover', ()=>{
        serviceItems[i].children[0].src = 'images/serv-icon-' + id + '-black.png';
        serviceItems[i].children[1].style.color = 'black';
        serviceItems[i].children[2].style.color = '#494949';
    });
    serviceItems[i].addEventListener('mouseout', ()=>{
        serviceItems[i].children[0].src = 'images/serv-icon-' + id + '-yellow.png';
        serviceItems[i].children[1].style.color = '#e6cf39';
        serviceItems[i].children[2].style.color = '#d8d8d8';
    });
}

const purchaseDiv = document.querySelectorAll('.purchase');

for(let i = 0; i < purchaseDiv.length; i++){
    purchaseDiv[i].addEventListener('mouseover', ()=>{
        purchaseDiv[i].style.backgroundColor = '#e6cf39';
        purchaseDiv[i].children[0].style.color = '#171717';
    });
    purchaseDiv[i].addEventListener('mouseout', ()=>{
        purchaseDiv[i].style.backgroundColor = '#171717';
        purchaseDiv[i].children[0].style.color = '#e6cf39';
    });
}

