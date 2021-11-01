import { sectionActionTypes } from './section.types'

const INITIAL_STATE = {
    home: true,
    about: false,
    projects: false,
    contact: false
}

const sectionReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case sectionActionTypes.ACTIVATE_HOME:
            return {
                home: true,
                about: false,
                projects: false,
                contact: false
            }

        case sectionActionTypes.ACTIVATE_ABOUT:
            return {
                home: false,
                about: true,
                projects: false,
                contact: false
            }

        case sectionActionTypes.ACTIVATE_PROJECTS:
            return {
                home: false,
                about: false,
                projects: true,
                contact: false
            }

        case sectionActionTypes.ACTIVATE_CONTACT:
            return {
                home: false,
                about: false,
                projects: false,
                contact: true
            }

        default:
            return state
    }
}

export default sectionReducer;