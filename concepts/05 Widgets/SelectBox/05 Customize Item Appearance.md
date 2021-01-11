For a minor customization of **SelectBox** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/items/') in their data objects. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

---
##### jQuery

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

##### Angular

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

    export default function App(props) {
        return (
            <SelectBox ...
                dataSource={products} 
                displayExpr="text"
                valueExpr="text"
            />
        );
    }

---

If you need a more flexible solution, specify [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#itemTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a render function or component as shown in the following example:

---
##### Angular

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
            <template #item="{ data }">
                <div>
                    <img :src="data.imgSrc">
                    <div style="display:inline-block">
                        {{ data.name }}
                    </div>
                </div>
            </template>
        </DxSelectBox>
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

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';

    const renderItem = (data) => {
        return (
            <div>
                <img src={data.imgSrc} />
                <div style={{display: 'inline-block'}}>{data.name}</div>
            </div>
        );
    }

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

    export default function App(props) {
        return (
            <SelectBox ...
                dataSource={selectBoxData} 
                displayExpr="name"
                valueExpr="id"
                itemRender={renderItem}
            />
        );
    }

---

If you use jQuery, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to create HTML markup for items. To apply this markup, use the **itemTemplate** callback function as shown in the following code:

    <!--JavaScript-->
    const selectBoxData = [{
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

You can also customize an individual **SelectBox** item. In Angular, Vue, and React, declare them using the [dxItem](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxItem/) component. In jQuery, you can declare the items as scripts and reference them in the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/items/#template') property or assign a customization function straight to this option:

---
##### jQuery

    <!--HTML-->
    <div id="selectBoxContainer"></div>
    <script id="individualTemplate" type="text/html">
        <span>Comment</span>
    </script>

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            items: [{ 
                template: function() {
                    return $("<span>").text("User");
                }
            }, { 
                template: $("#individualTemplate")
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box>
        <dxi-item>
            <span>User</span>
        </dxi-item>
        <dxi-item>
            <span>Comment</span>
        </dxi-item>
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSelectBoxModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxSelectBox>
            <DxItem>
                <template #default>
                    <span>User</span>
                </template>
            </DxItem>
            <DxItem>
                <template #default>
                    <span>Comment</span>
                </template>
            </DxItem>
        </DxSelectBox>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxSelectBox, { DxItem } from "devextreme-vue/select-box";

    export default {
        components: {
            DxSelectBox,
            DxItem
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { SelectBox, Item } from 'devextreme-react/select-box';

    export default function App(props) {
        return (
            <SelectBox>
                <Item>
                    <span>User</span>
                </Item>
                <Item>
                    <span>Comment</span>
                </Item>
            </SelectBox>
        );
    }

---

Using similar techniques, you can customize the input field of the **SelectBox**. The template for it should be assigned to the [fieldTemplate](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/fieldTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#fieldTemplate') property. Note that the input field must contain the [TextBox](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/') UI component.

---
##### jQuery

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

##### Angular

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
            <template #field='{ data }'>
                <div>
                    <img :src="data.imgSrc">
                    <DxTextBox
                        :value="data.name"
                        style="display:inline-block"
                    />
                </div>
            </template>
        </DxSelectBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';
    import { DxTextBox } from 'devextreme-vue/text-box';

    export default {
        components: {
            DxSelectBox,
            DxTextBox
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

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { SelectBox } from 'devextreme-react/select-box';
    import { TextBox } from 'devextreme-react/text-box';

    const renderField = (data) => {
        return (
            <div>
                <img src={data.imgSrc} />
                    <TextBox style={{display: 'inline-block'}}
                        defaultValue={data.name} />
            </div>
        );
    }

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

    export default function App(props) {
        return (
            <SelectBox ...
                dataSource={selectBoxData} 
                value={1}
                displayExpr="name"
                valueExpr="id"
                fieldRender={renderField}
            />
        );
    }

---

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)

[tags]selectBox, select box, editor, item appearance, customize, templates, template, field template
