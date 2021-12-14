/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then((resp) => resp.data);

const editContact = (id, name, number) => {
  return axios.put(`${baseUrl}/${id}`, {name, number}).then(resp => resp.data);
};

const delContact = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const addContact = (name, number) => {
  return axios.post(`${baseUrl}/`, {name, number}).then(resp => resp.data);
}

export default { getAll, editContact, delContact, addContact };
