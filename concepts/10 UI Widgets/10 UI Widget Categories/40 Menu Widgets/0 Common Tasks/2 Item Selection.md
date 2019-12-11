Menu widgets allow end-users to select items.

Only a single item at a time can be selected within a submenu.

You can pre-select a particular menu item. To do this, set that item's **selected** data source field to *true*.

    <!--JavaScript-->var menuItems = [
        {text: "item1"},
        {text: "item2", selected: true}
    ];
    
To access the currently selected item, use the widget's **selectedItem** option, which just holds the selected item and does not change the selection.    

You can prohibit an end-user from selecting specific items. To do this, set that items' **selected** data source field to *true*.

    <!--JavaScript-->var menuItems = [
        {text: "item1"},
        {text: "item2", selected: true},
        {text: "item3", selectable: false },
    ];

To entirely prohibit an end user from selecting menu items, set the widget's **selectionMode** option to *none*.

    <!--JavaScript-->var menuOptions =  { 
        dataSource: menuItems, 
        selectionMode: none
    }