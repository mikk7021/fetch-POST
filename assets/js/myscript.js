
import { myFetchFunction } from "./helpers.js"
//appender username og password value til formdata og poster formdata med post method
const Auth = async () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    // spread operator
    console.log([...formData])

    //destructuring assignment
    for(let [key, value] of formData) {
        console.log(key, value)
    }

    const options = {
        method: 'POST',
        body: formData
    }
    //krypterede streng som man får tilbage når klient poster til server som vi kalder "token" og gemmer i session storage
    const data = await myFetchFunction('https://api.mediehuset.net/token', options);
    
    sessionStorage.setItem('token', JSON.stringify(data))
}
//click event på login der kører Auth function
document.getElementById('login').addEventListener('click', () => {
    Auth()

    
    if(sessionStorage.getItem('token')) {
        console.log('Du er logget ind')
    } else {
        console.log('Du er ikke logget ind')
    }
})
// logindata bliver konverteret til et objekt som er kaldt token og bliver gemt i sessionstorage
const loginData = JSON.parse(sessionStorage.getItem('token'));

