import * as React from 'react';
import { FieldModel, OperationModel } from '../../services/models';
import { OpenAPISchema } from '../../types';
export interface ConsoleViewerProps {
    operation: OperationModel;
    additionalHeaders?: object;
    queryParamPrefix?: string;
    queryParamSuffix?: string;
}
export interface ConsoleViewerState {
    result: any;
}
export interface Schema {
    _$ref?: any;
    rawSchema?: OpenAPISchema;
}
export declare class ConsoleViewer extends React.Component<ConsoleViewerProps, ConsoleViewerState> {
    operation: OperationModel;
    additionalHeaders: object;
    visited: Set<any>;
    private consoleEditor;
    constructor(props: any);
    onClickSend: () => Promise<void>;
    addParamsToUrl(url: string, params: FieldModel[]): string;
    invoke(endpoint: any, body: any, headers?: {}): Promise<{
        json: any;
        statusCode: number;
        _fetchRes: Response;
        resp?: undefined;
    } | {
        resp: string;
        _fetchRes: Response;
        json?: undefined;
        statusCode?: undefined;
    } | {
        json: {
            endpoint: any;
            error_code: string;
            details: string;
            severity: string;
        };
        statusCode?: undefined;
        _fetchRes?: undefined;
        resp?: undefined;
    } | undefined>;
    render(): JSX.Element;
    getSchema(): Schema | null;
}
