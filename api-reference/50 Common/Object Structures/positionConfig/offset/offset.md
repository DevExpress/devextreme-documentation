---
id: positionConfig.offset
type: String | Object
---
---
##### shortDescription
Specifies the overlay element's offset from a specified position.

---
The offset is specified in pixels. To set this property, use an object with the **x** and **y** fields. These fields specify horizontal and vertical offsets, respectively. Alternatively, you can use a string value that indicates the offsets separated by a whitespace character. A positive offset shifts the element to the right or down; a negative offset shifts it to the left or up.

In the following code, the overlay element is shifted 50 pixels to the right and 25 pixels up.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#popupContainer").dxPopup({
            // ...
            position: {
                // ...
                offset: "50 -25"
                // ===== or =====
                offset: { x: 50, y: -25 }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-popup ... >
        <dxo-position ...
            offset="50 -25">
            <!-- or -->
            <dxo-offset [x]="50" [y]="-25"></dxo-at>
        </dxo-position>
    </dx-popup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPopup ... >
            <DxPosition
                offset="50 -25">
                <!-- or -->
                <DxOffset :x="50" :y="-25" />
            </DxPosition>
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxPopup, {
        DxPosition,
        DxOffset
    } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup,
            DxPosition,
            DxOffset
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Popup, {
        Position,
        Offset
    } from 'devextreme-react/popup';

    class App extends React.Component {
        render() {
            return (
                <Popup ... >
                    <Position
                        offset="50 -25">
                        {/* or */}
                        <Offset x={50} y={-25} />
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
            .Offset(50, -25)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Popup() _
        .Position(Sub(p)
            p.Offset(50, -25)
        End Sub)
    )

---
