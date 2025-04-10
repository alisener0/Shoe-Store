import axios from "axios";
import formatParams from "../utils/formatParams"

const api = axios.create({
    baseURL:"http://localhost:3050",
});

//url dn  gelen parametre nesnesi bu şekilde
const urlParams = {
    
    gender: "men",
    color: "blue,gray",
    size: "45,43,40",
    price: "219",
};



//api e gönderilecek parametre stringi bu şekilde
const url = 
"?color_like=mavi&color_like=gray&size_like=40&size_like=41&gender=men&price_lte=371"



//bütün ayakkabıları al
export const getShoes = (params:string) => 
    api.get(`/shoes${params}`).then((res) => res.data);

//bir ayakkabıyı al 
export const getShoe = (id: string)  => 
    api.get(`/shoes/${id}`).then((res) => res.data )
