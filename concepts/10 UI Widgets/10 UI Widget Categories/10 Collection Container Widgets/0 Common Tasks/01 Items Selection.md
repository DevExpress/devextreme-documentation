The collection widgets support the following options, which allow you to select an item or items.

- **selectedItem**  
 Gets or sets the selected item object.

        <!--JavaScript-->
        var navBarItems = [
            { text: "user", icon: "user" },
            { text: "find", icon: "find" },
            { text: "favorites", icon: "favorites" },
            { text: "about", icon: "info" },
            { text: "home", icon: "home" },
            { text: "URI", icon: "tips" }
        ];
        var navBarOptions = {
            dataSource: navBarItems,
            selectedItem: navBarItems[3],
            maxIndex: 5
        };

- **selectedIndex**  
 Gets or sets the index of the currently selected widget item.

        <!--JavaScript-->
        var navBarOptions = {
            dataSource: [
                { text: "user", icon: "user" },
                { text: "find", icon: "find" },
                { text: "favorites", icon: "favorites" },
                { text: "about", icon: "info" },
                { text: "home", icon: "home" },
                { text: "URI", icon: "tips" }
            ],
            selectedIndex: 2,
            maxIndex: 5
        };

- **selectedItems**  
 Gets or sets an array of currently selected item objects. This option makes sense if the widget supports multiple selection.

        <!--JavaScript-->
        var navBarItems = [
            { text: "user", icon: "user" },
            { text: "find", icon: "find" },
            { text: "favorites", icon: "favorites" },
            { text: "about", icon: "info" },
            { text: "home", icon: "home" },
            { text: "URI", icon: "tips" }
        ];

        var navBarOptions = {
            dataSource: navBarItems,
            selectionMode: 'multiple',
            selectedItems: [ navBarItems[3],navBarItems[4] ],
            maxIndex: 5
        };