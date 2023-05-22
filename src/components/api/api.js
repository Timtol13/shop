import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3300/',
    headers: {
        "Content-Type": "application/json"
    }
})
const instancePhoto = axios.create({
    baseURL: 'http://localhost:3300',
    headers:{
        'Content-Type': 'multipart/form-data',
    }
})

export const AuthAPI = {
    loginReq({email, password}){
        return instance.get(`login/${email}/${password}`).then(() => { this.findUser(email) })
    },
    registrationReq({login, password, name, surname, email}){
        return instance.post('registration', {login, email, name, surname, password}).then(() => {this.loginReq({login, password})})
    },
    sendPhoto({email, files}){
        console.log(email, files)
        return instancePhoto.post('/sendPhoto', {email, files})
    },
    findUser(email){
        return instance.get(`user/${email}`).then(e=>{
            sessionStorage.setItem('auth', JSON.stringify(
                {
                    'login': e.data.login,
                    'password': e.data.password,
                    'name': e.data.name,
                    'surname': e.data.surname,
                    'email': e.data.email
                }
            ))
            if(e.data) window.location.replace('/')
        })
    },
    sendMessage(name, email, message, star){
        return instance.post('sendMessage', {name, email, message, star})
    },
    getPhoto(email){
        return instancePhoto.get(`getPhoto/${email}`)
    }
}
export const OrderAPI = {
    sendOrder({title, price, cardNum, cardDate, message, email, login}){
        return instance.post('/makeOrder', {title, price, cardNum, cardDate, message, email, login})
    }
}