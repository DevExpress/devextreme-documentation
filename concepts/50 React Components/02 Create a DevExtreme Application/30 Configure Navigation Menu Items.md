Edit the `src\app-navigation.js` file to configure navigation menu items. Each item configuration can have the following fields:

- **text** - the item's text

- **icon** - the item's icon

- **path** - a navigation path associated with the item

- **items** - child items

<!---->

    <!-- tab: JavaScript -->
    {
        text: 'Category',
        icon: 'folder',
        items: [{
            text: 'About',
            path: '/about'
        }]
    }