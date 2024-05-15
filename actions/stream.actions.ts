"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User not logged in");
  if (!apiKey) throw new Error("Stream API Key is not provided");
  if (!apiSecret) throw new Error("Stream API Secret is not provided");

  // creating a new StreamClient usin both apiKey and apiSecret
  const client = new StreamClient(apiKey, apiSecret);

  // creating a token with user id, expiration time and issued time
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(new Date().getTime() / 1000) - 60;

  // creating a token
  const token = client.createToken(user.id, exp, issued);

  return token;
};
