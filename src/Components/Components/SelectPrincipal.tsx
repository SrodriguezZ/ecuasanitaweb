import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Select from 'react-select';

interface SelectPrincipalProps {
    options: Array<{ value: number; label: string }>;
    selectedRole: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    errorMessage?: string;
    className?: string
}

//prettier-ignore
export const SelectPrincipal: React.FC<SelectPrincipalProps> = ({ options, className, selectedRole, onChange, disabled = false, required = false, label = '', errorMessage = 'Es necesario Escoger una opcion' }) => (
    <Col xl={12} className="mb-4">
        <Form.Label>{label}</Form.Label>
        <Select
            isDisabled={disabled}
            classNamePrefix="Select-sm"
            options={options}
            placeholder={label}
            className={className}
            value={options.find(option => option.value === selectedRole) || { value: 0, label: 'Ninguno' }}
            onChange={(e) => onChange(Number(e?.value) || 0)}
            required={required}
        //menuPlacement="top"
        />
        {required && !selectedRole && <p className="text-danger">{errorMessage}</p>}
    </Col>
);