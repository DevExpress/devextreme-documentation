The **TextBox** raises four keyboard events: [keyDown](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyDown.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Events/#keyDown'), [keyPress](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyPress.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Events/#keyPress'), [keyUp](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/keyUp.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Events/#keyUp') and [enterKey](/api-reference/10%20UI%20Widgets/dxTextEditor/4%20Events/enterKey.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Events/#enterKey'). Within the functions that handle them, you can access the original keyboard events. If you are _not_ going to change the functions during the lifetime of the UI component, assign them to the respective UI component options.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            onKeyDown: function (e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyPress: function (e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyUp: function (e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onEnterKey: function (e) {
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-text-box
        (onKeyDown)="onKeyDown($event)"
        (onKeyPress)="onKeyPress($event)"
        (onKeyUp)="onKeyUp($event)"
        (onEnterKey)="onEnterKey($event)">
    </dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onKeyDown (e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyPress (e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyUp (e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onEnterKey (e) {
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxTextBox
            @key-down="onKeyDown"
            @key-press="onKeyPress"
            @key-up="onKeyUp"
            @enter-key="onEnterKey"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTextBox } from 'devextreme-vue/text-box';

    export default {
        components: {
            DxTextBox
        },
        methods: {
            onKeyDown(e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyPress(e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onKeyUp(e) {
                const keyCode = e.event.key;
                // Event handling commands go here
            },
            onEnterKey(e) {
                // Event handling commands go here
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TextBox } from 'devextreme-react/text-box';

    class App extends React.Component {
        render() {
            return (
                <TextBox
                    onKeyDown={this.onKeyDown}
                    onKeyPress={this.onKeyPress}
                    onKeyUp={this.onKeyUp}
                    onEnterKey={this.onEnterKey}
                />
            );
        }

        onKeyDown(e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyPress(e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyUp(e) {
            let keyCode = e.event.key;
            // Event handling commands go here
        }
        onEnterKey(e) {
            // Event handling commands go here
        }
    }

    export default App;

---

If you are going to change the handling functions at runtime, or if you need to attach several functions to a single event, use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const keyDownHandler1 = function (e) {
        const keyCode = e.event.key;
        // First handler of the "keyDown" event
    };

    const keyDownHandler2 = function (e) {
        const keyCode = e.event.key;
        // Second handler of the "keyDown" event
    };

    $("#textBoxContainer").dxTextBox("instance")
        .on("keyDown", keyDownHandler1)
        .on("keyDown", keyDownHandler2);

#include common-code-register-key-handler

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [TextBox - Handle the Value Change Event](/concepts/05%20Widgets/TextBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TextBox/Handle_the_Value_Change_Event/')
- [TextBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextBox/Overview)

[tags]textBox, text box, editor, keyboard events, keyup, keydown, keypress, enterkey
