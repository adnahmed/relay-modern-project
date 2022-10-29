import React from "react";

export function Cell(props) {
    return (
        <div
            className="Cell"
            style={{
                display: 'inline-block',
                textAlign: 'center',
                padding: '10px 5px',
                margin: '1px',
                borderWidth: '1px',
                fontWeight: props.isTextBold ? 'bold' : 'normal',
                flex: props.flex || 'auto',
            }}
        >
            {props.value}
        </div>
    )
}