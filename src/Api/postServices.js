import axios from 'axios';
import { addNewWords } from '../redux/actions';

const corsUrl = 'https://cors-everywhere.herokuapp.com/';

export const addWordsApi = param => {
    const baseUrlAdd = 'http://itgirlschool.justmakeit.ru/api/words/add';

    return dispatch => {
        axios.post(corsUrl + baseUrlAdd, param)
            .then(response => dispatch(addNewWords(response.data)))
            .catch(error => console.error(error))
    }
}
export const deleteWordsApi = (id) => {
    const baseUrlDelete = `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`;
    axios.post(corsUrl + baseUrlDelete)
        .then(response => response.data)
        .catch(error => console.error(error))
}

// export const updateWordsApi = (param, id)=> {
//     const baseUrlUpdate = `http://itgirlschool.justmakeit.ru/api/words/${id}/update`;

//     return dispatch => {
//         axios.post(corsUrl + baseUrlUpdate, param)
//             .then(response => dispatch(updateWords(response.data)))
//             .catch(error => console.error(error))
//     }
// }