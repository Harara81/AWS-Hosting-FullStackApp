import * as dotenv from "dotenv";
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "a5914st5914n",
  database: "udagram",
  host: "udagram.cklpvawcgdvp.us-east-1.rds.amazonaws.com",
  aws_region: "us-east-1",
  aws_profile: "",
  aws_media_bucket: "arn:aws:s3:::udagram",
  url: "http://localhost:8080",
  jwt: {
    secret: "Karla",
  },
};
/*

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
 */
