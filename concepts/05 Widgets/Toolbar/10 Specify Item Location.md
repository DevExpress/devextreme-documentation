To set the location of items on a toolbar, use the [location](/api-reference/_hidden/dxToolbarItem/location.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#location') option. It accepts one of the following values.

- *"center"*  
 Places the item in the center of the toolbar.

- *"before"*  
 Places the item before the central element(s).

- *"after"*  
 Places the item after the central element(s).

Toolbar items with identical **location** preserve the order they have in the data source. For example, items produced by the code below will have the following order: "Add", "Edit", "Products", "Suppliers", "Delete", "About".

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [
                { text: 'Delete', location: 'after' },
                { text: 'About', location: 'after' },
                { text: 'Products', location: 'center' },
                { text: 'Suppliers', location: 'center' },
                { text: 'Add', location: 'before' },
                { text: 'Edit', location: 'before' }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item text="Delete" location="after"></dxi-item>
        <dxi-item text="About" location="after"></dxi-item>
        <dxi-item text="Products" location="center"></dxi-item>
        <dxi-item text="Suppliers" location="center"></dxi-item>
        <dxi-item text="Add" location="before"></dxi-item>
        <dxi-item text="Edit" location="before"></dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule
        ],
        // ...
    })

---

When there is not enough width for all toolbar items, or if certain toolbar items are secondary, they can be rendered as commands on the overflow menu. This menu can be a [Popover](/concepts/05%20Widgets/Popover '/Documentation/Guide/Widgets/Popover/'), an [Action Sheet](/concepts/05%20Widgets/ActionSheet '/Documentation/Guide/Widgets/ActionSheet/') or a Drop-Down Menu, depending on which device the application is running on. To render a toolbar item as a command on the overflow menu, assign *"always"* or *"auto"* to the [locateInMenu](/api-reference/_hidden/dxToolbarItem/locateInMenu.md '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#locateInMenu') option.

---
#####jQuery 

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [
                { text: 'Add', locateInMenu: 'auto' },
                { text: 'Change', locateInMenu: 'always' },
                { text: 'Remove', locateInMenu: 'always' }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item text="Add" locateInMenu="auto"></dxi-item>
        <dxi-item text="Change" locateInMenu="always"></dxi-item>
        <dxi-item text="Remove" locateInMenu="always"></dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule
        ],
        // ...
    })

---

#####See Also#####
- [Toolbar - Specify Item Type](/concepts/05%20Widgets/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/Widgets/Toolbar/#Specify_Item_Type')
- [Toolbar - Customize Item Appearance](/concepts/05%20Widgets/Toolbar/15%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Toolbar/#Customize_Item_Appearance')
- [Toolbar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview)
- [Toolbar API Reference](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/')

[tags]toolbar, location, item location, locate in menu
