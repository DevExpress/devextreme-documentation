If the size of the UI component should be fixed, specify it using the [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/api-reference/10%20UI%20Components/dxTextArea '/Documentation/ApiReference/UI_Components/dxTextArea/'Configuration/#height') and [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '/api-reference/10%20UI%20Components/dxTextArea '/Documentation/ApiReference/UI_Components/dxTextArea/'Configuration/#width') properties.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            height: 200,
            width: 300
        });
    });

##### Angular

    <!--HTML-->
    <dx-text-area
        [height]="200"
        [width]="300">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            :height="200"
            :width="300"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTextArea } from 'devextreme-vue/text-area';

    export default {
        components: {
            DxTextArea
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TextArea } from 'devextreme-react/text-area';

    class App extends React.Component {
        render() {
            return (
                <TextArea
                    height={200}
                    width={300}
                />
            );
        }
    }

    export default App;

---

Alternatively, the UI component's height can adapt to the UI component's contents. In this case, instead of specifying the **height** property, you need to set the **autoResizeEnabled** property to **true**. To specify the minimum and maximum height that the adapted **TextArea** can occupy, set the **minHeight** and **maxHeight** properties.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            autoResizeEnabled: true,
            minHeight: 100,
            maxHeight: 200
        });
    });

##### Angular

    <!--HTML-->
    <dx-text-area
        [autoResizeEnabled]="true"
        [minHeight]="100"
        [maxHeight]="200">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            :auto-resize-enabled="true"
            :min-height="100"
            :max-height="200"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTextArea } from 'devextreme-vue/text-area';

    export default {
        components: {
            DxTextArea
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TextArea } from 'devextreme-react/text-area';

    class App extends React.Component {
        render() {
            return (
                <TextArea
                    autoResizeEnabled={true}
                    minHeight={100}
                    maxHeight={200}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TextArea - Limit the Text Length](/concepts/05%20UI%20Components/TextArea/15%20Limit%20the%20Text%20Length.md '/Documentation/Guide/UI_Components/TextArea/Limit_the_Text_Length/')
- [TextArea Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextArea/Overview)
- [TextArea API Reference](/api-reference/10%20UI%20Components/dxTextArea '/Documentation/ApiReference/UI_Components/dxTextArea/')

[tags]textArea, text area, editor, size, height, width, adaptive, minimum height, maximum height, autoResizeEnabled