import axios from "axios";

export async function axiosRequest({
  baseUrl,
  endPoint,
  method = "GET",
  headers = {},
  data = {},
  params = {},
  timeout = 10000,
  options = {},
}) {
  const axiosConfig = {
    baseURL: baseUrl,
    url: endPoint,
    method,
    headers,
    data,
    params,
    timeout,
    ...options,
  };

  try {
    const response = await axios(axiosConfig);
    return response.data;
  } catch (error) {
    console.error("AXIOS ERROR:", error);
    throw error?.response?.data || error;
  }
}
