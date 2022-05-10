// faz a importação do pacote axios
import axios from 'axios';

// define a função para chamada das requisições
const api = axios.create({
  // define a URL base das requisições
  baseURL: 'http://localhost:5000/api'

});



// define o padrão de exportação
export default api;