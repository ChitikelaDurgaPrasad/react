import { publicApi } from "./apindex";

export const loginUser = (username, password) => 
    publicApi.post('/auth/login', {username, password});