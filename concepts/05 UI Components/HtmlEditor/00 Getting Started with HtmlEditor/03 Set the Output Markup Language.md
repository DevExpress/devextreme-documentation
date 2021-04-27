Use the [valueType](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#valueType) property to define in which language HtmlEditor outputs the markup.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#html-editor').dxHtmlEditor({
            valueType: "html" 
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor...
         valueType="html">
        <!-- ... -->
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
        <DxHtmlEditor...
            value-type="html">
            <!-- ... -->
        </DxHtmlEditor>

##### React

    <!-- tab: App.js -->
    // ...

    App = () => {
        return (
            <>
                <HtmlEditor...
                    valueType="html">
                    {/* ... */}
                </HtmlEditor>
            </>
        );
    }

    export default App;


    
---