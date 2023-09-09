import axios from "axios";

const url = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common["x-api-key"] = "live_PPzkRx4kUWgPaxPu6pslxXlnWO2YM9K8Rc1XNSSSEb2463djXMaHwUy3SBw1CkUZ";

export function fetchBreeds() {
    return axios.get(`${url}/breeds`)
        .then(response => {
            return response.data;
        }).catch (error => {
            throw new Error(error.message);
        });       
};

export function fetchCatByBreed(breedId) {
    return axios.get(`${url}/images/search?breed_ids=${breedId}`)
        .then(response => {
            return response.data;
        });  
};