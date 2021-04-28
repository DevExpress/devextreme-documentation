The HtmlEditor can output the markup in either HTML or Markdown. If you use the Markdown language, you should add the <a href="https://www.npmjs.com/package/turndown" target="_blank" rel="noopener">turndown</a> and <a href="https://www.npmjs.com/package/showdown" target="_blank" rel="noopener">showdown</a> libraries to your project.
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