import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Syntax!');
});

// Übung 1 (bilder/5): Endpunkt /hello -> 'Syntax!' mit 200 OK
app.get('/hello', (req, res) => {
  res.status(200).send('Syntax!');
});

app.get('/health', (_, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Übung 2 (bilder/8): Grüß-Endpunkt mit optionalem Query-Parameter shout
app.get('/hi/:name', (req, res) => {
  const { name } = req.params;
  const { lang, shout } = req.query;

  let greeting = lang === 'en' ? 'Welcome' : 'Willkommen';
  if (shout === 'true') {
    greeting = greeting.toUpperCase();
  }
  const message = `Hi, ${name}! ${greeting}.`;

  res.status(200).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
