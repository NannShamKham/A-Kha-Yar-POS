import axios from 'axios';
import axiosInterceptor from './axiosInterceptor';
import {environment} from './environment';

const wampServer = environment.URL + '/api/';
// const wampServer = "http://127.0.0.1:8000" + '/api/';
const axiosApi = axios.create({
    baseURL: wampServer,
});
axiosInterceptor.setupInterceptors(axiosApi, false, true);
export default axiosApi;
