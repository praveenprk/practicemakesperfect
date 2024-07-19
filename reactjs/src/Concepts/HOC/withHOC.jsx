import React from "react";

const withHoc = (WrappedComponent) => {
    return (props) => {
        const newProps = {
            ...props,
            label: props.label.toUpperCase(),
            style: {
                color: 'blue',
                fontWeight: 'bold'
            }
        };
        return <WrappedComponent {...newProps} />;
    };
};

export default withHoc;