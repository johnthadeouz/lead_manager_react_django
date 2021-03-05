import { CREATE_MESSAGE } from './types';

//CRAETE MESSAGE
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};