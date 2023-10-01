import axios from "axios";

const status = document.getElementById('status')

const get = () => {
  axios({
    method: 'get',
    url: 'http://localhost:8080/container/findall'
  })
}