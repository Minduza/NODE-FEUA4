const registerForm = document.querySelector('#registerForm')

registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const person = {
        password: e.target.password.value,
        pswRepeat: e.target.pswRepeat.value,
        email: e.target.email.value,
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        address: e.target.address.value,
        zip: e.target.zipCode.value,
        city: e.target.city.value,
        phone: e.target.phoneNumber.value
    }

    fetch('http://localhost:3000/',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({person})
    }).then(
        ()=>{location.replace("./index.html")}

    )
    

})

