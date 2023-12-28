// Page2.js

import React from 'react';
import { Link } from 'react-router-dom';

function Page2(props) {
    console.log(props);
    return (
        <div>
            <h2>This is Page 2</h2>
            <p>Content for Page 2 goes here.</p>
            <p>{props.name}</p>
            <Link to="/">Go to Page 1</Link>
        </div>
    );
};

export default Page2;
