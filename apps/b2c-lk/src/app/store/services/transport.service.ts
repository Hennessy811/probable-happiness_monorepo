import { Axios } from 'axios-observable';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import {transport} from '../mocks/transport';

const options: any = (token: string) => ({
    method: 'post',
    headers: {
      Authorization: `Basic ${token}`
    }
  });
  
  const generateToken = (id: string | number, password = 'password') => btoa(id + ':' + password);
  
  export const getMockData = (id: string | number) => {
    return of(transport).pipe(map((res: any) => res.data));
  };
  
  export const getSomethingAsyncExample = (id: string) => {
    return Axios.request({
      ...options(generateToken(id)),
      url: `${process.env.REACT_APP_HOST}data/get`,
      data: {
        userId: id
      }
    }).pipe(map(({ data }) => data.data));
  };