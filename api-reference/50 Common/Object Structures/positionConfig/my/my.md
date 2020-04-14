---
id: positionConfig.my
acceptValues: 'bottom' | 'center' | 'left' | 'left bottom' | 'left top' | 'right' | 'right bottom' | 'right top' | 'top'
type: String | Object
---
---
##### shortDescription
Specifies a side or corner of the overlay element that should be aligned with the [target element](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of).

---

To set this option, use an object with the **x** and **y** fields or one of the string shortcuts listed in the accepted values.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#popupContainer").dxPopup({
            // ...
            position: {
                // ...
                my: "left top"
                // ===== or =====
                my: { x: "left", y: "top" }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-popup ... >
        <dxo-position ...
            my="left top">
            <!-- or -->
            <dxo-my x="left" y="top"></dxo-my>
        </dxo-position>
    </dx-popup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPopup ... >
            <DxPosition
                my="left top">
                <!-- or -->
                <DxMy x="left" y="top" />
            </DxPosition>
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxPopup, {
        DxPosition,
        DxMy
    } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup,
            DxPosition,
            DxMy
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
        My
    } from 'devextreme-react/popup';

    class App extends React.Component {
        render() {
            return (
                <Popup ... >
                    <Position
                        my="left top">
                        {/* or */}
                        <My x="left" y="top" />
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
            .My(HorizontalAlignment.Left, VerticalAlignment.Top)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Popup() _
        .Position(Sub(p)
            p.My(HorizontalAlignment.Left, VerticalAlignment.Top)
        End Sub)
    )

---
    