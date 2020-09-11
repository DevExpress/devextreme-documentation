---
id: positionConfig.at
acceptValues: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top'
type: String | Object
---
---
##### shortDescription
Specifies the [target element](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of')'s side or corner where the overlay element should be positioned.

---

To set this option, use an object with the **x** and **y** fields. These fields specify the target element's horizontal and vertical sides, respectively. Alternatively, you can use a string shortcut from the accepted values list.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#popupContainer").dxPopup({
            // ...
            position: {
                // ...
                at: "left top"
                // ===== or =====
                at: { x: "left", y: "top" }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-popup ... >
        <dxo-position ...
            at="left top">
            <!-- or -->
            <dxo-at x="left" y="top"></dxo-at>
        </dxo-position>
    </dx-popup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPopup ... >
            <DxPosition
                at="left top">
                <!-- or -->
                <DxAt x="left" y="top" />
            </DxPosition>
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxPopup, {
        DxPosition,
        DxAt
    } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup,
            DxPosition,
            DxAt
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Popup, {
        Position,
        At
    } from 'devextreme-react/popup';

    class App extends React.Component {
        render() {
            return (
                <Popup ... >
                    <Position
                        at="left top">
                        {/* or */}
                        <At x="left" y="top" />
                    </Position>
                </Popup>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popup()
        .Position(p => p
            .At(HorizontalAlignment.Left, VerticalAlignment.Top)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Popup() _
        .Position(Sub(p)
            p.At(HorizontalAlignment.Left, VerticalAlignment.Top)
        End Sub)
    )

---
    
