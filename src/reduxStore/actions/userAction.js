import axios from 'axios';
export const GET_ALL_USER="GET_ALL_USER";
export const GET_MATCHED_USER="GET_MATCHED_USER";
export const GET_CHATS="GET_CHATS";
export const LIKE="LIKE";
export const DISLIKE="DISLIKE";
export const UPDATE_CHAT="UPDATE_CHAT";
const ACCESS_TOKEN="gevso8w5gtd5vajqqgjitm1zg3640c8hgzswuhhm";
const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` };
const URL_GET_USER="https://api.json-generator.com/templates/kWhhm__NNZsv/data";
const URL_MATCHED_USER="https://api.json-generator.com/templates/kWhhm__NNZsv/data";
const URL_GET_CHATS="https://api.json-generator.com/templates/kWhhm__NNZsv/data";

export function getAllUsers(){
    return function(dispatch){
        axios.get(URL_GET_USER, {headers})
        .then(response=>{
            dispatch({type: GET_ALL_USER, payload: response.data});
        })
        .catch((error)=>{
            console.log("API error", error);
        })
    }
}

export function getMatchedUsers(){
    return function(dispatch){
        axios.get(URL_MATCHED_USER, {headers})
        .then(response=>{
            dispatch({type: GET_MATCHED_USER, payload: response.data});
        })
        .catch((error)=>{
            console.log("API error", error);
        })
    }
}

export function getChats(){
    return function(dispatch){
        axios.get(URL_GET_CHATS, {headers})
        .then(response=>{
            dispatch({type: GET_CHATS, payload: response.data});
        })
        .catch((error)=>{
            console.log("API error", error);
        })
    }
}

export function updateChat(userChats){
    return {type: UPDATE_CHAT, payload: userChats}
}

export function likeUser(users){
    return{type: LIKE, payload: users};
}

export function dislikeUser(users){
    return{type: DISLIKE, payload: users};
}
