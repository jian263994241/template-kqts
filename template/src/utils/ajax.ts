import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default function ajax(props: AxiosRequestConfig) {
  return new Promise<AxiosResponse>((resolve, reject) => {
    if (navigator.userAgent != 'ReactSnap') {
      axios(props).then(resolve).catch(reject);
    }
  });
}
