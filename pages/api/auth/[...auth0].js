// import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// export default handleAuth({
//   async login(req, res) {
//     try {
//       await handleLogin(req, res, {
//         authorizationParams: {
//           audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
//           scope: process.env.AUTH0_SCOPE,
//         },
//       });
//     } catch (error) {
//       res.status(error.status || 400).end(error.message);
//     }
//   },
// });

import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

const afterCallback = async (req, res, session, state) => {
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
