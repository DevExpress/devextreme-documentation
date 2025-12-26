Object.entries(document.styleSheets).forEach(([key, sheet]) => {
    if (sheet.href?.includes('fluent')) {
        document.styleSheets[key].disabled = true;
    }
});

document.body.classList.add(localStorage.getItem('dx-devextreme-site-framework'));
