---
id: positionConfig.collision
acceptValues: 'fit' | 'fit flip' | 'fit flipfit' | 'fit none' | 'flip' | 'flip fit' | 'flip none' | 'flipfit' | 'flipfit fit' | 'flipfit none' | 'none' | 'none fit' | 'none flip' | 'none flipfit'
type: String | Object
---
---
##### shortDescription
Specifies how to resolve collisions between the overlay and the [boundary](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#boundary) elements.

---
Collisions occur whenever the specified position causes the overlay element to violate the boundaries.

You can use the following collision resolution algorithms:

- *"flip"*      
Move the overlay element to the opposite side of the [target](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of) if there is more available space there.

- *"fit"*       
Move the overlay element to the inside of the [boundary](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#boundary) element.

- *"flipfit"*       
Apply first *"flip"*, then *"fit"*

- *"none"*      
Ignore the collision.

To set the **collision** option, use an object with the **x** and **y** fields. **x** specifies how to resolve collisions that occur in the horizontal direction, and **y** specifies the same in the vertical direction. Alternatively, you can use one of the string shortcuts listed in the accepted values.

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