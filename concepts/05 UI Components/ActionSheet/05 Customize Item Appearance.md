For a minor customization of ActionSheet buttons, you can define [specific fields](/api-reference/10%20UI%20Components/dxActionSheet/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/items/') in button data objects. For example, the following code generates three buttons, the first is not customized, the second is disabled, the [type](/api-reference/_hidden/dxActionSheetItem/type.md '/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/items/#type') of the third button is *danger*.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#actionSheetContainer").dxActionSheet({
            dataSource: [
                { text: "Reply" },
                { text: "Reply All", disabled: true },
                { text: "Delete", type: 'danger' }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-action-sheet
        [dataSource]="actionSheetData"
    </dx-action-sheet>

    <!--TypeScript-->
    import { DxActionSheetModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        actionSheetData = [
            { text: "Reply" },
            { text: "Reply All", disabled: true },
            { text: "Delete", type: 'danger' }
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxActionSheetModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxActionSheet
            :data-source="actionSheetData"
        </DxActionSheet>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxActionSheet from 'devextreme-vue/action-sheet';

    export default {
        components: {
            DxActionSheet
        },
        data() {
            return {
                actionSheetData: [
                    { text: "Reply" },
                    { text: "Reply All", disabled: true },
                    { text: "Delete", type: 'danger' }
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { ActionSheet } from 'devextreme-react/action-sheet';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.actionSheetData = [
                { text: "Reply" },
                { text: "Reply All", disabled: true },
                { text: "Delete", type: 'danger' }
            ];
        }

        render() {
            return (
                <ActionSheet
                    dataSource={this.actionSheetData}
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/#itemTemplate').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#actionSheetContainer").dxActionSheet({
            dataSource: [
                { text: "Reply", icon: 'arrowleft' },
                { text: "Reply All", icon: 'arrowleft' },
                { text: "Forward", icon: 'arrowright' },
                { text: "Delete", icon: 'close' }
            ],
            itemTemplate: function (itemData, itemIndex, itemElement) {
                const linkContainer = $("<div class='action-sheet-button'>");
                linkContainer.append("<a href='#'>" + itemData.text + "</a>");
                itemElement.append(linkContainer);
            }
        });
    });

    <!--CSS-->
    .action-sheet-button {
        margin: 5px;
        padding: 10px;
        border: 1px dotted #080;
        background-color: white;
    }

##### Angular

    <!--HTML-->
    <dx-action-sheet
        [dataSource]="actionSheetData"
        [visible]="isActionSheetVisible"
        itemTemplate="link">
        <div *dxTemplate="let item of 'link'">
            <div class="action-sheet-button">
                <a href="#">{{item.text}}</a>
            </div>
        </div>
    </dx-action-sheet>

    <!--TypeScript-->
    import { DxActionSheetModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        actionSheetData = [
            { text: "Reply" },
            { text: "Reply All" },
            { text: "Forward" },
            { text: "Delete" }
        ];
        isActionSheetVisible: Boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxActionSheetModule
        ],
        // ...
    })

    <!--CSS-->
    .action-sheet-button {
        margin: 5px;
        padding: 10px;
        border: 1px dotted #080;
        background-color: white;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxActionSheet
            v-model:visible="isActionSheetVisible"
            :data-source="actionSheetData"
            item-template="link">
            <template #link="{ data }">
                <div class="action-sheet-button">
                    <a href="#">{{data.text}}</a>
                </div>
            </template>
        </DxActionSheet>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxActionSheet from 'devextreme-vue/action-sheet';

    export default {
        components: {
            DxActionSheet
        },
        data() {
            return {
                isActionSheetVisible: true,
                actionSheetData: [
                    { text: "Reply" },
                    { text: "Reply All" },
                    { text: "Forward" },
                    { text: "Delete" }
                ]
            };
        }
    }
    </script>

    <style>
    .action-sheet-button {
        margin: 5px;
        padding: 10px;
        border: 1px dotted #080;
        background-color: white;
    }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { ActionSheet } from 'devextreme-react/action-sheet';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { isActionSheetVisible: true };
            this.actionSheetData = [
                { text: "Reply" },
                { text: "Reply All" },
                { text: "Forward" },
                { text: "Delete" }
            ];
            this.renderActionSheetItem = (itemData) => {
                return (
                    <div class="action-sheet-button">
                        <a href="#">{itemData.text}</a>
                    </div>
                );
            };
        }

        render() {
            return (
                <ActionSheet
                    visible={this.state.isActionSheetVisible}
                    dataSource={this.actionSheetData}
                    itemRender={this.renderActionSheetItem}
                />
            );
        }
    }

    export default App;

    <!-- tab: styles.css -->
    .action-sheet-button {
        margin: 5px;
        padding: 10px;
        border: 1px dotted #080;
        background-color: white;
    }

---

---
##### jQuery

You can also customize an individual ActionSheet button. For this purpose, declare a template for this button as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->const actionSheetData = [
        { text: "Reply", template: $('#individualTemplate') },
        { text: "Reply All" },
        // ...
    ];

---

#####See Also#####
- [ActionSheet Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ActionSheet/Basics)
- [ActionSheet API Reference](/api-reference/10%20UI%20Components/dxActionSheet '/Documentation/ApiReference/UI_Components/dxActionSheet/')

[tags]action sheet, actionSheet, item appearance, customize, templates, template