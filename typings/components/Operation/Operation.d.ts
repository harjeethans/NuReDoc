import * as React from 'react';
import { OperationModel as OperationType } from '../../services/models';
export interface OperationProps {
    operation: OperationType;
}
export interface OperationState {
    executeMode: boolean;
}
export declare class Operation extends React.Component<OperationProps, OperationState> {
    constructor(props: any);
    onConsoleClick: () => void;
    render(): JSX.Element;
}
