The **TagBox** widget is an editor that allows an end user to select multiple items from a drop-down list.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview/"
}

The following code adds the **TagBox** to your page. The simplest configuration of the widget requires only a [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#dataSource') to be specified. In addition, you can specify the [placeholder](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#placeholder') to be displayed when the **TagBox** is empty.

---
##### jQuery

    <!--HTML-->
    <div id="tagBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            placeholder: "Select products..."
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products"
        placeholder="Select products...">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="dataSource"
            placeholder="Select products..."
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                dataSource: [
                    'HD Video Player',
                    'SuperHD Video Player',
                    'SuperPlasma 50',
                    // ...
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';

    const dataSource = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    placeholder="Select products..."
                />
            );
        }
    }

    export default App;

---

If your data is an array of objects, specify: 

- [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#valueExpr')     
    The data field whose value will be written into the [value](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#value') option.  
- [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#displayExpr')     
    The data field whose value will be displayed in the drop-down list and in the input field of the widget.

<!---->

---
##### jQuery

    <!--JavaScript-->
    const tagBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // ...
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country'
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan" },
            { id: 2, country: "Albania" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="tagBoxData"
            value-expr="id"
            display-expr="country"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                tagBoxData: [
                    { id: 1, country: 'Afghanistan' },
                    { id: 2, country: 'Albania' },
                    // ...
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';

    const tagBoxData = [
        { id: 1, country: 'Afghanistan' },
        { id: 2, country: 'Albania' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={tagBoxData}
                    valueExpr="id"
                    displayExpr="country"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [TagBox - Control the Behavior](/concepts/05%20Widgets/TagBox/03%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/')
- [TagBox - Handle the Value Change Event](/concepts/05%20Widgets/TagBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/')
- [TagBox - Customize Item Appearance](/concepts/05%20Widgets/TagBox/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TagBox/Customize_Item_Appearance/')
- [TagBox - Configure Search Parameters](/concepts/05%20Widgets/TagBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/')
- [TagBox - Create a User-Defined Item](/concepts/05%20Widgets/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/')
- [TagBox - Keyboard Support](/concepts/05%20Widgets/TagBox/25%20Keyboard%20Support.md '/Documentation/Guide/Widgets/TagBox/Keyboard_Support/')
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')

[tags]dxtagbox, tagBox, tag box, editor, overview, data source, value, display expression