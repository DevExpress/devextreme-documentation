To change a node or link's hover state, pass **true** or **false** to their [hover(state)](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/6%20Node/3%20Methods/hover(state).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/Methods/#hoverstate') method. You can call the [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/6%20Node/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/Methods/#isHovered') method to check the current state.

---
##### jQuery

    <!--JavaScript-->
    var toggleItemHoverState = function(item) {
        item.hover(!item.isHovered());
    }

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        toggleItemHoverState(item) {
            item.hover(!item.isHovered());
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
    
    <script>
    export default {
        methods: {
            toggleItemHoverState (item) {
                item.hover(!item.isHovered());
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    class App extends React.Component {
        toggleItemHoverState (item) {
            item.hover(!item.isHovered());
        }
    }

    export default App;

---

#####See Also#####
- [Access a Node or Link Using the API](/concepts/05%20Widgets/Sankey/05%20Nodes%20and%20Links/25%20Access%20a%20Node%20or%20Link%20Using%20the%20API.md '/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Access_a_Node_or_Link_Using_the_API/')
