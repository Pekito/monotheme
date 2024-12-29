import React, { useState } from "react"
import styles from "../styles/MInput.module.css";
import { classNamesFromObj, createClassNames } from "../utils/string-utils"
type ValidationResult = [isValid: boolean, validationMessage: string]
type MTextInput = {
    label?: string
    placeholder?: string
    value?: string
    id: string
    validationCallback?: (value: string) => ValidationResult
}
const createValidationResult = (isValid: boolean, message: string) => [isValid, message] as ValidationResult
const MTextInput: React.FC<MTextInput> = (props) => {
    const [inputValue, setInputValue] = useState(props.value ?? "");
    const [validationResult, setValidationResult] = useState<ValidationResult>([true, ""]);
    const validationCallback = props.validationCallback ?? (() => [true, ""]);
    const handleInputChange = (value: string) => {
        setInputValue(value);
        const isValid = validationCallback(value);
        setValidationResult(isValid);
    }
    const getValidationLabel = (validationResult: ValidationResult) => {
        return <div className={styles["m-input-feedback"]}>
                {!validationResult[0] && validationResult[1]}
            </div>
    }
    return <div className={classNamesFromObj({
        "m-component": true,
        [styles["m-input-wrapper"]]: true,
        [styles["m-input-wrapper--invalid"]]: !validationResult[0]

    })}>
            {props.label && <label className={styles["m-input-label"]} htmlFor={props.id}>{props.label}</label>}
            <input
                className={styles["m-input"]}
                placeholder={props.placeholder} 
                value={inputValue}
                name={props.id}
                id={props.id}
                type="text"
                onChange={(event) => handleInputChange(event.target.value)}
                />
            {getValidationLabel(validationResult)}
        </div>
}


export {
    MTextInput, createValidationResult
}