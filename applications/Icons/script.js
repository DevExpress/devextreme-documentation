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

$('#grid-container').dxCardView({
    dataSource: icons,
    columns: [{
        dataField: 'id',
        caption: 'Icon',
        cellTemplate(container, rowData) {
            return $(`<i class='icon dx-icon-${rowData.data.iconName}'></i>`)
        },
        fieldValueTemplate(field) {
            return $(`<i class='icon dx-icon-${field.field.card.data.iconName}' style='text-align: center'></i>`)
        },
        alignment: 'center',
    }, {
        dataField: 'iconName',
        caption: 'Name',
        alignment: 'center',
    }, {
        dataField: 'iconChar',
        fieldCaptionTemplate(data) {
            return $('<div>').html('Character<br>Code:');
        },
        caption: 'Character Code',
        alignment: 'center',
    }],
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
    cardMinWidth: 240,
})