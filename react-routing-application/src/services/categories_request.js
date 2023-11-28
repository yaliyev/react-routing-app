import axios from "axios";
const API_URL = "https://northwind.vercel.app/api/categories";

async function getAllCategories(){
    return await axios.get(API_URL).then(response=>response.data);
}
async function addCategory(category){
    return await axios.post(API_URL,category);
}

export {getAllCategories,addCategory};