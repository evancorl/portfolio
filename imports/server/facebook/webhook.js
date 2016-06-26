WebApp.connectHandlers.use('/webhooks/fb', (request, response) => {
  const { method } = request;

  if (method === 'POST') {
    // Handle Facebook data

    response.writeHead(200);
  } else {
    response.writeHead(302, {
      Location: '/',
    });
  }

  response.end();
});
