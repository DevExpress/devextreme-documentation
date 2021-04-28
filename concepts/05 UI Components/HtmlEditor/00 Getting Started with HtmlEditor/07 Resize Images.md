HtmlEditor can resize media embedded within its content. To enable this functionality pass the [enabled](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/mediaResizing/#enabled) property to the [mediaResizing](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/mediaResizing) configuration object and set it to **true**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#html-editor').dxHtmlEditor({
            // ...
            mediaResizing: {
                enabled: true
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor...>
        <!-- ... --->
        <dxo-media-resizing
            [enabled]=true>
        </dxo-media-resizing>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
        <template>
            <DxHtmlEditor...>
                <!-- ... -->
                <DxMediaResizing :enabled="true"/>
            </DxHtmlEditor>
        </template>
        <script>
        import {
        ...,
        DxMediaResizing,
        } from 'devextreme-vue/html-editor';



        export default {
            components: {
                ...,
                DxMediaResizing,
            },
            // ...
        };
        </script>

##### React

    <!-- tab: App.js -->
    // ...
    import HtmlEditor, {
    ...,
    MediaResizing,
    } from "devextreme-react/html-editor";

    App = () => {
        return (
            <>
                <HtmlEditor...>
                    {/* ... */}
                    <MediaResizing enabled={true} />
                </HtmlEditor>
            </>
        );
    }

    export default App;


    
---