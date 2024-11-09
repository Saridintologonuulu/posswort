

// random user
// api
// fetch

const api_url = 'https://randomuser.me/api/'

const imgEl = document.querySelector('img')
const button = document.querySelector('.button')
const text = document.querySelector('.text')
const btns = document.querySelectorAll('button')

let userinfo = {}

btns.forEach( (btn, index ) =>{
    btn.addEventListener('mouseenter', () => {
        if(index === 0){
            text.innerHTML = `
            hello my email is <h4>${userinfo.email}</h4>`
        }else if(index === 1 ){
            text.innerHTML = `
            hello my name is <h4>${userinfo.name.first + userinfo.name.last}</h4>`
        }else if(index === 2 ){
            const d = new Date(userinfo.dob.date)
            text.innerHTML = `
            my brithday is <h4>/${d.getDate()}/${d.getFullYear()}</h4>`
        }else if(index === 3){
            const d = new Map(userinfo.dob.mape)
            text.innerHTML = `
            my places of position is<h4>${userinfo.location.city}</h4>`
        }else if(index === 4){
            // const d = new Phon(userinfo.dob.phone)
            text.innerHTML = `
            my phone number is<h4>${userinfo.phone}</h4>`
        }else if(index === 5){
            text.innerHTML = `
            My password is <h4>${userinfo.login.password}</h4>`
        }
    })
})



async function getRandomUser(){
    const response = await fetch(api_url)
    const userData = await response.json()
    console.log(userData);
    renderUser(userData.results[0])
    
}

getRandomUser()

function renderUser(user = {}){
    imgEl.src = user.picture.large
    userinfo = user
}

button.addEventListener('click', getRandomUser)