import axios from "axios";

export const createLink = link =>
  new Promise((resolve, reject) => {
    return axios
      .post("http://5adab961ba92a2001425c92e.mockapi.io/api/v1/links", link)
      .then(response => (response.status !== 201 ? reject(response) : response))
      .then(response => response.data)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
