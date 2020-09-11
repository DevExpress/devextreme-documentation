For a minor customization of **Lookup** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/items/') in item data objects. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            valueExpr: 'text',
            displayExpr: 'text',
            dataSource: [
                { text: "HD Video Player" },
                { text: "SuperHD Video Player", disabled: true },
                { text: "SuperPlasma 50", visible: false }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="text"
        displayExpr="text">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [
            { text: "HD Video Player" },
            { text: "SuperHD Video Player", disabled: true },
            { text: "SuperPlasma 50", visible: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup
            :data-source="dataSource"
            value-expr="text"
            display-expr="text"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
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

    import { Lookup } from 'devextreme-react/lookup';

    const dataSource = [
        { text: 'HD Video Player' },
        { text: 'SuperHD Video Player', disabled: true },
        { text: 'SuperPlasma 50', visible: false }
    ];

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={dataSource}
                    valueExpr="text"
                    displayExpr="text"
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#itemTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component:

---
##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="id"
        itemTemplate="lookupItem">
        <div *dxTemplate="let item of 'lookupItem'; let i = index">
            <img src="{{item.imgSrc}}"/>
            <div 
                style="display:inline-block" 
                [style.font-style]="i % 2 == 0 ? 'italic' : 'normal'">
                {{item.name}}
            </div>
        </div>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [{
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
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup
            :data-source="dataSource"
            value-expr="id"
            item-template="item">
            <template #item="{ data, index }">
                <div>
                    <img :src="data.imgSrc"/>
                    <div 
                        :style="{'display': 'inline-block', 'font-style': index % 2 === 0 ? 'italic' : 'normal'}">
                        {{data.name}}
                    </div>
                </div>
            </template>
        </DxLookup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
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
                },
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

    import { Lookup } from 'devextreme-react/lookup';

    const dataSource = [{
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

    const renderItem = (data, index) => {
        return (
            <div>
                <img src={data.imgSrc}/>
                <div 
                    style={{display: 'inline-block', fontStyle: index % 2 === 0 ? 'italic' : 'normal'}}>
                    {data.name}
                </div>
            </div>      
        );
    };

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={dataSource}
                    valueExpr="id"
                    itemRender={renderItem}
                />
            );
        }
    }

    export default App;

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for items. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#itemTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    const lookupData = [{
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
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'name',
            itemTemplate: function (itemData, itemIndex, itemElement) {
                return $("<div />").append(
                            $("<img />").attr("src", itemData.imgSrc),
                            $("<p />").text(itemData.name)
                                    .css("display", "inline-block")
                                    .css("font-style", (itemIndex % 2 == 0) ? "italic" : "normal")
                        );
            }
        });
    });

You can also customize an individual **Lookup** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    const lookupData = [
        { text: "SuperHD Player"},
        { text: "HD Video Player", template: $("#individualTemplate") },
        // ...
    ];

Using similar techniques, you can customize the input field of the **Lookup**. The template for it should be assigned to the [fieldTemplate](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/fieldTemplate.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fieldTemplate') option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'name',
            fieldTemplate: function(itemData, itemElement) {
                return $("<div />").append(
                    $("<img />").attr("src", itemData.imgSrc)
                );
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="id"
        displayExpr="name"
        fieldTemplate="inputField">
        <div *dxTemplate="let item of 'inputField'">
            <img src="{{item.imgSrc}}" />
        </div>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource = [{
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
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup
            :data-source="dataSource"
            value-expr="id"
            display-expr="name"
            field-template="fieldInput">
            <template #fieldInput="{ data }">
                <img :src="data && data.imgSrc"/>
            </template>
        </DxLookup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
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
                },
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

    import { Lookup } from 'devextreme-react/lookup';

    const dataSource = [{
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

    const renderField = (data) => {
        return (
            <img src={data && data.imgSrc}/>
        );
    };

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={dataSource}
                    valueExpr="id"
                    displayExpr="name"
                    fieldRender={renderField}
                />
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Templates/"
}

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Lookup - Customize the Drop-Down Menu](/concepts/05%20Widgets/Lookup/20%20Customize%20the%20Appearance/08%20Customize%20the%20Drop-Down%20Menu.md '/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/Customize_the_Drop-Down_Menu/')

[tags]lookup, item appearance, customize, templates, template, field template
