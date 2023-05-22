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
    loginReq({login, password}){
        return instance.get(`login/${login}/${password}`).then(() => {this.findUser(login).then(e => {
            console.log(e)
            window.location.replace('/')
        }
        )})
    },
    registrationReq({login, password, name, surname, email}){
        return instance.post('registration', {login, email, name, surname, password}).then(() => { 
            sessionStorage.setItem('auth', JSON.stringify(
                {
                    'login': login,
                    'password': password,
                    'name': name,
                    'surname': surname,
                    'email': email
                }
            ))
        }).then(() => {this.loginReq({login, password})})
    },
    sendPhoto(email, files){
        return instancePhoto.post('/sendPhoto', {email, files})
    },
    findUser(email){
        return instance.get(`user/${email}`)
    },
    sendMessage(name, email, message, star){
        return instance.post('sendMessage', {name, email, message, star})
    }
}