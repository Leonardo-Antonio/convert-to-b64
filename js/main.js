const form = document.getElementById('form');
const list = document.getElementById('list');
list.style.display = 'none';
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const fd = new FormData(form);
    const response = await fetch("http://localhost:8080/api/v1/image/encrypt", {
        method: 'POST',
        body: fd,
    });
    if (!response.ok)
        return;
    const image = await response.json()

    document.getElementById('file_name').
        textContent += image.data.file_name;
    document.getElementById('size').
        textContent += image.data.size;

    list.style.display = 'block';
    document.getElementById('response')
        .value = image.data.src
})