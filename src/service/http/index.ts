import Axios, {AxiosRequestConfig} from 'axios';

const axios = Axios.create({baseURL: 'https://open.unionpay.com'});
export async function httpGet(url: string, config?: AxiosRequestConfig) {
  const resp = await axios.get(url, config);
  return resp.data;
}
