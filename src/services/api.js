// TODO: REST API connector stub (axios ready)

export const apiClient = {
  get: async (url) => {
    // return axios.get(url)
    return Promise.resolve({ data: [] });
  },
  post: async (url, data) => {
    // return axios.post(url, data)
    return Promise.resolve({ success: true });
  }
};
