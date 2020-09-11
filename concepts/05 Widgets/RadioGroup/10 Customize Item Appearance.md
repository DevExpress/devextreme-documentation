For a minor customization of **RadioGroup** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/items/') in item data objects. For example, the following code generates three radio buttons: the first is disabled, the second is not customized, the third is hidden.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: [
                { text: "Low", disabled: true },
                { text: "High" },
                { text: "Urgent", visible: false }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-radio-group
        [dataSource]="dataSource">
    </dx-radio-group>

    <!--TypeScript-->
    import { DxRadioGroupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        dataSource = [
            { text: "Low", disabled: true },
            { text: "High" },
            { text: "Urgent", visible: false }
        ]
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
        <DxRadioGroup :data-source="dataSource"/>
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
                dataSource: [
                    { text: 'Low', disabled: true },
                    { text: 'High' },
                    { text: 'Urgent', visible: false }
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { RadioGroup } from 'devextreme-react/radio-group';

    const dataSource = [
        { text: 'Low', disabled: true },
        { text: 'High' },
        { text: 'Urgent', visible: false }
    ];

    class App extends React.Component {
        render() {
            return (
                <RadioGroup dataSource={dataSource}/>
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#itemTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component:

---
##### Angular

    <!--HTML-->
    <dx-radio-group 
        [dataSource]="dataSource"
        itemTemplate="radio">
        <div class="radio" *dxTemplate="let data of 'radio'">
            <p style="font-size:larger"><b>{{data}}</b></p>
        </div>
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
            item-template="radio">
            <template #radio="{ data }">
                <div>
                    <p style="font-size:larger"><b>{{data}}</b></p>
                </div>
            </template>
        </DxRadioGroup>
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

    const renderRadioGroupItem = (itemData) => {
        return (
            <div>
                <p style={{fontSize: "larger"}}><b>{itemData}</b></p>
            </div>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <RadioGroup
                    dataSource={dataSource}
                    itemRender={renderRadioGroupItem}
                />
            );
        }
    }

    export default App;

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: [
                { text: "Low", color: "grey" },
                { text: "Normal", color: "green" },
                { text: "Urgent", color: "yellow" },
                { text: "High", color: "red" }
            ],
            itemTemplate: function(itemData, itemIndex, itemElement){
                itemElement.append(
                    $("<div />").attr("style", "color:" + itemData.color )
                                .text(itemData.text)
                );
            }
        });
    });

You can also customize an individual item. For this purpose, declare a template for it as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/items/#template').

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var radioGroupItems = [{
        text: "Low",
        template: $("#individualTemplate")
    },
    // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [RadioGroup - Handle the Value Change Event](/concepts/05%20Widgets/RadioGroup/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/RadioGroup/Handle_the_Value_Change_Event')
- [RadioGroup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RadioGroup/Overview)
- [RadioGroup API Reference](/api-reference/10%20UI%20Widgets/dxRadioGroup '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/')

[tags]radio group, radioGroup, button appearance, item appearance, customize, templates, template, custom template
