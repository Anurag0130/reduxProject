const initialState = {
    notes: 'Type your First Notes',
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_NOTE':
            return {
                ...state,
                notes: action.payload.notes,
            }
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: '',
            }
        default:
            return state;
    }
}

export default noteReducer;
