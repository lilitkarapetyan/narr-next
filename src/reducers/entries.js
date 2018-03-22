import {ADD_ENTRY, TOGGLE_ENTRY} from "../actions";

const entries = (state = [], action) => {
    switch (action.type) {
        case ADD_ENTRY:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    created: new Date(),
                    type: 'comment',
                    privacy: 'public'
                }
            ];
        case TOGGLE_ENTRY:
            return state.map(entry =>
                (entry.id === action.id)
                    ? {...entry, completed: !entry.completed}
                    : entry
            );
        default:
            return state
    }
};

export default entries