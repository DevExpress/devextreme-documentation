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
                $('.dx-cardview-content.dx-cardview-content-grid .dx-button').addClass(`${theme}-icons`);
            } else {
                $('i').removeClass(`${theme}-icons`);
                $('.dx-cardview-content.dx-cardview-content-grid .dx-button').removeClass(`${theme}-icons`);
            }
        }
    },
})

function copyData(text) {
    if (!navigator.clipboard) {
        DevExpress.ui.notify({ contentTemplate() {
                return $('<div>').css({display: 'flex', 'align-items': 'center'}).append(
                    $('<i>').addClass('dx-icon-errorcircle'),
                    $('<div>').text(`Failed to copy icon.`),
                )
            }, displayTime: 1000, minWidth: 260, maxWidth: 260 }, { position: "bottom center", direction: "up-push" });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            DevExpress.ui.notify({ contentTemplate() {
                return $('<div>').css({display: 'flex', 'align-items': 'center'}).append(
                    $('<i>').addClass('dx-icon-info'),
                    $('<div>').text(`"${text}" copied to clipboard.`),
                )
            }, displayTime: 1000, minWidth: 260, maxWidth: 260 }, { position: "bottom center", direction: "up-push" });
        }).catch((e) => {
            DevExpress.ui.notify({ contentTemplate() {
                return $('<div>').css({display: 'flex', 'align-items': 'center'}).append(
                    $('<i>').addClass('dx-icon-errorcircle'),
                    $('<div>').text(`Failed to copy icon: ${e}`),
                )
            }, displayTime: 1000, minWidth: 260, maxWidth: 260 }, { position: "bottom center", direction: "up-push" });
        })
    }
}

$('#cardview-container').dxCardView({
    dataSource: icons,
    columns: [{
        dataField: 'iconName',
        caption: 'Name',
        sortOrder: 'asc',
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
            $('<div class="icon-char">').dxButton({
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
    },
    pager: {
        visible: false,
    },
    height: 656,
    cardMinWidth: 120,
});