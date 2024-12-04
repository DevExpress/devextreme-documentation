Users can resize images embedded within the content. To enable this functionality, set the [mediaResizing](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/mediaResizing '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/mediaResizing/').[enabled](/api-reference/_hidden/dxHtmlEditorMediaResizing/enabled.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/mediaResizing/#enabled') property to **true**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#html-editor").dxHtmlEditor({
            // ...
            mediaResizing: {
                enabled: true
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor ... >
        <!-- ... -->
        <dxo-media-resizing
            [enabled]="true">
        </dxo-media-resizing>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ... >
            <!-- ... -->
            <DxMediaResizing :enabled="true" />
        </DxHtmlEditor>
    </template>
    <script>
    import {
        // ...
        DxMediaResizing
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            // ...
            DxMediaResizing
        },
        // ...
    };
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import {
        // ...
        MediaResizing
    } from "devextreme-react/html-editor";

    const App = () => {
        return (
            <HtmlEditor ... >
                {/* ... */}
                <MediaResizing enabled={true} />
            </HtmlEditor>
        );
    }

    export default App;

---

For further information on the HTML Editor component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/)
* [API Reference](/api-reference/10%20UI%20Components/dxHtmlEditor '/Documentation/ApiReference/UI_Components/dxHtmlEditor/')