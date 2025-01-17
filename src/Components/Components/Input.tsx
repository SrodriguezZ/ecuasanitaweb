import { Col, Form, } from "react-bootstrap";
import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
    id?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    Feedback?: string;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
    typeFeedback?: "valid" | "invalid";
    disabled?: boolean | undefined;
    value?: string | string[] | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    className?: string;
    max?: number | string | undefined;
    min?: number | string | undefined;
}

//prettier-ignore
const Input: React.FC<InputProps> = ({ id = "", label = "", placeholder = "", max, min, Feedback = "", type = "text", required = false, typeFeedback = undefined, value = "", disabled = false, onChange, className = "" }) => {
    return (
        <div>
            <Col className="mb-3">
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    id={id}
                    disabled={disabled}
                    required={required}
                    type={type}
                    className={`mb-3 ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    max={max}
                    min={min}
                />
                <Form.Control.Feedback
                    type={typeFeedback}
                >{Feedback}</Form.Control.Feedback>
            </Col>
        </div>
    );
}

export default Input;