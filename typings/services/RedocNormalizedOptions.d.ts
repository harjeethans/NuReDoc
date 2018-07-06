import { ResolvedThemeInterface, ThemeInterface } from '../theme';
export interface RedocRawOptions {
    theme?: ThemeInterface;
    scrollYOffset?: number | string | (() => number);
    hideHostname?: boolean | string;
    enableConsole?: boolean;
    additionalHeaders?: object;
    expandResponses?: string | 'all';
    requiredPropsFirst?: boolean | string;
    noAutoAuth?: boolean | string;
    nativeScrollbars?: boolean | string;
    pathInMiddlePanel?: boolean | string;
    untrustedSpec?: boolean | string;
    hideLoading?: boolean | string;
    hideDownloadButton?: boolean | string;
    providedByName?: string;
    providedByUri?: string;
    queryParamPrefix?: string;
    queryParamSuffix?: string;
    unstable_ignoreMimeParameters?: boolean;
}
export declare class RedocNormalizedOptions {
    static normalizeExpandResponses(value: RedocRawOptions['expandResponses']): {};
    static normalizeHideHostname(value: RedocRawOptions['hideHostname']): boolean;
    static normalizeScrollYOffset(value: RedocRawOptions['scrollYOffset']): () => number;
    theme: ResolvedThemeInterface;
    scrollYOffset: () => number;
    hideHostname: boolean;
    expandResponses: {
        [code: string]: boolean;
    } | 'all';
    requiredPropsFirst: boolean;
    noAutoAuth: boolean;
    nativeScrollbars: boolean;
    pathInMiddlePanel: boolean;
    untrustedSpec: boolean;
    hideDownloadButton: boolean;
    enableConsole: boolean;
    additionalHeaders: object;
    providedByName: string;
    providedByUri: string;
    queryParamPrefix: string;
    queryParamSuffix: string;
    unstable_ignoreMimeParameters: boolean;
    constructor(raw: RedocRawOptions);
}
