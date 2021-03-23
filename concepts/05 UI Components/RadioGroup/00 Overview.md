The RadioGroup is a UI component that contains a set of radio buttons and allows an end user to make a single selection from the set.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RadioGroup/Overview/"
}

The following code adds a simple RadioGroup to your page. Here, the [value](/api-reference/10%20UI%20Components/dxRadioGroup/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxRadioGroup/Configuration/#value') property specifies the initially selected radio button.

---
##### jQuery

    <!--HTML-->
    <div id="radioGroupContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: ["Low", "Normal", "Urgent", "High"],
            value: "Low"
        });
    });

##### Angular

    <!--HTML-->
    <dx-radio-group
        [dataSource]="dataSource"
        value="Low">
    </dx-radio-group>

    <!--TypeScript-->
    import { DxRadioGroupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        dataSource = ["Low", "Normal", "Urgent", "High"]
    }
    @NgModule({
        imports: [
            // ...
            DxRadioGroupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxRadioGroup
            :data-source="dataSource"
            value="Low"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxRadioGroup } from 'devextreme-vue/radio-group';

    export default {
        components: {
            DxRadioGroup
        },
        data() {
            return {
                dataSource: ['Low', 'Normal', 'Urgent', 'High']
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { RadioGroup } from 'devextreme-react/radio-group';

    const dataSource = ['Low', 'Normal', 'Urgent', 'High'];

    class App extends React.Component {
        render() {
            return (
                <RadioGroup
                    dataSource={dataSource}
                    value="Low"
                />
            );
        }
    }

    export default App;

---

If your data is an array of objects, bind it to the RadioGroup using the [displayExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxRadioGroup/Configuration/#displayExpr') and [valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Components/dxRadioGroup/Configuration/#valueExpr') properties. **displayExpr** specifies which data source field provides texts for buttons; **valueExpr** specifies which data source field provides values to be written to the [value](/api-reference/10%20UI%20Components/dxRadioGroup/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxRadioGroup/Configuration/#value') property when a button is selected. Leave **valueExpr** unspecified if you need the entire data object to be written to the **value** property.

---
##### jQuery

    <!--JavaScript-->
    const dataItems = [
        { text: "Low", color: "grey" },
        { text: "Normal", color: "green" },
        { text: "Urgent", color: "yellow" },
        { text: "High", color: "red" }
    ];

    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: dataItems,
            displayExpr: "text",
            // valueExpr: "color",
            value: dataItems[1]
        });
    });

##### Angular

    <!--HTML-->
    <dx-radio-group
        [dataSource]="dataItems"
        [value]="radioGroupValue"
        displayExpr="text">
    </dx-radio-group>

    <!--TypeScript-->
    import { DxRadioGroupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        dataItems = [
            { text: "Low", color: "grey" },
            { text: "Normal", color: "green" },
            { text: "Urgent", color: "yellow" },
            { text: "High", color: "red" }
        ];
        radioGroupValue = dataItems[1];
    }
    @NgModule({
        imports: [
            // ...
            DxRadioGroupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxRadioGroup
            :data-source="dataItems"
            :value="radioGroupValue"
            display-expr="text"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxRadioGroup } from 'devextreme-vue/radio-group';

    const items = [
        { text: 'Low', color: 'grey' },
        { text: 'Normal', color: 'green' },
        { text: 'Urgent', color: 'yellow' },
        { text: 'High', color: 'red' }
    ];

    export default {
        components: {
            DxRadioGroup
        },
        data() {
            return {
                dataItems: items,
                radioGroupValue: items[1]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { RadioGroup } from 'devextreme-react/radio-group';

    const dataItems = [
        { text: 'Low', color: 'grey' },
        { text: 'Normal', color: 'green' },
        { text: 'Urgent', color: 'yellow' },
        { text: 'High', color: 'red' }
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                value: dataItems[1]
            };
        }

        render() {
            return (
                <RadioGroup
                    dataSource={dataItems}
                    value={this.state.value}
                    displayExpr="text"
                />
            );
        }
    }

    export default App;

---

The RadioGroup UI component supports horizontal (default for tablets) and vertical (default for other devices) layouts. To change the layout for all types of devices, specify the [layout](/api-reference/10%20UI%20Components/dxRadioGroup/1%20Configuration/layout.md '/Documentation/ApiReference/UI_Components/dxRadioGroup/Configuration/#layout') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: ["Low", "Normal", "Urgent", "High"],
            layout: "horizontal" // or "vertical"
        });
    });

##### Angular

    <!--HTML-->
    <dx-radio-group
        [dataSource]="dataSource"
        layout="horizontal">
    </dx-radio-group>

    <!--TypeScript-->
    import { DxRadioGroupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        dataSource = ["Low", "Normal", "Urgent", "High"]
    }
    @NgModule({
        imports: [
            // ...
            DxRadioGroupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxRadioGroup
            :data-source="dataSource"
            layout="horizontal"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxRadioGroup } from 'devextreme-vue/radio-group';

    export default {
        components: {
            DxRadioGroup
        },
        data() {
            return {
                dataSource: ['Low', 'Normal', 'Urgent', 'High']
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { RadioGroup } from 'devextreme-react/radio-group';

    const dataSource = ['Low', 'Normal', 'Urgent', 'High'];

    class App extends React.Component {
        render() {
            return (
                <RadioGroup
                    dataSource={dataSource}
                    layout="horizontal"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [RadioGroup - Handle the Value Change Event](/concepts/05%20UI%20Components/RadioGroup/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/RadioGroup/Handle_the_Value_Change_Event')
- [RadioGroup - Customize Item Appearance](/concepts/05%20UI%20Components/RadioGroup/10%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/RadioGroup/Customize_Item_Appearance')
- [RadioGroup - Keyboard Support](/concepts/05%20UI%20Components/RadioGroup/20%20Keyboard%20Support.md '/Documentation/Guide/UI_Components/RadioGroup/Keyboard_Support')
- [RadioGroup API Reference](/api-reference/10%20UI%20Components/dxRadioGroup '/Documentation/ApiReference/UI_Components/dxRadioGroup/')

[tags]dxradiogroup, radio group, radioGroup, layout, editor, overview