import { privateApi } from "./apindex";

export const userDetails = () => {
    return privateApi.get('/auth/me');
}