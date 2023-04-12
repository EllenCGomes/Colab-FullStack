import axios from "axios";

const baseUrl = "/usuarios"

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

export default { getAll }