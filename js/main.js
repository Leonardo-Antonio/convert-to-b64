const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const fd = new FormData(form);
    const response = await fetch("http://localhost:8080/api/v1/image/encrypt", {
        method: 'POST',
        body: fd,
    });
    const image = await response.json();
    document.getElementById('response')
        .value = image.data
})