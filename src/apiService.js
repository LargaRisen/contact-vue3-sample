import axios from "axios";

// Set base URL if needed
axios.defaults.baseURL = "https://randomuser.me/api";

export const apiService = {
  async getData(endpoint) {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${endpoint}: ${error}`);
    }
  },

  async postData(endpoint, data) {
    try {
      const response = await axios.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error posting data to ${endpoint}: ${error}`);
    }
  },

  async putData(endpoint, data) {
    try {
      const response = await axios.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error putting data to ${endpoint}: ${error}`);
    }
  },

  async deleteData(endpoint) {
    try {
      const response = await axios.delete(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`Error deleting data from ${endpoint}: ${error}`);
    }
  },

  // Custom request method, can be used for any HTTP method
  async customRequest(method, url, data) {
    try {
      const response = await axios({
        method,
        url,
        data,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error with custom request: ${error}`);
    }
  },

  // Custom request method with headers, can be used for any HTTP method
  async customRequestWithHeaders(method, url, data, headers) {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error with custom request: ${error}`);
    }
  },
};
