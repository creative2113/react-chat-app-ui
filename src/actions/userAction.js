export const GET_DATA="GET_DATA";
export const LIKE="LIKE";
export const DISLIKE="DISLIKE";

export function getData(payload){
    return{type: GET_DATA, payload: payload};
}

export function likeUser(payload){
    return{type: LIKE, payload: payload};
}

export function dislikeUser(payload){
    return{type: DISLIKE, payload: payload};
}