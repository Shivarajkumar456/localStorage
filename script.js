const btn = document.querySelector('.btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

btn.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields";
        setTimeout(() => msg.remove(), 3000);
    } else {
        // const li = document.createElement('li');
        // li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        // userList.appendChild(li);


        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('email', emailInput.value);
        nameInput.value = '';
        emailInput.value = '';
    }
}

console.log(localStorage.getItem('name'));