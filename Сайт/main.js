var formVisible = false;

function toggleForm() {
    var form = document.querySelector('.order-form');
    form.style.width = formVisible ? '0' : '300px';
    formVisible = !formVisible;
}

