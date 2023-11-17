function redirectToProductPage(productId) {
    window.location.href = 'verProducto.html?productId=' + productId;
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
