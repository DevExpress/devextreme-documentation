Since DevExtreme icons are shipped as an icon font, they can be customized with the same CSS properties that you would use to customize textual content: `color`, `font-size`, `font-weight`, `text-align`, etc. This is true for icons used in widgets...

---
##### jQuery  

    <!--HTML-->
    <div id="saveButton"></div>

    <!--JavaScript-->
    $(function() {
        $("#saveButton").dxButton({
            icon: "save",
            text: "Save"
        });
    });

    <!--CSS-->
    #saveButton .dx-icon {
        font-size: 24px;
        color: blue;
    }
    
##### Angular  

    <!--HTML-->
    <dx-button
        id="saveButton" 
        icon="save"
        text="Save">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

    <!--CSS-->
    ::ng-deep #saveButton .dx-icon {
        font-size: 24px;
        color: blue;
    }

##### Vue

    <template>
        <dx-button
            id="saveButton"
            icon="save"
            text="Save" />
    </template>
    <script>
    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxButton
        }
    }
    </script>
    <style>
    #saveButton .dx-icon {
        font-size: 24px;
        color: blue;
    }
    </style>

##### React

    <!--JavaScript-->
    import React from 'react';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        render() {
            return (
                <Button
                    id="saveButton"
                    icon="save"
                    text="Save"
                />
            );
        }
    }

    export default App;

    <!--CSS-->
    #saveButton .dx-icon {
        font-size: 24px;
        color: blue;
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .ID("saveButton")
        .Icon("save")
        .Text("Save")
    )

    <!--CSS-->
    #saveButton .dx-icon {
        font-size: 24px;
        color: blue;
    }

---

... and for icons used in any other HTML elements: 

    <!--HTML-->
    <i class="dx-icon-email dx-icon-custom-style"></i>

    <!--CSS-->
    .dx-icon-custom-style {
        font-size: 24px;
        color: blue;
    }

`dx-icon` is a CSS class added to icon elements when DevExtreme widgets render them into the DOM. You cannot use another name for it. However, it is not true for icons in other HTML elements. You can use any name for the class in this case, as demonstrated in the previous example.
