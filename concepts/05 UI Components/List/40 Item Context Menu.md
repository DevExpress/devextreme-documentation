If you want to offer the user a set of commands related to a List item, you can do so with the context menu. To specify the commands, use the [menuItems](/api-reference/10%20UI%20Components/dxList/1%20Configuration/menuItems '/Documentation/ApiReference/UI_Components/dxList/Configuration/menuItems/') array. Each object in this array configures a single command.

---
##### jQuery

    <!--JavaScript-->const fruits = [
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
                text: "View Details",
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

##### Angular

    <!--HTML-->
    <dx-list
        [dataSource]="fruits"
        [menuItems]="menuItems">
        <div *dxTemplate="let data of 'item'">
            <b>{{data.fruit}}</b>
        </div>
        <dxi-menu-item
            text="Add to Cart"
            [action]="addToCart">
        </dxi-menu-item>
        <dxi-menu-item
            text="View Details"
            [action]="showDetails">
        </dxi-menu-item>
        <dxi-menu-item
            text="Register a Complaint"
            [action]="complain">
        </dxi-menu-item>
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
        addToCart (e) {
            // ...
            notify(e.itemData.fruit + " are added to cart");
        }
        showDetails (e) {
            // ...
        }
        complain (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList
            :data-source="fruits"
            item-template="list-item">
            <template #list-item="{ data }">
                <b>{{ data.fruit }}</b>
            </template>
            <DxMenuItem
                text="Add to Cart"
                :action="addToCart"
            />
            <DxMenuItem
                text="View Details"
                :action="showDetails"
            />
            <DxMenuItem
                text="Register a Complaint"
                :action="complain"
            />
        </DxList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList, {
        DxMenuItem
    } from 'devextreme-vue/list';
    import notify from 'devextreme/ui/notify';

    const fruits = [
        { fruit: "Apples", count: 10 },
        { fruit: "Oranges", count: 12 },
        { fruit: "Lemons", count: 15 }
    ];

    export default {
        components: {
            DxList,
            DxMenuItem
        },
        data() {
            return {
                fruits
            }
        },
        methods: {
            addToCart (e) {
                // ...
                notify(e.itemData.fruit + " are added to cart");
            },
            showDetails (e) {
                // ...
            },
            complain (e) {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List, {
        MenuItem
    } from 'devextreme-react/list';
    import notify from 'devextreme/ui/notify';

    const fruits = [
        { fruit: "Apples", count: 10 },
        { fruit: "Oranges", count: 12 },
        { fruit: "Lemons", count: 15 }
    ];

    const ListItem = (data) => {
        return (
            <b>{ data.fruit }</b>
        );
    };

    const addToCart = (e) => {
        // ...
        notify(e.itemData.fruit + " are added to cart");
    };
    const showDetails = (e) => {
        // ...
    };
    const complain = (e) => {
        // ...
    };

    export default function App() {
        return (
            <List
                dataSource={fruits}
                itemRender={ListItem}>
                <MenuItem
                    text="Add to Cart"
                    action={addToCart}
                />
                <MenuItem
                    text="View Details"
                    action={showDetails}
                />
                <MenuItem
                    text="Register a Complaint"
                    action={complain}
                />
            </List>
        );
    }

---

The user can access the commands in one of the following ways depending on the value of the [menuMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/menuMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#menuMode') property.

- ***"context"***       
The user right-clicks or performs a long tap on an item to open the context menu with the commands.

- ***"slide"***             
The user swipes an item to access the commands. If the **menuItems** array contains a single command, swiping the item reveals the button executing this command. If there are several commands in the **menuItems** array, swiping the item reveals the *"More"* button that opens a pop-up window with these commands.

<!---->

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            menuMode: "context" // or "slide"
        });
    });

##### Angular

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            menu-mode="context"> <!-- or "slide" -->
            <!-- ... -->
        </DxList>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    export default function App() {
        return (
            <List ...
                menuMode="context"> {/* or "slide" */}
                {/* ... */}
            </List>
        );
    }

---

#####See Also#####
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')

[tags]list, context menu, menuItems, context menu mode, menuMode