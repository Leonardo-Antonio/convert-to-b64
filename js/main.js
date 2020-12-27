const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const fd = new FormData(form);
    const response = await fetch("https://api-convert-to-b64.herokuapp.com/api/v1/image/encrypt", {
        method: 'POST',
        body: fd,
    });
    const image = await response.json();
    document.getElementById('response')
        .value = image.data
})