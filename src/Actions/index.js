import { LOG_IN, LOG_OUT } from './types'
// login
export const logIn = () => {
    return {
        type: LOG_IN
    }
}
// logout
export const logOut = () => {
    return {
        type: LOG_OUT
    }
}