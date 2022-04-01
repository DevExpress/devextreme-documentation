---
id: dxResizable.Options.keepAspectRatio
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to resize the UI component's content proportionally when you use corner handles.

---
When this property value is **true**, you can use a corner handle to resize the UI component proportionally.

![keepAspectRatio is True](/images/Editors/resizable-keep-aspect-ratio-true.gif)

Set this property to **false** to enable free-form resize:

---
##### jQuery

    $(function(){
        $("#resizable").dxResizable({
            // ...
            keepAspectRatio: false
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-resizable ... 
        [keepAspectRatio]="false">
    </dx-resizable>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxResizable ...
            :keep-aspect-ratio="false"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Resizable from 'devextreme-react/resizable';

    function App() {
        return (
            <Resizable ...
                keepAspectRatio={false}           
            />
        );
    }

    export default App;

---


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Resizable/Overview/"
}