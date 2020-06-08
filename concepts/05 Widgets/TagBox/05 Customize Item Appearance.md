For a minor customization of **TagBox** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/items/') in item data objects. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            valueExpr: 'text',
            displayExpr: 'text',
            dataSource: [
                { text: "HD Video Player" },
                { text: "SuperHD Video Player", disabled: true },
                { text: "SuperPlasma 50", visible: false }
            ],
            placeholder: "Select products..."
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
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
             DxTagBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products"
        valueExpr="text"
        displayExpr="text"
        placeholder="Select products...">
    </dx-tag-box>

##### Vue

    <template>
        <DxTagBox
            :data-source="dataSource"
            value-expr="text"
            display-expr="text"
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
                    { text: 'HD Video Player' },
                    { text: 'SuperHD Video Player', disabled: true },
                    { text: 'SuperPlasma 50', visible: false }
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
        { text: 'HD Video Player' },
        { text: 'SuperHD Video Player', disabled: true },
        { text: 'SuperPlasma 50', visible: false }
    ];

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    valueExpr="text"
                    displayExpr="text"
                    placeholder="Select products..."
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#itemTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component:

---
##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        displayExpr="name"
        valueExpr="id"
        itemTemplate="item">
        <div *dxTemplate="let data of 'item'">
            <img src="{{data.imgSrc}}" />
            <div style="display:inline-block">{{data.name}}</div>
        </div>
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [{
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
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <div>
            <DxTagBox
                :data-source="dataSource"
                display-expr="name"
                value-expr="id"
                item-template="item">
                <template #item="{ data }">
                    <div>
                        <img :src="data.imgSrc" />
                        <div style="display:inline-block">{{data.name}}</div>
                    </div>
                </template>
            </DxTagBox>
        </div>
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
                dataSource: [{
                    id: 1,
                    name: "HD Video Player",
                    imgSrc: "images/products/1-small.png"
                }, {
                    id: 2,
                    name: "UltraHD Player",
                    imgSrc: "images/products/2-small.png"
                }]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';

    const dataSource = [{
        id: 1,
        name: "HD Video Player",
        imgSrc: "images/products/1-small.png"
    }, {
        id: 2,
        name: "UltraHD Player",
        imgSrc: "images/products/2-small.png"
    }];

    const renderItem = (itemData) => {
        return (
            <div>
                <img src={itemData.imgSrc} />
                <div style={{display: "inline-block"}}>{itemData.name}</div>
            </div>      
        );
    };

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    displayExpr="name"
                    valueExpr="id"
                    itemRender={renderItem}
                />
            );
        }
    }

    export default App;

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    const tagBoxData = [{
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

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
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

You can also customize an individual item in the drop-down list. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    const tagBoxData = [
        { text: "SuperHD Player"},
        { text: "HD Video Player", template: $("#individualTemplate") },
        // ...
    ];

Using similar techniques, you can also customize tags of the selected items. The template for them should be assigned to the [tagTemplate](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/tagTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#tagTemplate') option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'name',
            tagTemplate: function (itemData, tagElement) {
                tagElement.append("<p><b>" + itemData.name + "</b> (" + itemData.id + ")</p>");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="name"
        tagTemplate="tagTemplate">
        <div *dxTemplate="let data of 'tagTemplate'">
            <p><b>{{data.name}}</b> ({{data.id}})</p>
        </div>
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, name: "HD Video Player", imgSrc: "images/products/1-small.png" },
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
        <div>
            <DxTagBox
                :data-source="dataSource"
                value-expr="id"
                display-expr="name"
                tag-template="tag">
                <template #tag="{ data }">
                    <p><b>{{data.name}}</b> ({{data.id}})</p>
                </template>
            </DxTagBox>
        </div>
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
                    { id: 1, name: "HD Video Player", imgSrc: "images/products/1-small.png" },
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
        { id: 1, name: "HD Video Player", imgSrc: "images/products/1-small.png" },
        // ...
    ];

    const renderTag = (tagData) => {
        return (
            <p><b>{tagData.name}</b> ({tagData.id})</p>
        );
    };

    class App extends React.Component {
        render() {
            return (
                <TagBox
                    dataSource={dataSource}
                    valueExpr="id"
                    displayExpr="name"
                    tagRender={renderTag}
                />
            );
        }
    }

    export default App;

---

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview)

[tags]tagBox, tag box, editor, item appearance, customize, templates, template, tag template
