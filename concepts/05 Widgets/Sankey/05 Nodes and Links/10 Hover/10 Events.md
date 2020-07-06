The **Sankey** widget raises individual events for nodes and links when their hover state changes. You can handle them with functions. If the handling functions are not going to be changed at runtime, assign them to the [onNodeHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/onNodeHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onNodeHoverChanged') and [onLinkHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/onLinkHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onLinkHoverChanged') options when you configure the widget. To check whether the sankey element is being hovered over, call its **isHovered()** method.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            onNodeHoverChanged: function(e) {
                if(e.target.isHovered()) {
                    // Commands to execute when the pointer enters a node
                } else {
                    // Commands to execute when the pointer leaves a node
                }
            },
            onLinkHoverChanged: function(e) {
                if(e.target.isHovered()) {
                    // Commands to execute when the pointer enters a link
                } else {
                    // Commands to execute when the pointer leaves a link
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ...
        (onNodeHoverChanged)="sankey_onNodeHoverChanged($event)"
        (onLinkHoverChanged)="sankey_onLinkHoverChanged($event)">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        sankey_onNodeHoverChanged(e) {
            if(e.target.isHovered()) {
                // Commands to execute when the pointer enters a node
            } else {
                // Commands to execute when the pointer leaves a node
            }
        }
        sankey_onLinkHoverChanged(e) {
            if(e.target.isHovered()) {
                // Commands to execute when the pointer enters a link
            } else {
                // Commands to execute when the pointer leaves a link
            }
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
        <DxSankey
            @node-hover-changed="onNodeHoverChanged"
            @link-hover-changed="onLinkHoverChanged"
        />
    </template>

    <script>
    import DxSankey from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey
        },
        methods: {
            onNodeHoverChanged (e) {
                if(e.target.isHovered()) {
                    // Commands to execute when the pointer enters a node
                } else {
                    // Commands to execute when the pointer leaves a node
                }
            },
            onLinkHoverChanged (e) {
                if(e.target.isHovered()) {
                    // Commands to execute when the pointer enters a link
                } else {
                    // Commands to execute when the pointer leaves a link
                }
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
                <Sankey
                    onNodeHoverChanged={this.onNodeHoverChanged}
                    onLinkHoverChanged={this.onLinkHoverChanged}
                />
            );
        }
        onNodeHoverChanged (e) {
            if(e.target.isHovered()) {
                // Commands to execute when the pointer enters a node
            } else {
                // Commands to execute when the pointer leaves a node
            }
        },
        onLinkHoverChanged (e) {
            if(e.target.isHovered()) {
                // Commands to execute when the pointer enters a link
            } else {
                // Commands to execute when the pointer leaves a link
            }
        }
    }

    export default App;

---

If you are going to change the event handlers at runtime or if you need several handlers for a single event, subscribe to the hover-related events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var nodeHoverChangedHandler1 = function(e) {
        // First handler of the "nodeHoverChanged" event
    };

    var nodeHoverChangedHandler2 = function(e) {
        // Second handler of the "nodeHoverChanged" event
    };

    $("#sankeyContainer").dxSankey("instance")
        .on("nodeHoverChanged", nodeHoverChangedHandler1)
        .on("nodeHoverChanged", nodeHoverChangedHandler2);

#####See Also#####
#include common-link-handleevents
