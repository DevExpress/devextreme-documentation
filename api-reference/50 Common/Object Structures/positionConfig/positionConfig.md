---
id: positionConfig
type: Object
---
---
##### shortDescription
Configures the position of an overlay element.

---
Assign this object to the **position** option of an overlay widget ([Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/), [Popover](/Documentation/ApiReference/UI_Widgets/dxPopover/), [Tooltip](/Documentation/ApiReference/UI_Widgets/dxTooltip/), etc.).

To position an element, specify the [my](/Documentation/ApiReference/Common/Object_Structures/positionConfig/my/), [at](/Documentation/ApiReference/Common/Object_Structures/positionConfig/at/), and [of](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of) options. In the following code, the **Popup** widget's left side is aligned with the target's right side. This configuration reads as follows: "place **my** *left* side **at** the *right* side of the *#target* element."

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
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
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

You can use the [offset](/Documentation/ApiReference/Common/Object_Structures/positionConfig/offset/) option to further adjust the position.

Possible positions are limited by the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window">Window</a>. To limit them by another element, specify the [boundary](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#boundary) option. If actual boundaries should be narrower or wider than the boundary element, set the [boundaryOffset](/Documentation/ApiReference/Common/Object_Structures/positionConfig/boundaryOffset/).

When a specified position exceeds the boundaries, a collision occurs. Use the [collision](/Documentation/ApiReference/Common/Object_Structures/positionConfig/collision/) option to specify how such collisions should be resolved.
