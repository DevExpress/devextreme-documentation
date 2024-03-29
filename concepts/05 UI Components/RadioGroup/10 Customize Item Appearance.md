For a minor customization of RadioGroup items, you can define [specific fields](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxRadioGroup/Configuration/items/') in item data objects. For example, the following code generates three radio buttons: the first is disabled, the second is not customized, the third is hidden.

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

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxRadioGroup/Configuration/#itemTemplate').

---
##### jQuery

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

---
##### jQuery

You can also customize an individual item. For this purpose, declare a template for it as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxRadioGroup/Configuration/items/#template').

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    const radioGroupItems = [{
        text: "Low",
        template: $("#individualTemplate")
    },
    // ...
    ];

---

#####See Also#####
- [RadioGroup - Handle the Value Change Event](/concepts/05%20UI%20Components/RadioGroup/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/RadioGroup/Handle_the_Value_Change_Event')
- [RadioGroup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RadioGroup/Overview)
- [RadioGroup API Reference](/api-reference/10%20UI%20Components/dxRadioGroup '/Documentation/ApiReference/UI_Components/dxRadioGroup/')

[tags]radio group, radioGroup, button appearance, item appearance, customize, templates, template, custom template
