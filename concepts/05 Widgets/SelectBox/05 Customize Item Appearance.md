For a minor customization of **SelectBox** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/items/') in appointment data objects. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            valueExpr: 'text',
            displayExpr: 'text',
            dataSource: [
                { text: "HD Video Player" },
                { text: "SuperHD Video Player", disabled: true },
                { text: "SuperPlasma 50", visible: false }
            ],
            placeholder: "Select a product..."
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products =  [
            { text: "HD Video Player" },
            { text: "SuperHD Video Player", disabled: true },
            { text: "SuperPlasma 50", visible: false }
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="products"
        valueExpr="text"
        displayExpr="text"
        placeholder="Select a product...">
    </dx-select-box>

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="products"
            display-expr="text"
            value-expr="text"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            const products = [
                { text: "HD Video Player" },
                { text: "SuperHD Video Player", disabled: true },
                { text: "SuperPlasma 50", visible: false }
            ];
            return {
                products
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';

    const products = [
        { text: "HD Video Player" },
        { text: "SuperHD Video Player", disabled: true },
        { text: "SuperPlasma 50", visible: false }
    ];

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={products} 
                    displayExpr="text"
                    valueExpr="text"
                />
            );
        }
    }
    export default App;

---

If you need a more flexible solution, define a custom template for widget items. For AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code shows how to use **dxTemplate** to define a template for the **SelectBox** items.

---
#####Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        displayExpr="name"
        valueExpr="id"
        itemTemplate="item">
        <div *dxTemplate="let data of 'item'">
            <img src="{{data.imgSrc}}" />
            <div style="display:inline-block">{{data.name}}</div>
        </div>
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
            display-expr="name"
            value-expr="id"
            item-template="item"
        >
            <template #item="item">
                <Item :item-data="item.data"/>
            </template>
        </DxSelectBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';
    import Item from './Item.vue';

    export default {
        components: {
            DxSelectBox,
            Item
        },
        data() {
            const selectBoxData = [{
                id: 1,
                name: "HD Video Player",
                imgSrc: "images/products/1-small.png"
            }, {
                id: 2,
                name: "UltraHD Player",
                imgSrc: "images/products/2-small.png"
            },
            // ...
            ];
            return {
                selectBoxData
            }
        }
    }
    </script>

    <!-- tab: Item.vue -->
    <template>
    <div class="custom-item">
        <img :src="itemData.imgSrc">
        <div style="display:inline-block">
        {{ itemData.name }}
        </div>
    </div>
    </template>
    <script>
    export default {
    props: {
        itemData: {
        type: Object,
        default: () => {}
        }
    }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';
    import Item from './Item.js';

    const selectBoxData = [{
        id: 1,
        name: "HD Video Player",
        imgSrc: "images/products/1-small.png"
    }, {
        id: 2,
        name: "UltraHD Player",
        imgSrc: "images/products/2-small.png"
    },
    // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData} 
                    displayExpr="name"
                    valueExpr="id"
                    itemRender={Item}
                />
            );
        }
    }
    export default App;

    <!-- tab: Item.js -->
    import React from 'react';

    export default function Item(data) {
        return (
            <div className="custom-item">
            <img src={data.imgSrc} />
            <div className="product-name">{data.name}</div>
            </div>
        );
    }

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-select-box="{
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            itemTemplate: 'item'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'item' }">
                <img ng-src="{{product.imgSrc}}" />
                <div style="display:inline-block">{{product.name}}</div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.selectBoxData = [{
                id: 1,
                name: "HD Video Player",
                imgSrc: "images/products/1-small.png"
            }, {
                id: 2,
                name: "UltraHD Player",
                imgSrc: "images/products/2-small.png"
            },
            // ...
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML-->
    <div data-bind="dxSelectBox: {
        dataSource: selectBoxData,
        valueExpr: 'id',
        displayExpr: 'name',
        itemTemplate: 'item'
    }">
        <div data-options="dxTemplate: { name: 'item' }">
            <img data-bind="attr: { src: imgSrc }" />
            <div style="display:inline-block" data-bind="text: name"></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        selectBoxData: [{
            id: 1,
            name: "HD Video Player",
            imgSrc: "images/products/1-small.png"
        }, {
            id: 2,
            name: "UltraHD Player",
            imgSrc: "images/products/2-small.png"
        },
        // ...
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    var selectBoxData = [{
        id: 1,
        name: "HD Video Player",
        imgSrc: "images/products/1-small.png"
    }, {
        id: 2,
        name: "UltraHD Player",
        imgSrc: "images/products/2-small.png"
    },
    // . . .
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            itemTemplate: function (itemData, itemIndex, itemElement) {
                return $("<div />").append(
                	$("<img />").attr("src", itemData.imgSrc),
                    $("<p />").text(itemData.name)
                              .css("display", "inline-block")
                );
            }
        });
    });

