With the ever-growing variety of platforms, today's web sites and applications cannot stay competitive without being adaptive. Supporting this modern standard, the Funnel UI component possesses an adaptive layout. This enables the Funnel to hide its accessory elements if the container is not large enough to fit them. To configure the adaptive layout, use the [adaptiveLayout](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/adaptiveLayout '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/adaptiveLayout/') object. Set its **height** and **width** fields to specify the minimum container size at which the layout retains all its elements.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            adaptiveLayout: {
                height: 300,
                width: 400
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-adaptive-layout [height]="300" [width]="400"></dxo-adaptive-layout>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxFunnel ... >
            <DxAdaptiveLayout 
                :height="300"
                :width="400"
            />
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, {
        DxAdaptiveLayout
    } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxAdaptiveLayout
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, { AdaptiveLayout } from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel ... >
                    <AdaptiveLayout height={300} width={400} />
                </Funnel>
            );
        }
    }

    export default App;

---

#include btn-open-codepen with {
    href: "https://codepen.io/vladaskorokhodova/pen/ExrewvB"
}

[note]

The layout does not automatically adapt to changes made in the UI component's container at runtime. Therefore, if you enable a user to resize the container, call the [render()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/render().md '/Documentation/ApiReference/UI_Components/dxFunnel/Methods/#render') method after each resizing to render the Funnel in the new size.

---
##### jQuery

    <!--JavaScript-->$("#funnelContainer").dxFunnel("render");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxFunnelModule, DxFunnelComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent, { static: false }) funnel: DxFunnelComponent;
        // Prior to Angular 8
        // @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        renderFunnel () {
            this.funnel.instance.render();
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
        <DxFunnel ref="funnel" />
    </template>

    <script>
    import DxFunnel  from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            renderFunnel () {
                this.$refs.funnel.instance.render();
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
            return this.funnelRef.current.instance();
        }
        renderFunnel () {
            this.funnel.render();
        }
    }

    export default App;

---

[/note]

#####See Also#####
- [Funnel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart)
