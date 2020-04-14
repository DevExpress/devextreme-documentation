---
id: positionConfig.boundaryOffset
type: String | Object
---
---
##### shortDescription
Specifies the offset of the boundaries from the [boundary](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#boundary) element.

---
The offset is specified in pixels. To set this option, use an object with the **x** and **y** fields or a string value that indicates the horizontal and vertical offsets separated by a whitespace character. Positive offsets narrow the boundaries, negative offsets widen the boundaries.

In the following code, the left and right boundaries are narrowed (**x** is 50), but the top and bottom boundaries are widened (**y** is -50).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#popupContainer").dxPopup({
            // ...
            position: {
                // ...
                boundaryOffset: "50 -50"
                // ===== or =====
                boundaryOffset: { x: 50, y: -50 }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-popup ... >
        <dxo-position ...
            boundaryOffset="50 -50">
            <!-- or -->
            <dxo-boundary-offset [x]="50" [y]="-50"></dxo-boundary-offset>
        </dxo-position>
    </dx-popup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPopup ... >
            <DxPosition
                boundary-offset="50 -50">
                <!-- or -->
                <DxBoundaryOffset :x="50" :y="-50" />
            </DxPosition>
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxPopup, {
        DxPosition,
        DxBoundaryOffset
    } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup,
            DxPosition,
            DxBoundaryOffset
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
        BoundaryOffset
    } from 'devextreme-react/popup';

    class App extends React.Component {
        render() {
            return (
                <Popup ... >
                    <Position
                        boundaryOffset="50 -50">
                        {/* or */}
                        <BoundaryOffset x={50} y={-50} />
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
            .BoundaryOffset(50, -50)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Popup() _
        .Position(Sub(p)
            p.BoundaryOffset(50, -50)
        End Sub)
    )

---