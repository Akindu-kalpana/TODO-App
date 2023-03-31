const list = document.querySelector('#todolsit');
const input = document.querySelector('#newtodo');
input.addEventListener('keypress', event => {
    if (event.key === "Enter") {
        event.preventDefault();
        const text = input.value.trim();
        if (text !== '') {
            const list_item = document.createElement('li');
            list_item.setAttribute('class', 'list-group-item');
            list_item.innerHTML = text;
            list.append(list_item);
            input.value = '';
        }
    }
});
