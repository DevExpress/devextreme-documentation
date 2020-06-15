For a minor customization of tiles, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/items/') in item data objects. For example, the following code generates three tiles: the first is disabled, the second is not customized, the third is hidden.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: [
                { text: "Alabama", disabled: true },
                { text: "Alaska" },
                { text: "Arizona", visible: false }
            ]
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tileViewData = [
            { text: "Alabama", disabled: true },
            { text: "Alaska" },
            { text: "Arizona", visible: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData">
    </dx-tile-view>

##### Vue

    <template>
        <DxTileView :data-source="dataSource"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTileView } from 'devextreme-vue/tile-view';

    export default {
        components: {
            DxTileView
        },
        data() {
            return {
                dataSource: [
                    { text: 'Alabama', disabled: true },
                    { text: 'Alaska' },
                    { text: 'Arizona', visible: false }
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TileView } from 'devextreme-react/tile-view';

    const dataSource = [
        { text: 'Alabama', disabled: true },
        { text: 'Alaska' },
        { text: 'Arizona', visible: false }
    ];

    class App extends React.Component {
        render() {
            return (
                <TileView dataSource={dataSource}/>
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#itemTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component:

---
##### Angular

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData"
        [itemMargin]="15"
        [baseItemHeight]="80"
        [baseItemWidth]="140"
        itemTemplate="tile">
        <div class="tile" *dxTemplate="let data of 'tile'">
            <p style="font-size:larger"><b>{{data.name}}</b></p>
            <p>Capital: <i>{{data.capital}}</i></p>
        </div>
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tileViewData = [
            { name: "Alabama", capital: "Montgomery" },
            { name: "Alaska", capital: "Juneau" },
            { name: "Arizona", capital: "Phoenix" },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

    <!--CSS-->
    .tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxTileView
            :data-source="tileViewData"
            :item-margin="15"
            :base-item-height="80"
            :base-item-width="140"
            item-template="tile">
            <template #tile="{ data }">
                <div>
                    <p style="font-size:larger"><b>{{data.name}}</b></p>
                    <p>Capital: <i>{{data.capital}}</i></p>
                </div>
            </template>
        </DxTileView>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTileView from "devextreme-vue/tile-view";

    export default {
        components: {
            DxTileView
        },
        data() {
            return {
                tileViewData: [
                    { name: "Alabama", capital: "Montgomery" },
                    { name: "Alaska", capital: "Juneau" },
                    { name: "Arizona", capital: "Phoenix" },
                    // ...
                ]
            };
        }
    };
    </script>

    <style>
    .tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }
    </style>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import { TileView } from 'devextreme-react/tile-view';

    const tileViewData = [
        { name: "Alabama", capital: "Montgomery" },
        { name: "Alaska", capital: "Juneau" },
        { name: "Arizona", capital: "Phoenix" },
        // ...
    ];
    
    const renderTileItem = (itemData) => {
        return (
            <div>
                <p style={{fontSize: "larger"}}>{itemData.name}</p>
                <p><i>{itemData.capital}</i></p>
            </div>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <TileView
                    items={tileViewData}
                    itemRender={renderTileItem}
                />
            );
        }
    }
    export default App;

    <!--tab: styles.css-->
    .tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for tiles. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#itemTemplate') callback function as shown in the following code:

---
##### jQuery

    <!--JavaScript-->const tileViewData = [
        { name: "Alabama", capital: "Montgomery" },
        { name: "Alaska", capital: "Juneau" },
        { name: "Arizona", capital: "Phoenix" },
        // ...
    ];

    $(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: tileViewData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.addClass("tile");
                itemElement.append(
                    "<p style='font-size:larger'><b>" + itemData.name + "</b></p>",
                    "<p>Capital: <i>" + itemData.capital + "</i></p>"
                )
            }
        });
    });

    <!--CSS-->.tile {
        border-radius: .5em;
        text-align: center;
        color: white;
        background: gray;
    }

---

You can also customize individual tiles. In Angular, Vue, and React, declare them using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxItem/') component. When using jQuery, you can declare the tiles as scripts and reference them in the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/items/#template') option or assign a customization function straight to this option.

---
##### jQuery

    <!--HTML-->
    <div id="tileViewContainer"></div>
    <script id="individualTileTemplate" type="text/html">
        <span>Comment</span>
    </script>

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: [{
                name: "Alaska", 
                capital: "Juneau",
                template: $("#individualTileTemplate")
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view>
        <dxi-item>
            <span>User</span>
        </dxi-item>
        <dxi-item>
            <span>Comment</span>
        </dxi-item>
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxTileView>
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
        </DxTileView>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTileView, { DxItem } from "devextreme-vue/tile-view";

    export default {
        components: {
            DxTileView,
            DxItem
        }
    };
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TileView, Item } from 'devextreme-react/tile-view';

    class App extends React.Component {
        render() {
            return (
                <TileView>
                    <Item>
                        <span>User</span>
                    </Item>
                    <Item>
                        <span>Comment</span>
                    </Item>
                </TileView>
            );
        }
    }

    export default App;

---

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

<a href="/Demos/WidgetsGallery/Demo/Tile_View/ItemTemplate/" class="button orange small fix-width-155" style="margin-right: 5px; width:240px" target="_blank">View Built-In Template Engine Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Tile_View/Item3RdPartyEngineTemplate/" class="button orange small fix-width-155" style="margin-right: 20px; width:240px" target="_blank">View 3rd-Party Template Engine Demo</a>

#####See Also#####
- [TileView - Specify the Size of Tiles](/concepts/05%20Widgets/TileView/03%20Specify%20the%20Size%20of%20Tiles.md '/Documentation/Guide/Widgets/TileView/Specify_the_Size_of_Tiles')
- [TileView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TileView/Overview)
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/')

[tags]tile view, tileView, item appearance, tile appearance, customize, templates, template, custom template
