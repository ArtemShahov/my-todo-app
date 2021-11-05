import React from 'react';

interface Props {
    text: string,
    fn: any,
};

function Button(props: Props) {
    const { text, fn } = props;
    return (
        <button type="button" onClick={fn}>
            {text}
        </button>
    )
}

export default Button;
