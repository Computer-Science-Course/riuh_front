/** Search Field Props */
export interface SearchFieldProps {
    /** Search field label */
    label?: string,
    /** Search field placeholder */
    placeholder?: string,
    /** Set up if value is required */
    required: boolean,
    /** Search field value */
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void,
    /** Disabled button state */
    disabled?: boolean;
}