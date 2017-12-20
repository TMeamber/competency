import axios from 'axios';
import URL from '../api';

const initialState = {
    comics: [],
}

export function getComic(comics){
    const getComic = axios.get('/api/comics/get').then(res => res.data)
    return {
        type: GET_COMIC,
        payload: getComic
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COMIC + '_FULFILLED':
            return Object.assign({}, state, {getComic: action.payload}  )
        default:
            return state;
    }
}