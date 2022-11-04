export const GET_WORDS = 'GET_WORDS',
    ADD_WORDS = 'ADD_WORDS',
    DELETE_WORDS = 'DELETE_WORDS',
    UPDATE_WORDS = 'UPDATE_WORDS';

const initialState = {
    items: [],
    isLoading: true,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORDS:
            return {
                ...state,
                items: action.payload,
                    isLoading: false,
            }
            case ADD_WORDS:
                return {
                    ...state,
                    items: [...state.items, action.payload],
                        isLoading: false,
                }

                case DELETE_WORDS:
                    return {
                        ...state,
                        items: action.payload,
                            isLoading: false,
                    }

                    case UPDATE_WORDS:
                        return {
                            ...state,
                            items: action.payload,
                                isLoading: false,
                        }

                        default:
                            return state;
    }
}