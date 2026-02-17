import https from 'https';

const url = 'https://konfhub.com/tedxkkwieer';

https.get(url, (res) => {
   let data = '';
   res.on('data', (chunk) => {
      data += chunk;
   });
   res.on('end', () => {
      // Look for event_id or eventId pattern
      // Usually inside JSON-LD or window.__NEXT_DATA__
      const match = data.match(/"event_id":"([a-f0-9-]+)"/i) || data.match(/"eventId":"([a-f0-9-]+)"/i);
      if (match) {
         console.log('FOUND_UUID:', match[1]);
      } else {
         console.log('UUID_NOT_FOUND');
         // console.log(data); // Too much output
      }
   });
}).on('error', (err) => {
   console.error('Error:', err.message);
});
