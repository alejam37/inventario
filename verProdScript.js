function getProductIdFromURL() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('productId');
}

function displayProductImage() {
    const productId = getProductIdFromURL();
    let imageUrl = '';

    switch(productId) {
        case 'azucar_incauca':
            imageUrl = 'azucar_incauca.jpg';
            break;
        case 'arroz_diana':
            imageUrl = 'arroz_diana.jpeg';
            break;
        case 'lenteja_diana':
            imageUrl = 'lenteja_diana.jpeg';
            break;
        case 'pasta_doria':
            imageUrl = 'pasta_doria.jpeg';
            break;
        case 'aceite_puroil':
            imageUrl = 'aceite_puroil.jpeg';
            break;
        case 'azucar_incauca':
            imageUrl = 'azucar_incauca.jpeg';
            break;
        case 'harina_pan':
            imageUrl = 'harina_pan.jpeg';
            break;
        case 'harina_robinson':
            imageUrl = 'harina_robinson.jpeg';
            break;
        case 'mayonesa_fruco':
            imageUrl = 'mayonesa_fruco.jpeg';
            break;
        case 'avena_toning':
            imageUrl = 'avena_toning.jpeg';
            break;
        case 'nesquik':
            imageUrl = 'nesquik.jpeg';
            break;
        case 'jabon_dove':
            imageUrl = 'jabon_dove.jpeg';
            break;
        case 'yogurt_alpina':
            imageUrl = 'yogurt_alpina.jpeg';
            break;
        case 'papas_margarita':
            imageUrl = 'papas_margarita.jpg';
            break;
        case 'yogurt_fitness':
            imageUrl = 'yogurt_fitness.jpeg';
            break;
        case 'cocacola':
            imageUrl = 'cocacola.jpg';
            break;
        case 'papas_pringles':
            imageUrl = 'papas_pringles.jpeg';
            break;
        case 'acondicionador_pantene':
            imageUrl = 'acondicionador_pantene.jpeg';
            break;
        case 'bonyurt_alpina':
            imageUrl = 'bonyurt_alpina.jpeg';
            break;
        case 'cerveza_heinken':
            imageUrl = 'cerveza_heinken.jpeg';
            break;
    }

    document.getElementById('productImage').src = imageUrl;
}


document.getElementById('button-menu').addEventListener('click', function() {
    var menu = document.getElementById('side-menu');
    menu.style.width = menu.style.width === '350px' ? '0' : '350px';
});

function closeNav() {
    document.getElementById('side-menu').style.width = '0';
}

function updateDateTime() {
    var now = new Date();
    var dateString = now.toDateString();
    var timeString = now.toLocaleTimeString();
  
    document.getElementById('current-date').textContent = dateString;
    document.getElementById('current-time').textContent = timeString;
  }
  
  setInterval(updateDateTime, 1000);
  
  updateDateTime();
