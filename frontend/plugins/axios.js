// export default function ({ $axios, error: nuxtError }) {
//   $axios.onError(error => {
//     nuxtError({
//       statusCode: error.response.status,
//       message: error.message,
//     });
//     return Promise.resolve(false);
//   });

//   // set default timeout to 3 minutes
//   $axios.defaults.timeout = 1000 * 60 * 3;
// }