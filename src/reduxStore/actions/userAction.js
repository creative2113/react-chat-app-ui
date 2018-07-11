import axios from 'axios';

export function getAllUsers(){
    return function(dispatch){
        axios.get(URL_GET_USER)
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
        axios.get(URL_MATCHED_USER)
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
        axios.get(URL_GET_CHATS)
        .then(response=>{
            dispatch({type: GET_CHATS, payload: response.data});
        })
        .catch((error)=>{
            console.log("API error", error);
        })
    }
}

export function likeUser(payload){
    return{type: LIKE, payload: payload};
}

export function dislikeUser(payload){
    return{type: DISLIKE, payload: payload};
}

export const GET_ALL_USER="GET_ALL_USER";
export const GET_MATCHED_USER="GET_MATCHED_USER";
export const GET_CHATS="GET_CHATS";
export const LIKE="LIKE";
export const DISLIKE="DISLIKE";
const URL_GET_USER="http://www.json-generator.com/api/json/get/cfMwRiaZgy?indent=2";
const URL_MATCHED_USER="http://www.json-generator.com/api/json/get/cgpcGFhbiq?indent=2";
const URL_GET_CHATS="http://www.json-generator.com/api/json/get/bTHWoQEgfC?indent=2";