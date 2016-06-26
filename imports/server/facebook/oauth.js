// import facebook from 'fb';
// import url from 'url';

// const {
//   FACEBOOK_APP_ACCESS_TOKEN,
//   FACEBOOK_APP_SECRET,
// } = Meteor.settings;

// const {
//   FACEBOOK_APP_ID,
//   FACEBOOK_REDIRECT_URI,
// } = Meteor.settings.public;

// WebApp.connectHandlers.use('/oauth/fb', (request, response) => {
//   const { method } = request;

//   const urlToParse = request.url;
//   const parsedUrl = url.parse(urlToParse, true);

//   const { code } = parsedUrl.query;

//   if (method === 'GET' && code) {
//     facebook.api('oauth/access_token', {
//       code,
//       client_id: FACEBOOK_APP_ID,
//       client_secret: FACEBOOK_APP_SECRET,
//       redirect_uri: FACEBOOK_REDIRECT_URI,
//     }, accessReponse => {
//       if (!accessReponse || accessReponse.error) {
//         const error = accessReponse ? accessReponse.error : 'No response';

//         // return response.setHeader('Location', `/sign-up?error=${error}`);
//       } else {
//         const inputToken = accessReponse.access_token;
//         const expires = accessReponse.expires ? accessReponse.expires : 0;

//         facebook.api('debug_token', {
//           input_token: inputToken,
//           access_token: FACEBOOK_APP_ACCESS_TOKEN,
//         }, debugResponse => {
//           const {
//             app_id,
//             user_id,
//             scopes,
//           } = debugResponse.data;

//           // Upsert user and log them in

//           // response.writeHead(302, {
//           //   Location: '/profile',
//           // });

//           response.end();
//         });
//       }
//     });
//   } else {
//     response.writeHead(302, {
//       Location: '/',
//     });

//     response.end();
//   }
// });
