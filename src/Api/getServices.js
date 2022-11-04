import axios from 'axios';
import { getAllWords } from '../redux/actions';

const corsUrl = 'https://cors-everywhere.herokuapp.com/';
const baseUrlGet = 'http://itgirlschool.justmakeit.ru/api/words';

export const axiosGetWords = () => {
    return dispatch => {
        axios.get(corsUrl + baseUrlGet)
        .then(response => dispatch(getAllWords(response.data)))
        .catch(error => console.error(error));
    }
}