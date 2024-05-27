/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InfoUpdateFormInputValues = {
    userId?: string;
    name?: string;
    phone?: string;
    address?: string;
};
export declare type InfoUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InfoUpdateFormOverridesProps = {
    InfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: InfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    info?: any;
    onSubmit?: (fields: InfoUpdateFormInputValues) => InfoUpdateFormInputValues;
    onSuccess?: (fields: InfoUpdateFormInputValues) => void;
    onError?: (fields: InfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InfoUpdateFormInputValues) => InfoUpdateFormInputValues;
    onValidate?: InfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InfoUpdateForm(props: InfoUpdateFormProps): React.ReactElement;
