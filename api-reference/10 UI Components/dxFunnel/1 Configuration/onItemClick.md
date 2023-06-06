---
id: dxFunnel.Options.onItemClick
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [funnel item](/concepts/05%20UI%20Components/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/UI_Components/Funnel/Funnel_Items/Overview/') is clicked or tapped.

##### param(e): ItemClickEvent
Information about the event.

---
This function is often used to implement item selection as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#funnelContainer").dxFunnel({
            // ...
            onItemClick: function (e) {
                e.item.select(!e.item.isSelected())
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ...
        (onItemClick)="selectItem($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectItem (e) {
            e.item.select(!e.item.isSelected())
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
        <DxFunnel @item-click="selectItem" />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        },
        methods: {
            selectItem (e) {
                e.item.select(!e.item.isSelected())
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
                <Funnel onItemClick={this.selectItem} />
            );
        }

        selectItem (e) {
            e.item.select(!e.item.isSelected())
        }
    }

    export default App;

---

#####See Also#####
- [selectionMode](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#selectionMode')
- [onSelectionChanged](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#onSelectionChanged')
