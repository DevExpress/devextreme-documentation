let mainSheet;

for (const sheet of document.styleSheets) {
    if (sheet.href?.includes('fluent')) {
        mainSheet = sheet;
        break;
    }
}

const singleIconStyleRegex = /.dx-icon-([\w]+)::before/
const doubleIconStyleRegex = /.dx-icon-([\w]+)::before, .dx-icon-([\w]+)::before/
const tripleIconStyleRegex = /.dx-icon-([\w]+)::before, .dx-icon-([\w]+)::before, .dx-icon-([\w]+)::before/

let icons = [];

for (let id = 0; id < mainSheet.cssRules.length; id++) {
    const rule = mainSheet.cssRules[id];

    if (rule.selectorText && (rule.selectorText.match(singleIconStyleRegex) && !rule.selectorText.includes(' ') || rule.selectorText.match(doubleIconStyleRegex))) {
        const iconChar = `\\${rule.style.content.replace(/["']/g, '').codePointAt(0).toString(16)}`;
        const iconName = rule.selectorText.split('::')[0].split('-')[2];
        icons.push({id, iconName, iconChar});
    }

    if (rule.selectorText && rule.selectorText.match(doubleIconStyleRegex)) {
        const iconChar = `\\${rule.style.content.replace(/["']/g, '').codePointAt(0).toString(16)}`;
        const iconName = rule.selectorText.split('::')[1].split('-')[2];
        icons.push({id, iconName, iconChar});
    }

    if (rule.selectorText && rule.selectorText.match(tripleIconStyleRegex)) {
        const iconChar = `\\${rule.style.content.replace(/["']/g, '').codePointAt(0).toString(16)}`;
        const iconName = rule.selectorText.split('::')[2].split('-')[2];
        icons.push({id, iconName, iconChar});
    }
}

const tabs = ['Fluent', 'Material', 'Generic'];

$('#tabs').dxTabs({
    dataSource: tabs,
    selectedItem: 'Fluent',
    onSelectionChanged(data) {
        for (const theme of tabs) {
            if (data.addedItems[0] === theme) {
                $('i').addClass(`${theme}-icons`);
            } else {
                $('i').removeClass(`${theme}-icons`);
            }
        }
    },
})

async function copyData(text) {
    try {
        await navigator.clipboard.writeText(text);
        DevExpress.ui.notify(`"${text}" copied to clipboard.`);
    } catch (err) {
        DevExpress.ui.notify('Failed to copy text: ', err);
    }
}

$('#cardview-container').dxCardView({
    dataSource: icons,
    columns: [{
        dataField: 'id',
        caption: 'Icon',
    }, {
        dataField: 'iconName',
        caption: 'Name',
    }, {
        dataField: 'iconChar',
        caption: 'Character Code',
    }],
    cardContentTemplate(data) {
        return $('<div class="icon-container">').append(
            $(`<i class='icon dx-icon-${data.card.data.iconName}' style='text-align: center'></i>`),
            $('<div class="icon-name">').dxButton({
                stylingMode: 'text',
                hoverStateEnabled: true,
                activeStateEnabled: false,
                focusStateEnabled: false,
                text: data.card.data.iconName,
                height: 24,
                onClick(e) {
                    copyData(data.card.data.iconName);
                }
            }),
            $('<div class="icon-name">').dxButton({
                stylingMode: 'text',
                hoverStateEnabled: true,
                activeStateEnabled: false,
                focusStateEnabled: false,
                text: data.card.data.iconChar,
                height: 24,
                onClick(e) {
                    copyData(data.card.data.iconChar);
                }
            }),
        )
    },
    cardsPerRow: 'auto',
    searchPanel: {
        visible: true,
    },
    scrolling: {
        enabled: true,
    },
    paging: {
        enabled: false,
        //pageSize: 320,
    },
    pager: {
        visible: false,
    },
    height: '1000px',
    cardMinWidth: 96,
});