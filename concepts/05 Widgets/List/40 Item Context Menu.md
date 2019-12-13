If you want to offer the user a set of commands related to a **List** item, you can do so with the context menu. To specify the commands, use the [menuItems](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/menuItems '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/menuItems/') array. Each object in this array configures a single command.

---
#####jQuery

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        { fruit: "Oranges", count: 12 },
        { fruit: "Lemons", count: 15 }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits,
            itemTemplate: function(data, _, element) {
                element.append( $("<b>").text(data.fruit) );
            },
            menuItems: [{
                text: "Add to Cart",
                action: function (e) {
                    // ...
                    DevExpress.ui.notify(e.itemData.fruit + " are added to cart");
                }
            }, {
                text: "See Details",
                action: function (e) {
                    // ...
                }
            }, {
                text: "Register a Complaint",
                action: function (e) {
                    // ...
                }
            }]
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="fruits"
        [menuItems]="menuItems">
        <div *dxTemplate="let data of 'item'">
            <b>{{data.fruit}}</b>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import notify from "devextreme/ui/notify";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: "Apples", count: 10 },
            { fruit: "Oranges", count: 12 },
            { fruit: "Lemons", count: 15 }
        ];
        menuItems = [{
            text: "Add to Cart",
            action: function (e) {
                // ...
                notify(e.itemData.fruit + " are added to cart");
            }
        }, {
            text: "See Details",
            action: function (e) {
                // ...
            }
        }, {
            text: "Register a Complaint",
            action: function (e) {
                // ...
            }
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

The user can access the commands in one of the following ways depending on the value of the [menuMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/menuMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuMode') option.

- ***"context"***       
The user right-clicks or performs a long tap on an item to open the context menu with the commands.

- ***"slide"***             
The user swipes an item to access the commands. If the **menuItems** array contains a single command, swiping the item reveals the button executing this command. If there are several commands in the **menuItems** array, swiping the item reveals the *"More"* button that opens a pop-up window with these commands.

<!---->

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            menuMode: "context" // or "slide"
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        menuMode="context"> <!-- or "slide" -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

#####See Also#####
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, context menu, menuItems, context menu mode, menuMode