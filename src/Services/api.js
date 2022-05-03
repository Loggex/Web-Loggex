// faz a importação do pacote axios
import axios from 'axios';

// define a função para chamada das requisições
const api = axios.create({
  // define a URL base das requisições
  baseURL: 'http://192.168.3.169:5000/api',


  logout: async () => {
    return { status: true };
    const response = await api.post('/logout');
    return response.data;
}
});



// define o padrão de exportação
export default api;