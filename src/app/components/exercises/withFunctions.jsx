import React from "react";
import CardWrapper from "../../components/common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth") === "token";
    function onLogin() {
        localStorage.setItem("auth", "token");
    }
    function onLogOut() {
        localStorage.removeItem("auth");
    }
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogOut={onLogOut}
                onLogin={onLogin}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
