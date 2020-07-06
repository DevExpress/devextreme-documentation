Call the [getAllItems()](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/3%20Methods/getAllItems().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#getAllItems') method to access funnel items. It returns a collection of objects whose fields and methods are described in the [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') section.

---
##### jQuery

    <!--JavaScript-->
    var funnelItems = $("#funnelContainer").dxFunnel("getAllItems");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxFunnelModule, DxFunnelComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent, { static: false }) funnel: DxFunnelComponent;
        // Prior to Angular 8
        // @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        funnelItems: any = [];
        getFunnelItems() {
            this.funnelItems = this.funnel.instance.getAllItems();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel ref="funnel" />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            getAllItems () {
                return this.$refs.funnel.instance.getAllItems();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel from 'devextreme-react/funnel';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.funnelRef = React.createRef();
        }
        render() {
            return (
                <Funnel ref={this.funnelRef} />
            );
        }
        get funnel() {
            return this.funnelRef.current.instance;
        }
        getAllItems () {
            return this.funnel.getAllItems();
        }
    }

    export default App;

---

You can also access a funnel item in the event handlers. For example, the [onItemClick](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onItemClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick') event handler gets the clicked item in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            onItemClick: function (e) {
                var item = e.item;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel
        (onItemClick)="onItemClick($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemClick (e) {
            let item = e.item;
            // ...
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel @item-click="onItemClick" />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            onItemClick () {
                let item = e.item;
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel onItemClick={this.onItemClick} />
            );
        }
        onItemClick () {
            let item = e.item;
            // ...
        }
    }

    export default App;

---

#####See Also#####
#include common-link-callmethods