const iframeSheets = document.styleSheets;

Object.entries(iframeSheets).forEach(([key, sheet]) => {
    if (sheet.href?.includes('fluent')) {
        iframeSheets[key].disabled = true;
    }
});

const parentSheets = window.parent.document.styleSheets;

Object.values(parentSheets).forEach(sheet => {
    const href = sheet.href?.toLowerCase() || '';
    const frameworks = ['jquery', 'angular', 'vue', 'react'];

    if (frameworks.some(fw => href.includes(fw))) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = sheet.href;
        document.head.appendChild(link);
    }
});
