import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "0a339568-ca8f-4e77-b590-e17d2ad725d8",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  Follow(id) {
    return instance.post(`follow/${id}`, {}).then((response) => {
      return response.data;
    });
  },
  Unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getUserId(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
};
