import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const inputStyle = useRef();
    const handleClick = () => {
        console.log(inputStyle.current);
        inputStyle.current.style.height = "150px";
        inputStyle.current.style.width = "80px";
        inputStyle.current.textContent = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                onClick={handleClick}
                ref={inputStyle}
            >
                <small>Блок</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
