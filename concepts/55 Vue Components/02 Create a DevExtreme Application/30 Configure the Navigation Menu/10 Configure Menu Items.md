Edit the `src\app-navigation.js` file to configure navigation menu items. Each item configuration can have the following fields:

- **text** - the item's text

- **icon** - the item's [icon](/concepts/60%20Themes%20and%20Styles/30%20Icons/00%20Icons.md '/Documentation/Guide/Themes_and_Styles/Icons/')

- **path** - a navigation path associated with the item

- **items** - child items

[note] A menu item should either navigate to a page OR include subitems. For that reason, do not specify both **path** and **items** for the same menu item.

    <!-- tab: JavaScript -->
    {
        text: 'Category',
        icon: 'folder',
        items: [{
            text: 'About',
            path: '/about'
        }]
    }