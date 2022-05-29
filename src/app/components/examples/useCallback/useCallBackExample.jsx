import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // without callback
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    const withOutCallback = useRef(0);
    useEffect(() => withOutCallback.current++, [validateWithoutCallback]);

    // with callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    const withCallback = useRef(0);
    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    useEffect(() => withCallback.current++, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback: {withOutCallback.current}</p>
            <p>Render with Callback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                onChange={handleChange}
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
