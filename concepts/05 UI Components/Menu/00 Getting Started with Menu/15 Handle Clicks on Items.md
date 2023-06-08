To access the clicked item, use the [onItemClick](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#onItemClick') event handler function. The following code displays the clicked item's name in the console:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const menu = $("#menu").dxMenu({
            // ...
            onItemClick: function(e) {
                if (e.itemData.text) {
                    console.log(e.itemData.text + ' has been clicked!');
                }
                else if (e.itemData.icon) {
                    console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
                }
            }
        }).dxMenu('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <div id="container">
        <dx-menu
            (onItemClick)="onItemClick($event)"
        >
            <!-- ... -->    
        </dx-menu>
    </div>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })

    export class AppComponent {
        onItemClick(e: any) {
            if (e.itemData.text) {
                console.log(e.itemData.text + ' has been clicked!');
            }
            else if (e.itemData.icon) {
                console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="container">
            <dxMenu
                @item-click="onItemClick"
            >
                <!-- ... -->
            </dxMenu>
        </div>
    </template>

    <script>
        // ...

        export default {
            components: {
                DxMenu,
                DxItem
            },
            data() {
                return {
                    
                };
            },
            methods: {    
                onItemClick(e) {
                    if (e.itemData.text) {
                        console.log(e.itemData.text + ' has been clicked!');
                    }
                    else if (e.itemData.icon) {
                        console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
                    }
                }
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    const onItemClick = (e) => {
        if (e.itemData.text) {
            console.log(e.itemData.text + ' has been clicked!');
        }
        else if (e.itemData.icon) {
            console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
        }
    }

    function App() {
        return (
            <div>
                <div id="container">
                    <Menu
                        onItemClick={onItemClick}
                    >
                        <!-- ... -->
                    </Menu>
                </div>
            </div>
        );
    }

    export default App;

---