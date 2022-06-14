Use the [onItemClick](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#onItemClick) function to process clicks on tabs.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        function showMessage(id) {
            DevExpress.ui.notify(
                {
                    message: `Tab ${id} has been clicked!`,
                    width: 250
                },
                'info',
                500
            );
        };
        
        $("#tabs").dxTabs({
            onItemClick(e) {
                showMessage(e.itemIndex + 1);
            }
        });

    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tabs
        (onItemClick)="onItemClick($event)"
    >
        <!-- ... -->
    </dx-tabs>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onItemClick(e: any) {
            showMessage(e.itemIndex + 1);
        }
    }

    function showMessage(id: number) {
        notify(
            {
                message: `Tab ${id} has been clicked!`,
                width: 250
            },
            'info',
            500
        );
    };

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dxTabs
            @item-click="onItemClick"
        >
            <!-- ... -->
        </dxTabs>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxTabs, { DxItem } from 'devextreme-vue/tabs';
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxTabs
            DxItem
        },
        data() {
            return {

            }
        },
        methods: {    
            showMessage(id) {
                notify(
                    {
                        message: `Tab ${id} has been clicked!`,
                        width: 250
                    },
                    'info',
                    500
                );
            },
            onItemClick(e) {
                this.showMessage(e.itemIndex + 1);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Tabs, { Item } from 'devextreme-react/tabs';
    import notify from 'devextreme/ui/notify';

    import 'devextreme/dist/css/dx.light.css';

    const showMessage = (id) => {
        notify(
            {
                message: `Tab ${id} has been clicked!`,
                width: 250
            },
            'info',
            500
        );
    }

    const onItemClick = (e) => {
        showMessage(e.itemIndex + 1);
    }

    function App() {
        return (
            <Tabs
                onItemClick={onItemClick}
            >
                <!-- ... -->
            </Tabs>
        );
    }

    export default App;

---
