import * as React from 'react';
import 'brace/mode/curly';
import 'brace/mode/json';
import 'brace/theme/github';
import 'brace/theme/monokai';
import { MediaTypeModel } from '../../services/models';
export interface ConsoleEditorProps {
    mediaTypes: MediaTypeModel[];
}
export declare class ConsoleEditor extends React.Component<ConsoleEditorProps> {
    editor: any;
    render(): JSX.Element | null;
}
