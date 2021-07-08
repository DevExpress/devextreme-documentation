---
id: PositionConfig
type: Object
---
---
##### shortDescription
Configures the position of an overlay element.

---
Assign this object to the **position** property of an overlay UI component ([Popup](/api-reference/10%20UI%20Components/dxPopup '/Documentation/ApiReference/UI_Components/dxPopup/'), [Popover](/api-reference/10%20UI%20Components/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/'), [Tooltip](/api-reference/10%20UI%20Components/dxTooltip '/Documentation/ApiReference/UI_Components/dxTooltip/'), etc.).

To position an element, specify the [my](/api-reference/50%20Common/Object%20Structures/PositionConfig/my '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/my/'), [at](/api-reference/50%20Common/Object%20Structures/PositionConfig/at '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/at/'), and [of](/api-reference/50%20Common/Object%20Structures/PositionConfig/of.md '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#of') properties. In the following code, the Popup UI component's left side is aligned with the target's right side. This configuration reads as follows: "place **my** *left* side **at** the *right* side of the *#target* element."

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#popupContainer").dxPopup({
            // ...
            position: {
                my: "left",
                at: "right",
                of: "#target"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-popup ... >
        <dxo-position
            my="left"
            at="right"
            of="#target">
        </dxo-position>
    </dx-popup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPopup ... >
            <DxPosition
                my="left"
                at="right"
                of="#target"
            />
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxPopup, {
        DxPosition
    } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup,
            DxPosition
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Popup, {
        Position
    } from 'devextreme-react/popup';

    class App extends React.Component {
        render() {
            return (
                <Popup ... >
                    <Position
                        my="left"
                        at="right"
                        of="#target"
                    />
                </Popup>
            );
        }
    }
    export default App;

---

You can use the [offset](/api-reference/50%20Common/Object%20Structures/PositionConfig/offset '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/offset/') property to further adjust the position.

Possible positions are limited by the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window">Window</a>. To limit them by another element, specify the [boundary](/api-reference/50%20Common/Object%20Structures/PositionConfig/boundary.md '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/#boundary') property. If actual boundaries should be narrower or wider than the boundary element, set the [boundaryOffset](/api-reference/50%20Common/Object%20Structures/PositionConfig/boundaryOffset '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/boundaryOffset/').

When a specified position exceeds the boundaries, a collision occurs. Use the [collision](/api-reference/50%20Common/Object%20Structures/PositionConfig/collision '/Documentation/ApiReference/Common/Object_Structures/PositionConfig/collision/') property to specify how such collisions should be resolved.
