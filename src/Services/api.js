// faz a importação do pacote axios
import axios from 'axios';

// define a função para chamada das requisições
const api = axios.create({
  // define a URL base das requisições
  baseURL: 'http://loggex-backend.azurewebsites.net/api'
});



// define o padrão de exportação
export default api;