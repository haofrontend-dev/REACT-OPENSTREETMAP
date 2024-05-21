import axios from "axios";

const BASE_URL_MAP = "https://nominatim.openstreetmap.org/";

export const client = (() => {
    return axios.create({
        baseURL: BASE_URL_MAP,
        headers: {
            Accept: "application/json, text/plain, */*",
        },
    });
})();

// client.interceptors.request.use(
//     (config) => {
//         const accessToken = localStorage.getItem("");
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// client.interceptors.response.use(
//     () => {
//         return res; // Simply return the response
//     },
//     async (err) => {
//         const status = error.response ? error.response.status : null;

//         if (status === 401) {
//             try {
//                 const refreshTokenFromStorage = localStorage.getItem("");
//                 const { accessToken, refreshToken } = await AuthService.refresh(
//                     refreshTokenFromStorage
//                 );

//                 LocalStorageService.setTokens(accessToken, refreshToken);
//                 client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

//                 return await client();
//             } catch (error) {
//                 return Promise.reject(error);
//             }
//         }

//         if (status === 403 && err.response.data) {
//             return Promise.reject(err.response.data);
//         }

//         return Promise.reject(err);
//     }
// );

const request = async (options) => {
    const onSuccess = (response) => {
        const { data } = response;
        return data;
    };

    const onError = function (error) {
        return Promise.reject({
            message: error.message,
            code: error.code,
            response: error.response,
        });
    };

    return client(options).then(onSuccess).catch(onError);
};

export default request;