You can also customize an individual **SelectBox** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var selectBoxData = [
        { text: "SuperHD Player"},
        { text: "HD Video Player", template: $("#individualTemplate") },
        // . . .
    ];

Using similar techniques, you can customize the input field of the **SelectBox**. The template for it should be assigned to the [fieldTemplate](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/fieldTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#fieldTemplate') option. Note that the input field must contain the [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/') widget.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            value: 1,
            fieldTemplate: function(selectedItem, fieldElement) {
                return $("<div />").append(
                    $("<img />").attr("src", selectedItem.imgSrc),
                    $("<div />").dxTextBox({ value: selectedItem.name })
                                .css("display", "inline-block")
                );
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        [value]="1"
        displayExpr="name"
        fieldTemplate="inputField">
        <div *dxTemplate="let data of 'inputField'">
            <img ng-src="{{data.imgSrc}}" />
            <dx-text-box style="display:inline-block" 
                [value]="data.name" 
            ></dx-text-box>
        </div>
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule, DxTextBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, name: "HD Video Player", imgSrc: "images/products/1-small.png" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule,
             DxTextBoxModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
            :value="1"
            display-expr="name"
            value-expr="id"
            field-template="field"
        >
            <template #field="field">
              <Field :field-data="field.data"/>
            </template>
        </DxSelectBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';
    import Field from './Field.vue';

    export default {
        components: {
            DxSelectBox,
            Field
        },
        data() {
            const selectBoxData = [{
                id: 1,
                name: "HD Video Player",
                imgSrc: "images/products/1-small.png"
            }, {
                id: 2,
                name: "UltraHD Player",
                imgSrc: "images/products/2-small.png"
            },
            // ...
            ];
            return {
                selectBoxData
            }
        }
    }
    </script>

    <!-- tab: Field.vue -->
    <template>
        <div class="custom-item">
            <img
                :src="fieldData.imgSrc"
            >
            <DxTextBox
                :value="fieldData.name"
                style="display:inline-block"
            />
        </div>
    </template>
    <script>
    import { DxTextBox } from 'devextreme-vue';

    export default {
    components: {
        DxTextBox
    },
    props: {
        fieldData: {
            type: Object,
            default: () => {}
        }
    }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';
    import Field from './Field.js';

    const selectBoxData = [{
        id: 1,
        name: "HD Video Player",
        imgSrc: "images/products/1-small.png"
    }, {
        id: 2,
        name: "UltraHD Player",
        imgSrc: "images/products/2-small.png"
    },
    // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData} 
                    value={1}
                    displayExpr="name"
                    valueExpr="id"
                    fieldRender={Field}
                />
            );
        }
    }
    export default App;

    <!-- tab: Field.js -->
    import React from 'react';
    import { TextBox } from 'devextreme-react';

    export default function Field(data) {
    return (
        <div>
        <img src={data.imgSrc} />
            <TextBox style={{display: 'inline-block'}}
                defaultValue={data.name} />
        </div>
    );
    }

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-select-box="{
            dataSource: selectBoxData,
            valueExpr: 'id',
            value: 1,
            displayExpr: 'name',
            fieldTemplate: 'inputField'
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'inputField' }">
                <img ng-src="{{ product.imgSrc }}" />
                <div style="display:inline-block" dx-text-box="{ value: product.name }"></div>
            </div>
        </div>
    </div>

#####Knockout

    <!--HTML-->
    <div data-bind="dxSelectBox: {
        dataSource: selectBoxData,
        valueExpr: 'id',
        value: 1,
        displayExpr: 'name',
        fieldTemplate: 'inputField'
    }">
        <div data-options="dxTemplate: { name: 'inputField' }">
            <img data-bind="attr: { src: imgSrc }" />
            <div style="display:inline-block" data-bind="dxTextBox: { value: name }"></div>
        </div>
    </div>

---

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)

[tags]selectBox, select box, editor, item appearance, customize, templates, template, field template
