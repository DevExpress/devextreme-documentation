You can change a funnel item's hover state by passing **true** or **false** to the item's [hover(state)](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item/3%20Methods/hover(state).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#hoverstate') method. To check whether the funnel item is currently hovered over, call its [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isHovered') method.

---
##### jQuery

    <!--JavaScript-->
    var toggleItemHoverState = function (item) {
        item.hover(!item.isHovered());
    }

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        toggleItemHoverState (item) {
            item.hover(!item.isHovered());
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
- [Access a Funnel Item Using the API](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/25%20Access%20a%20Funnel%20Item%20Using%20the%20API.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Access_a_Funnel_Item_Using_the_API/')