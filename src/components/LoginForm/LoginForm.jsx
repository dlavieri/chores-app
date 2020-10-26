import React, { useState } from 'react';

const LoginForm = () => {
    const [ email, setEmail ] = useState(null);
    const [password, setPassword ] = useState(null);

    return (
        <div className="login"></div>
    )
};

export default LoginForm;