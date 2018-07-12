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

export function updateChat(userChats){
    return {type: UPDATE_CHAT, payload: userChats}
}

export function likeUser(users){
    return{type: LIKE, payload: users};
}

export function dislikeUser(users){
    return{type: DISLIKE, payload: users};
}

export const GET_ALL_USER="GET_ALL_USER";
export const GET_MATCHED_USER="GET_MATCHED_USER";
export const GET_CHATS="GET_CHATS";
export const LIKE="LIKE";
export const DISLIKE="DISLIKE";
export const UPDATE_CHAT="UPDATE_CHAT";
const URL_GET_USER="http://www.json-generator.com/api/json/get/cfMwRiaZgy?indent=2";
const URL_MATCHED_USER="http://www.json-generator.com/api/json/get/cgpcGFhbiq?indent=2";
const URL_GET_CHATS="http://www.json-generator.com/api/json/get/bVbxbVjIGG?indent=2";