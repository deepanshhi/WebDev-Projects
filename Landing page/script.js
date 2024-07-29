function showProducts() {
    var productsDiv = document.getElementById('products');
    if (productsDiv.style.display === 'none') {
        productsDiv.style.display = 'block';
    } else {
        productsDiv.style.display = 'none';
    }
}
