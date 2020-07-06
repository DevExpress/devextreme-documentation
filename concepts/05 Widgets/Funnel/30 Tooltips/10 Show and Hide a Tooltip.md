Each funnel item allows you to show its tooltip programmatically by calling the **showTooltip()** method of the [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object. You can access this object [with the API methods](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/25%20Access%20a%20Funnel%20Item%20Using%20the%20API.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Access_a_Funnel_Item_Using_the_API/') or in item event handlers, such as [onItemClick](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onItemClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick'), [onHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onHoverChanged'), etc. The latter is demonstrated in the following code. To hide the tooltip, call the **hideTooltip()** method of the widget's instance.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            // Shows the tooltip only when a user clicks a funnel item
            onItemClick: function (e) {
                e.item.showTooltip();
            },
            // Hides the tooltip once the user moves the pointer away from the funnel item
            onHoverChanged: function (e) {
                if (!e.item.isHovered()) {
                    e.component.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ...
        (onItemClick)="onItemClick($event)"
        (onHoverChanged)="onHoverChanged($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Shows the tooltip only when a user clicks a funnel item
        onItemClick (e) {
            e.item.showTooltip();
        },
        // Hides the tooltip once the user moves the pointer away from the funnel item
        onHoverChanged (e) {
            if (!e.item.isHovered()) {
                e.component.hideTooltip();
            }
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
        <DxFunnel
            @item-click="onItemClick"
            @hover-changed="onHoverChanged"
        />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            // Shows the tooltip only when a user clicks a funnel item
            onItemClick (e) {
                e.item.showTooltip();
            },
            // Hides the tooltip once the user moves the pointer away from the funnel item
            onHoverChanged (e) {
                if (!e.item.isHovered()) {
                    e.component.hideTooltip();
                }
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
                <Funnel
                    onItemClick={this.onItemClick}
                    onHoverChanged={this.onHoverChanged}
                />
            );
        }
        // Shows the tooltip only when a user clicks a funnel item
        onItemClick (e) {
            e.item.showTooltip();
        },
        // Hides the tooltip once the user moves the pointer away from the funnel item
        onHoverChanged (e) {
            if (!e.item.isHovered()) {
                e.component.hideTooltip();
            }
        }
    }

    export default App;

---

#####See Also#####
- [Funnel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart)