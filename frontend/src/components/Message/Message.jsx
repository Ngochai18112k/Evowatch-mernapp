import React from 'react';
import './message.scss';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
    return (
        <Alert variant={variant} className="message">
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'info',
}

export default Message
