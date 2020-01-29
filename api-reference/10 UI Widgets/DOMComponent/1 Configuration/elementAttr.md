---
id: DOMComponent.Options.elementAttr
type: Object
default: {}
---
---
##### shortDescription
Specifies the <a href="http://www.w3schools.com/tags/ref_attributes.asp" target="_blank">attributes</a> to be attached to the widget's root element.

---
---
#####jQuery

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            elementAttr: {
                id: "elementId",
                class: "class-name"
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name} ...
        [elementAttr]="{ id: 'elementId', class: 'class-name' }">
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :element-attr="{widgetName}Attributes">
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                {widgetName}Attributes: {
                    id: 'elementId',
                    class: 'class-name'
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        {widgetName}Attributes = {
            id: 'elementId',
            class: 'class-name'
        }

        render() {
            return (
                <{WidgetName} ...
                    elementAttr={this.{widgetName}Attributes}>
                </{WidgetName}>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->@(Html.DevExtreme().{WidgetName}()
        .ElementAttr("class", "class-name")
        // ===== or =====
        .ElementAttr(new {
            @id = "elementId",
            @class = "class-name"
        })
        // ===== or =====
        .ElementAttr(new Dictionary<string, object>() {
            { "id", "elementId" },
            { "class", "class-name" }
        })
        
    )

    <!--Razor VB-->@(Html.DevExtreme().{WidgetName}() _
        .ElementAttr("class", "class-name")
        ' ===== or =====
        .ElementAttr(New With {
            .id = "elementId",
            .class = "class-name"
        })
        ' ===== or =====
        .ElementAttr(New Dictionary(Of String, Object) From {
            { "id", "elementId" },
            { "class", "class-name" }
        })
    )

---