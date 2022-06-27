const app = require('./app');
const connectDB = require('./db/connect');

const port = 5500;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`PayMe API running on prot ${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

start();
