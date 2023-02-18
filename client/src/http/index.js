import axios from 'axios';


const $host = axios.create({
    baseURL:'http://localhost:5000/',
});

const $authHost = axios.create({
    baseURL: 'http://localhost:5000/',
});

const authInterceptor = config => {
    try {  
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config 
}catch(e){
    console.log(e)
}

 
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host, 
    $authHost
}