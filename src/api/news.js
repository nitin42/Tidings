import apiai from 'apiai';
import request from 'superagent';

// ---------- Bot starter (API.ai) --------------------
export let connect_apiai = (term, callback) => {
  const app = apiai('6ad5e49faccc49faaed5874f5431efdf');

  let request = app.textRequest(term, {
      sessionId: "1db7d586-e091-477e-96ee-98eb633f8f24"
  });

  request.on('response', (response) => {
      if (response['result']['fulfillment']['speech'] !== '') {
        callback(response);
      } else {
        callback(response);
      }
  });
<<<<<<< HEAD

  request.on('error', (error) => {
    throw new Error('Client not connected properly.');
  });
  
=======
  request.on('error', (error) => {
    throw new Error('Client not connected properly.');
  });
>>>>>>> dda84c5e72caf0ed43fabb18890f0ec2c9493e55
  request.end();
}

// ------------ Fetcher ----------------------
export let universal = (source, callback) => {
  request.get(source).then((res) => {
    callback(res.body);
  }).catch((err) => {
    return;
  });
}
