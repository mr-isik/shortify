import axios from "axios";

export const apiOptions = {
  method: "POST",
  url: "https://url-shortener-service.p.rapidapi.com/shorten",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
  },
  data: {},
};

export const postData = async (options: object) => {
  try {
    const res = await axios.request(options);
    return res;
  } catch (error) {
    throw new Error("Please make sure you entered a link!");
  }
};
