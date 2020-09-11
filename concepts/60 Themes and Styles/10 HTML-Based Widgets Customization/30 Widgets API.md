We recommend customizing a widget using its API. Unlike [CSS classes](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Widgets%20Customization/40%20Individual%20CSS%20Classes.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Widgets_Customization/#Individual_CSS_Classes'), the API is changed rarely, and if it happens, the widget populates the browser console with warnings that help you mend your code.

Each widget has an API described in the widget's [API reference section](/api-reference/10%20UI%20Widgets '/Documentation/ApiReference/UI_Widgets/'). For example, you can specify the widget's width via a [corresponding option](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#width'). In the following example, this option is set for the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI) widget.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            width: 600
        });
    });

##### Angular  

    <!--HTML-->
    <dx-list
        [width]="600">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxList
            :width="600" />
    </template>
    <script>
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        }
    }
    </script>

##### React

    import React from 'react';
    import { List } from 'devextreme-react/list';

    class App extends React.Component {
        render() {
            return (
                <List
                    width={600}
                />
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().List()
        .Width(600)
    )

---

If your page contains multiple instances of the same widget, you can use the [defaultOptions(rule)](/api-reference/10%20UI%20Widgets/DOMComponent/3%20Methods/defaultOptions(rule).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#defaultOptionsrule') method to specify a default configuration for all of them in one place. The same method allows you to specify different default configurations for different devices.

In addition, widgets provide [templates](/concepts/05%20Widgets/zz%20Common/30%20Templates '/Documentation/Guide/Widgets/Common/Templates/') that you can use for more in-depth customization.