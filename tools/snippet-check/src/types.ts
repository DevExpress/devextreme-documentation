export type Framework = 'jquery' | 'angular' | 'vue' | 'react';

export interface Tab {
    /** File name the tab is written to inside the snippet folder, for example `App.tsx`. */
    fileName: string;
    /** Original tab label from the markdown, for example `App.vue (Options API)`. */
    label: string;
    code: string;
    /** 1-based markdown line of the first code line. */
    line: number;
}

export interface Snippet {
    id: string;
    /** Path of the markdown article, relative to the docs root. */
    file: string;
    framework: Framework;
    /** 1-based markdown line of the first tab marker. */
    line: number;
    tabs: Tab[];
    /** Set when a snippet has several alternative variants of one file (for example Options and Composition API). */
    variant?: string;
    /** Widget name used to resolve `{WidgetName}` placeholders, for example `DataGrid`. */
    widget?: string;
}

export type Status = 'pass' | 'fail' | 'skip';

export interface Diagnostic {
    code: string;
    message: string;
    /** Markdown file path, relative to the docs root. */
    file: string;
    /** 1-based markdown line. */
    line: number;
    tab: string;
    severity: 'error' | 'warning';
}

export interface SnippetResult {
    snippet: Snippet;
    status: Status;
    reason?: string;
    diagnostics: Diagnostic[];
}
