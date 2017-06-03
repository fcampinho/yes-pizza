export const pizzaSizes = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_SIZES':
            return [...action.response]
        default:
            return state;
    }
}