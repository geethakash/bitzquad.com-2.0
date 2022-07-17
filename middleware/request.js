import axios from "axios";

async function Get(url, config = { headers: {} }) {
  config.headers = setDefaultHeaders(config.headers);
  let res = await axios.get(url, config);
  if (!res) {
  }
  return res;
}
async function Post(url, data, config = { headers: {} }) {
  config.headers = setDefaultHeaders(config.headers);
  let res = await axios.post(url, data, config);
  if (!res) {
  }
  return res;
}
async function Put(url, data, config = { headers: {} }) {
  config.headers = setDefaultHeaders(config.headers);
  let res = await axios.put(url, data, config);
  if (!res) {
  }
  return res;
}
async function Delete(url, config = { headers: {} }) {
  config.headers = setDefaultHeaders(config.headers);
  let res = await axios.delete(url, config);
  if (!res) {
  }
  return res;
}

function setDefaultHeaders(currentHeaders) {
  return currentHeaders;
}

export default {
  Get,
  Post,
  Put,
  Delete,
};
