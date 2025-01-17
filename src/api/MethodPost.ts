import { AxiosError, AxiosResponse } from "axios";
import { instance } from "./url";

//prettier-ignore
const Post = async <T extends unknown>(  endpoint: string,  data?: object | number,  authorized: boolean = true,  params?: object): Promise<T> => {
 
  if (authorized ) {
    instance.interceptors.request.use((config) => {
     // config.headers.Authorization = `Bearer ${getLogin().token}`;
      return config;
    });
  }
  return await instance
    .post(endpoint, data, { params })
    .then(({ data }: AxiosResponse<T>) => data)
    .catch((error: AxiosError<any>) => {
      // console.log("error en la solicitud", JSON.stringify(error, null, 3));

      throw error;
    })
    .finally(() => {
      //    setIsLoading(false);
    });
};

export default Post;