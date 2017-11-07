import axios from 'axios';
import { apiPrefix } from './../../../etc/config.json';

export const showHistory = () => dispatch => {
    dispatch({
        type: "SHOW_HISTORY",
    });
}
export const getHistory = (sb_id) => dispatch => {
    axios.get(`${apiPrefix}/transp/getHistory?sb_id=${sb_id}`).then((response) => {
        dispatch({
            type: "GET_HISTORY",
            data: response.data
        });
    });
};