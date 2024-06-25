Call the [getAllNodes()](/api-reference/10%20UI%20Components/dxSankey/3%20Methods/getAllNodes().md '/Documentation/ApiReference/UI_Components/dxSankey/Methods/#getAllNodes') method to access all nodes. It returns a collection of [Node](/api-reference/10%20UI%20Components/dxSankey/6%20Node '/Documentation/ApiReference/UI_Components/dxSankey/Node/') objects. Similarly, you can call the [getAllLinks()](/api-reference/10%20UI%20Components/dxSankey/3%20Methods/getAllLinks().md '/Documentation/ApiReference/UI_Components/dxSankey/Methods/#getAllLinks') method to get a collection of [Link](/api-reference/10%20UI%20Components/dxSankey/7%20Link '/Documentation/ApiReference/UI_Components/dxSankey/Link/') objects:

---
##### jQuery

    <!--JavaScript-->
    var sankey = $("#sankeyContainer").dxSankey("instance");
    var sankeyNodes = sankey.getAllNodes();
    var sankeyLinks = sankey.getAllLinks();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxSankeyModule, DxSankeyComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxSankeyComponent, { static: false }) sankey: DxSankeyComponent;
        // Prior to Angular 8
        // @ViewChild(DxSankeyComponent) sankey: DxSankeyComponent;
        sankeyNodes: Array<any>;
        sankeyLinks: Array<any>;
        getSankeyNodes() {
            this.sankeyNodes = this.sankey.instance.getAllNodes();
        }
        getSankeyLinks() {
            this.sankeyLinks = this.sankey.instance.getAllLinks();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey ref="sankey" />
    </template>

    <script>
    import DxSankey from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey
        },
        methods: {
            getAllNodes () {
                return this.$refs.sankey.instance.getAllNodes();
            },
            getAllLinks () {
                return this.$refs.sankey.instance.getAllLinks();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey from 'devextreme-react/sankey';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.sankeyRef = React.createRef();
        }
        render() {
            return (
                <Sankey ref={this.sankeyRef} />
            )
        }
        get sankey() {
            return this.sankeyRef.current.instance();
        }
        getAllNodes() {
            return this.sankey.getAllNodes();
        }
        getAllLinks() {
            return this.sankey.getAllLinks();
        }
    }

    export default App;

---

You can also access a node or link in the event handlers. For example, the [onNodeClick](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/onNodeClick.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/#onNodeClick') event handler gets the clicked node in the argument:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            onNodeClick: function(e) {
                var node = e.target;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ...
        (onNodeClick)="sankey_onNodeClick($event)">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        sankey_onNodeClick(e) {
            let node = e.target;
            // ...
        };
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey @node-click="onNodeClick" />
    </template>

    <script>
    import DxSankey from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey
        },
        methods: {
            onNodeClick (e) {
                let node = e.target;
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey from 'devextreme-react/sankey';

    class App extends React.Component {
        render() {
            return (
                <Sankey onNodeClick={this.onNodeClick} />
            )
        }
        onNodeClick(e) {
            let node = e.target;
            // ...
        }
    }

    export default App;

---

#####See Also#####
#include common-link-callmethods