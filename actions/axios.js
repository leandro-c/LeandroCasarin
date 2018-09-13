import request from 'axios'

export default function getAxiosInstance(axiosInstance) {
    //TODO better solucion for calls on behalf of client
    if (axiosInstance && axiosInstance.constructor && axiosInstance.constructor.name === 'Axios')
        return axiosInstance;

    return request.create({
        baseURL: '/api/'
      });
}