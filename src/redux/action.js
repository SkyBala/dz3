import axios from "axios";

export const req = (param) => {
    return async (dispatch) => {
        const data = await axios.get(`https://jojoapi.herokuapp.com/${param}`)
        const result = await data
        console.log(result, 'result');
        dispatch({type: 'GET_DATA', payload: result.data})
    }
}
export const request = () => {
    return async (dispatch) => {
        const data = await axios.get(`https://jojoapi.herokuapp.com`)
        const res = await data
        dispatch({type: 'GET_PERSON', payload: res.data})
    }
}