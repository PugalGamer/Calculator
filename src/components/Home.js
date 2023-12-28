import React from 'react'
import classes from "./Home.module.css";
import Button from './Button';
import { useState } from 'react';

export default function Home() {
    const [res, setRes] = useState('')

    const findval = () => {
        let result = Function("return " + res)();
        setRes(result.toString());
    }

    const handler = (arg) => {
        console.log(arg);
        if (res === "Infinity") {
            setRes('');
            return;
        }
        if (arg === "C") setRes('');
        else if (arg === "=") findval();
        else if (arg === "Del") {
            let n = res.length;
            if (n > 0)
                setRes(res.slice(0, n - 1));
        }
        else setRes(res.concat(arg))
    }

    const buttons = ["C", "9", "8", "/", "7", "6", "5", "*", "4", "3", "2", "+", "1", "0", ".", "-", "Del", "="]
    return (
        <div className={classes.home}>
            <div className={classes.inner}>
                <div className={classes.result}>
                    <div className={classes.resbox}>
                        {res}
                    </div>
                </div>
                <div className={classes.btns}>
                    {buttons.map((ele, index) => { return <Button value={ele} key={index} handler={handler} /> })}
                </div>
            </div>
        </div>
    )
}
