export const conf = {
  db: {
    uri: process.env.MONGO_URI as string,
  },
  auth: {
    secret: process.env.JWT_SECRET as string,
  },
};
