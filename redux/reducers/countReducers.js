const initialState = {
    count: 5,
}
export default (state = initialState, actions) => {
    switch (actions.type) {
        case 'COUNT_INCRESE':
            // console.log(state)
            // {"count": 0}
            return {
                ...state,         // Spread the existing properties
                count: state.count - 1, // Override the `count` property
            }

        case 'COUNT_DECRESE':
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }

}