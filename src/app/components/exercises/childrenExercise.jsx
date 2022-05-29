import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ParentComponent = ({ children }) => {
    let count = 1;
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            value: count
        };
        console.log(child);
        count++;
        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ParentComponent>
                <Component />
                <Component />
                <Component />
            </ParentComponent>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    if (value !== undefined) {
        return <div>{value} Компонент списка</div>;
    }
};

Component.propTypes = {
    value: PropTypes.number
};

export default ChildrenExercise;
