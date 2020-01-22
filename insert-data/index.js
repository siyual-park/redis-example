const redis = require('redis');
const client = redis.createClient();

client.on('error', function (err) {
  console.log('Error ' + err);
});

client.set('string key', 'string val', (err, res) => {
  redis.print(err, res);
  client.get('string key', (err, value) => {
    redis.print(err, value);
    client.quit();
  });
});

