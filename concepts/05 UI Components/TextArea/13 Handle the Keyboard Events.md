The TextArea raises three keyboard events: [keyDown](/api-reference/10%20UI%20Components/dxTextEditor/4%20Events/keyDown.md '/Documentation/ApiReference/UI_Components/dxTextArea/Events/#keyDown'), [keyUp](/api-reference/10%20UI%20Components/dxTextEditor/4%20Events/keyUp.md '/Documentation/ApiReference/UI_Components/dxTextArea/Events/#keyUp') and [enterKey](/api-reference/10%20UI%20Components/dxTextEditor/4%20Events/enterKey.md '/Documentation/ApiReference/UI_Components/dxTextArea/Events/#enterKey'). Within functions that handle them, you can access original keyboard events. If you are _not_ going to change functions during the lifetime of the UI component, assign them to respective UI component properties.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            onKeyDown: function (e) {
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
    <dx-text-area
        (onKeyDown)="onKeyDown($event)"
        (onKeyUp)="onKeyUp($event)"
        (onEnterKey)="onEnterKey($event)">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onKeyDown (e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyUp (e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onEnterKey (e) {
            // Event handling commands go here
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTextArea
            @key-down="onKeyDown"
            @key-up="onKeyUp"
            @enter-key="onEnterKey"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxTextArea } from 'devextreme-vue/text-area';

    export default {
        components: {
            DxTextArea
        },
        methods: {
            onKeyDown(e) {
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
    import 'devextreme/dist/css/dx.light.css';

    import { TextArea } from 'devextreme-react/text-area';

    class App extends React.Component {
        render() {
            return (
                <TextArea
                    onKeyDown={this.onKeyDown}
                    onKeyUp={this.onKeyUp}
                    onEnterKey={this.onEnterKey}
                />
            );
        }

        onKeyDown(e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onKeyUp(e) {
            const keyCode = e.event.key;
            // Event handling commands go here
        }
        onEnterKey(e) {
            // Event handling commands go here
        }
    }

    export default App;

---

[note] You can also use the [input](/api-reference/10%20UI%20Components/dxTextEditor/4%20Events/input.md '/Documentation/ApiReference/UI_Components/dxTextArea/Events/#input') event. This is not a strictly keyboard event, a mouse action can also change a TextArea input value.

---

##### jQuery

If you are going to change handling functions at runtime, or if you need to attach several functions to a single event, use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxTextArea/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    const keyDownHandler1 = function (e) {
        const keyCode = e.event.key;
        // First handler of the "keyDown" event
    };

    const keyDownHandler2 = function (e) {
        const keyCode = e.event.key;
        // Second handler of the "keyDown" event
    };

    $("#textAreaContainer").dxTextArea("instance")
        .on("keyDown", keyDownHandler1)
        .on("keyDown", keyDownHandler2);

---

#include common-code-register-key-handler

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [TextArea - Handle the Value Change Event](/concepts/05%20UI%20Components/TextArea/00%20Getting%20Started%20with%20TextArea/20%20Handle%20Value%20Change.md '/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/#Handle_Value_Change')
- [TextArea Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextArea/Overview)

[tags]textArea, text area, editor, keyboard events, keyup, keydown, keypress, enterkey
