$(function() {
    const cities = ['Los Angeles', 'Denver', 'Bentonville', 'Atlanta', 'Reno', 'Beaver', 'Malibu', 'Phoenix', 'San Diego', 'Little Rock', 'Pasadena', 'Boise', 'San Jose', 'Chatsworth', 'San Fernando', 'South Pasadena', 'San Fernando Valley', 'La Canada', 'St. Louis'];

    const ds = (count) => {
        let array = [];

        for (let index = 1; index < count; index++) {
            array.push({
                city: cities[Math.round(Math.random() * 18)],
                orderAmount: Math.random() * 1000,
                orderNumber: index,
                parentId: Math.floor(Math.random() * Math.sqrt(index)),
            })
        }

        return array;
    }

    $("#tree-list").dxTreeList({
        dataSource: ds(10000),
        headerFilter: {
            visible: true,
        },
        keyExpr: 'orderNumber',
        columns: [{
            dataField: 'orderNumber',
            headerFilter: {
                groupInterval: [100, 25],
            },
            alignment: 'left',
        }, 'city', {
            dataField: 'orderAmount',
            format: 'currency',
        }],
        showColumnLines: true,
        height: 500,
    });

    function openHeaderFilterAndExpand(gridSelector, column /* index or dataField */, expandBy /* key or text or true for expandAll */) {
        const grid = $(gridSelector).dxTreeList('instance');

        // Resolve column index
        const colIndex = typeof column === 'number' ? column : grid.columnOption(column, 'index');

        // Click the header-filter icon for this column
        const $button = grid
            .$element()
            .find('.dx-treelist-headers .dx-row')
            .find(`td[aria-colindex="${colIndex + 1}"] .dx-header-filter`);
        
        // opens the header filter popup
        $button.trigger('dxclick');

        // Wait for the TreeView to be rendered in the overlay, then expand
        const tryExpand = () => {
            const tree = $('.dx-popup-content .dx-treeview').dxTreeView('instance');

            if (!tree) {
                setTimeout(tryExpand, 50);
                return;
            }

            setTimeout(() => {
                const nodes = tree.getDataSource().items();

                tree.expandItem(nodes[expandBy]);
            }, 100)
        };

        tryExpand();
    }

    setTimeout(() => {
        openHeaderFilterAndExpand('#tree-list', 'orderNumber', 1)
    }, 500)

    console.log((1 % 3))
});
