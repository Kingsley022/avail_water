import {useState} from 'react';

export const useToggle = (initialValue = false) => {
    const[isToggled, setToggle] = useState(initialValue);

    const onToggle = () => {
        setToggle(prevToggle => !prevToggle);
    }
    return {onToggle, isToggled, setToggle};
}