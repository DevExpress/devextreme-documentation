To customize group headers, specify a [groupTemplate](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#groupTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component. If the template is unspecified, group headers display the **key** data field in bold font.

---
##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxDataSource"
        [grouped]="true"
        groupTemplate="group"
        displayExpr="name"
        valueExpr="count">
        <div *dxTemplate="let data of 'group'">
            <p>{{data.key}} | Count: {{data.overallCount}}</p>
        </div>
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        fruitsVegetables = [{
            key: "Fruits",
            items: [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 }
            ]
        }, {
            key: "Vegetables",
            items: [
                { name: "Potatoes", count: 5 },
                { name: "Tomatoes", count: 9 },
                { name: "Turnips", count: 8 }
            ]
        }];
        tagBoxDataSource: DataSource = new DataSource({
            store: this.fruitsVegetables,
            map: function(groupedItem) {
                let overallCount = 0;
                groupedItem.items.forEach(function(item) {
                    overallCount += item.count;
                })
                return Object.assign(groupedItem, { overallCount: overallCount });
            }
        });
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
            :data-source="tagBoxDataSource"
            :grouped="true"
            group-template="group"
            display-expr="name"
            value-expr="count">
            <template #group="{data}">
                <p>{{data.key}} | Count: {{data.overallCount}}</p>
            </template>
        </DxTagBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';
    import DataSource from "devextreme/data/data_source";

    const fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        key: "Vegetables",
        items: [
            { name: "Potatoes", count: 5 },
            { name: "Tomatoes", count: 9 },
            { name: "Turnips", count: 8 }
        ]
    }];

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                tagBoxDataSource: new DataSource({
                    store: fruitsVegetables,
                    map: function(groupedItem) {
                        let overallCount = 0;
                        groupedItem.items.forEach(function(item) {
                            overallCount += item.count;
                        })
                        return Object.assign(groupedItem, { overallCount: overallCount });
                    }
                })
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';
    import DataSource from "devextreme/data/data_source";

    const fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        key: "Vegetables",
        items: [
            { name: "Potatoes", count: 5 },
            { name: "Tomatoes", count: 9 },
            { name: "Turnips", count: 8 }
        ]
    }];
    
    const renderGroup = (data) => {
        return (
            <p>{data.key} | Count: {data.overallCount}</p>
        );
    };

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.tagBoxDataSource = new DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    let overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    })
                    return Object.assign(groupedItem, { overallCount: overallCount });
                }
            });
        }

        render() {
            return (
                <TagBox
                    dataSource={this.tagBoxDataSource}
                    grouped={true}
                    displayExpr="name"
                    valueExpr="count"
                    groupRender={renderGroup}
                />
            );
        }
    }

    export default App;

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for group headers. To apply this markup, use the [groupTemplate](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#groupTemplate') callback function as shown in the following code.

    <!--JavaScript-->const fruitsVegetables = [{
        // ...
    }];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    let overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    });
                    return $.extend(groupedItem, { overallCount: overallCount })
                }
            }),
            grouped: true,
            groupTemplate: function(groupData, _, groupElement) {
                groupElement.append(
                    $("<p>").text(groupData.key + " | Count: " + groupData.overallCount)
                )
            },
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/GroupedItems/"
}

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [TagBox - Customize Item Appearance](/concepts/05%20Widgets/TagBox/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TagBox/Customize_Item_Appearance/')
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')

[tags]tagBox, group headers appearance, customize, templates, template
