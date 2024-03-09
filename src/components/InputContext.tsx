import {createContext} from 'react';

interface InputContextType{
    data: string;
}
const InputContext = createContext<InputContextType>({
    data: ''
});

export default InputContext;