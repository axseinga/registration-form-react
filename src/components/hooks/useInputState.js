import { useState } from "react";

export default (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
        const name = e.target.name;
        const newValue = e.target.value;
        setValue({ [name]: newValue });
    };

    return [value, handleChange];
};
