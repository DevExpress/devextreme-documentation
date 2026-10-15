Call the [getAllItems()](/api-reference/10%20UI%20Components/dxFunnel/3%20Methods/getAllItems().md '/Documentation/ApiReference/UI_Components/dxFunnel/Methods/#getAllItems') method to access funnel items. It returns a collection of objects whose fields and methods are described in the [Item](/api-reference/10%20UI%20Components/dxFunnel/6%20Item '/Documentation/ApiReference/UI_Components/dxFunnel/Item/') section.

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

    <!-- tab: App.tsx -->
    import React, { useCallback, useRef } from 'react';
    import Funnel, { type FunnelRef } from 'devextreme-react/funnel';

    function App() {
        const funnelRef = useRef<FunnelRef>(null);

        const getAllItems = useCallback(() => {
            const funnel = funnelRef.current?.instance();
            return funnel?.getAllItems();
        }, []);

        return (
            <Funnel ref={funnelRef} />
        );
    }

    export default App;

---

You can also access a funnel item in the event handlers. For example, the [onItemClick](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#onItemClick') event handler gets the clicked item in the argument.

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

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';
    import Funnel, { type FunnelTypes } from 'devextreme-react/funnel';

    function App() {
        const onItemClick = useCallback((e: FunnelTypes.ItemClickEvent) => {
            const item = e.item;
            // ...
        }, []);

        return (
            <Funnel onItemClick={onItemClick} />
        );
    }

    export default App;

---

#####See Also#####
#include common-link-callmethods