import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

function getAll() {
  return axios.get(baseUrl);
}

function create(newObject) {
  return axios.post(baseUrl, newObject);
}

function update(id, newObject) {
  return axios.put(`${baseUrl}/${id}`, newObject);
}

function deleteItem(id) {
  return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, create, update, deleteItem }