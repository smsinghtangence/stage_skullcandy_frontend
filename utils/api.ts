import axios from 'axios'
const API_URL =  process.env.API_URL || '';
const TOKEN = process.env.TOKEN || '';


// axios.interceptors.request.use(
//   function (config) {
//     config.headers["Content-Type"] = "application/json";
//       config.headers.Authorization = `Bearer ${TOKEN}`;
//     return config;
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );

// axios.interceptors.response.use((response) => {
//   return response;
// }, (error) => {
//   console.log('got error here', error.message, error.config.url);
  
//   return Promise.reject(error.message);
// });

export const GetData = async (END_POINT: string, id?: string | number) => {
    let response: any;
  
    if (id) {
      response = await axios.get<any>(API_URL + END_POINT, {
        params: { id },
      });
    } else {
      response = await axios.get<any>(API_URL + END_POINT);
    }
  
    return { data: response.data.data, message: response.data.message, status: response.data.status || response.data.statusCode };
  };

  export const LoginRequest = async (END_POINT: string, body: object) => {
    console.log(END_POINT, body);
    var response = await axios.post<any>(API_URL + END_POINT, body);
  
    return { data: response.data.data, message: response.data.message, status: response.data.status || response.data.statusCode, errors: response.data.errors };
  };

  export const PostData = async (END_POINT: string, body: object) => {
    console.log(END_POINT, body);
    var response = await axios.post<any>(API_URL + END_POINT, body);
  
    return { data: response.data.data, message: response.data.message, status: response.data.status || response.data.statusCode, errors: response.data.errors };
  };
  export const PostDataAsForm = async (END_POINT: string, body: any) => {
    const form = new FormData();
    for(let item in body) {
      form.append(item, body[item]);
    }
    var response = await axios.post<any>(API_URL + END_POINT, form);
  
    return { data: response.data.data, message: response.data.message, status: response.data.status || response.data.statusCode, errors: response.data.errors };
  };

  export const getDataWithQuery = async (END_POINT: string, queries?: any) => {
    let response: any;
    // console.log(API_URL + END_POINT);
    
    if (queries) {
      response = await axios.get<any>( API_URL + END_POINT, {
        params: queries,
  
      });
    } else {
      response = await axios.get<any>(END_POINT);
    }
    return { data: response.data.data, status: response.data.status || response.data.statusCode, message: response.data.message  };
  };

  export const DeleteData = async (END_POINT: string, id: string | number) => {
    id = Number(id);
  
    const response = await axios.delete<any>(`${API_URL}${END_POINT}`, {
      params: { id },
    });
    return { data: response.data, message: response.data.message };
  };

  export const geturl = (image:any) => {

    return (API_URL + image?.data?.attributes?.url)


  } 