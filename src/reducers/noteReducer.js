const noteReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_NOTE':
            return state.concat(action.data)
        case 'INIT_NOTES':
            return action.data
        case 'TOGGLE_IMPORTANCE': {
            const id = action.data.id
            const noteToChange = state.find(n => n.id === id)
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }
            return state.map(note => 
                note.id !== id ? note : changedNote
                )
        }
        default:
            return state
    }
}

const generateId = () => 
  Math.floor(Math.random() * 1000000)

export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        data: {
            content,
            important: false,
            id: generateId()
        }
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        data: { id }
    }
}

export const initializeNotes = (notes) => {
    return {
        type: 'INIT_NOTES',
        data: notes
    }
}

export default noteReducer