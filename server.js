import connectDB from './db/connection.js';
import 'dotenv/config';
import app from './app.js';

async function startServer() {
  await connectDB();
  const port = process.env.PORT || 8001;

  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Server is running. Use our API on port: ${port}`);
  });
}

startServer();
