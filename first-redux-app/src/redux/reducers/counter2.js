const initialState = {
    counter2: 10
}

export default function counter2(state = initialState, action) {

    switch (action.type) {
        case 'ADD2':
            return {
                counter2: state.counter2 + action.value
            }
        default:
            return state
    }
}