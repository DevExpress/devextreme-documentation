$(function () {
    const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
    const dataSource = fruits;
    let list;
    $("#drop-down-box").dxDropDownBox({
        opened: true,
        acceptCustomValue: true,
        openOnFieldClick: false,
        dataSource,
        label: "Fruits",
        labelMode: "floating",
        contentTemplate: function(e) {
            const $list = $("<div>").dxList({
                dataSource,
                selectionMode: "single",
                onSelectionChanged: function(arg) {
                    e.component.option("value", arg.addedItems[0]);
                    e.component.close();
                },
                allowItemDeleting: true,
                onItemDeleting: function(e) {
                    if (dataSource.length === 1) {
                        e.cancel = true;
                    }
                }
            });
            list = $list.dxList('instance');
            return $list;
        },
        onEnterKey: function(e) {
            dataSource.push(e.component.option("value"));
            e.component.option("value", "");
            list.reload();
        }
    });
});