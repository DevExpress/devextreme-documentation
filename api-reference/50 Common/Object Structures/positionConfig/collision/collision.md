---
id: positionConfig.collision
acceptValues: 'fit' | 'fit flip' | 'fit flipfit' | 'fit none' | 'flip' | 'flip fit' | 'flip none' | 'flipfit' | 'flipfit fit' | 'flipfit none' | 'none' | 'none fit' | 'none flip' | 'none flipfit'
type: String | Object
---
---
##### shortDescription
Specifies how to resolve collisions - when the overlay element exceeds the [boundary](/api-reference/50%20Common/Object%20Structures/positionConfig/boundary.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#boundary') element.

---
You can use the following collision resolution algorithms:

- *"flip"*      
Move the overlay element to the opposite side of the [target](/api-reference/50%20Common/Object%20Structures/positionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of') if that side has more space.

- *"fit"*       
Move the overlay element to the inside of the [boundary](/api-reference/50%20Common/Object%20Structures/positionConfig/boundary.md '/Documentation/ApiReference/Common/Object_Structures/positionConfig/#boundary') element.

- *"flipfit"*       
First apply *"flip"*, then *"fit"*.

- *"none"*      
Ignore the collision.

To set the **collision** option, use an object with the **x** and **y** fields. These fields specify how to resolve horizontal and vertical collisions, respectively. Alternatively, you can use a string shortcut from the accepted values list.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#popupContainer").dxPopup({
            // ...
            position: {
                // ...
                collision: "flip none"
                // ===== or =====
                collision: { x: "flip", y: "none" }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-popup ... >
        <dxo-position ...
            collision="flip none">
            <!-- or -->
            <dxo-collision x="flip" y="none"></dxo-collision>
        </dxo-position>
    </dx-popup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPopup ... >
            <DxPosition
                collision="flip none">
                <!-- or -->
                <DxCollision x="flip" y="none" />
            </DxPosition>
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxPopup, {
        DxPosition,
        DxCollision
    } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup,
            DxPosition,
            DxCollision
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
        Collision
    } from 'devextreme-react/popup';

    class App extends React.Component {
        render() {
            return (
                <Popup ... >
                    <Position
                        collision="flip none">
                        {/* or */}
                        <Collision x="flip" y="none" />
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
            .Collision(PositionResolveCollision.Flip, PositionResolveCollision.None)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Popup() _
        .Position(Sub(p)
            p.Collision(PositionResolveCollision.Flip, PositionResolveCollision.None)
        End Sub)
    )

---
