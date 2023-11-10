To customize views in the MultiView, define an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxMultiView/Configuration/#itemTemplate').

---
##### jQuery

    <!--JavaScript-->
    var multiViewItems = [{
        title: "Personal Data",
        data: { firstName: "John", lastName: "Smith", birthYear: 1986 }
    }, {
        title: "Contacts",
        data: { phone: "(555)555-5555", email: "John.Smith@example.com" }
    }];

    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: multiViewItems,
            itemTemplate: function(itemData, itemIndex, itemElement) {
                var container = $("<div style='margin:25px;'>");
                container.append("<h1>" + itemData.title + "</h1>");

                var info = $("<div style='text-align:left;'>");
                for (var field in itemData.data) {
                    info.append("<p>" + field + ": <b>" + itemData.data[field] + "</b></p>");
                }
                container.append(info);
                itemElement.append(container);
            }
        });
    });

    <!--HTML-->
    <div id="multiViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        itemTemplate="item">
        <div *dxTemplate="let content of 'item'">
            <div style="margin: 25px;">
                <h1>{{content.title}}</h1>
                <div style="text-align: left;">
                    <p *ngFor="let key of getItemKeys(content.data)">
                        {{key}}: <b>{{content.data[key]}}</b>
                    </p>
                </div>
            </div>
        </div>
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        multiViewItems = [{
            title: 'Personal Data',
            data: { firstName: 'John', lastName: 'Smith', birthYear: 1986 }
        }, {
            title: 'Contacts',
            data: { phone: '(555)555-5555', email: 'John.Smith@example.com' }
        }];
        getItemKeys (item) {
            return Object.keys(item);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMultiView
            :data-source="multiViewItems"
            item-template="item">
            <template #item="{ data }">
                <div :style="{ margin: '25px' }">
                    <h1>{{data.title}}</h1>
                    <div :style="{ textAlign: 'left' }">
                        <p v-for="key in getItemKeys(data.data)">
                            {{key}}: <b>{{data.data[key]}}</b>
                        </p>
                    </div>
                </div>
            </template>
        </DxMultiView>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxMultiView from 'devextreme-vue/multi-view';

    export default {
        components: {
            DxMultiView
        },
        data() {
            return {
                multiViewItems: [{
                    title: 'Personal Data',
                    data: { firstName: 'John', lastName: 'Smith', birthYear: 1986 }
                }, {
                    title: 'Contacts',
                    data: { phone: '(555)555-5555', email: 'John.Smith@example.com' }
                }]
            };
        },
        methods: {
            getItemKeys: function(item) {
                return Object.keys(item);
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { MultiView } from 'devextreme-react/multi-view';

    const multiViewItems = [{
        title: 'Personal Data',
        data: { firstName: 'John', lastName: 'Smith', birthYear: 1986 }
    }, {
        title: 'Contacts',
        data: { phone: '(555)555-5555', email: 'John.Smith@example.com' }
    }];

    class App extends React.Component {
        render() {
            return (
                <MultiView
                    dataSource={multiViewItems}
                    itemRender={this.renderItem}
                />
            );
        }

        renderItem(content) {
            return (
                <div style={{ margin: 25 }}>
                    <h1>{content.title}</h1>
                    <div style={{ textAlign: 'left' }}>
                        { 
                            Object.keys(content.data).map(key => {
                                return (
                                    <p key={key}>
                                        {key}: <b>{content.data[key]}</b>
                                    </p> 
                                )}
                            )
                        }
                    </div>
                </div>
            );
        }
    }

    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/MultiView/Overview/"
}

---
##### Angular

You can also customize individual views. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component:

    <!--HTML-->
    <dx-multi-view>
        <dxi-item text="Personal Data"></dxi-item>
        <dxi-item text="Contacts"></dxi-item>
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

##### Vue

You can also customize individual views. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component:

    <!--tab: App.vue-->
    <template>
        <DxMultiView>
            <DxItem text="Personal Data" />
            <DxItem text="Contacts" />
        </DxMultiView>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxMultiView, { DxItem } from 'devextreme-vue/multi-view';

    export default {
        components: {
            DxMultiView,
            DxItem
        }
    };
    </script>

##### React

You can also customize individual views. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component:

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { MultiView, Item } from 'devextreme-react/multi-view';

    class App extends React.Component {
        render() {
            return (
                <MultiView>
                    <Item text="Personal Data"/>
                    <Item text="Contacts"/>
                </MultiView>
            );
        }
    }

    export default App;

##### jQuery

You can also customize individual views. Declare the views as scripts and reference them in the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxMultiView/Configuration/items/#template') property or assign a customization function straight to this property:

    <!--JavaScript-->
    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: [{
                text: "Personal Data",
                template: function() {
                    return $("<p>").text("This is Personal Data View");
                }
            }, {
                text: "Contacts",
                template: $("#individualTemplate")
            }]
        });
    });

    <!--HTML-->
    <div id="multiViewContainer"></div>
    <script id="individualTemplate" type="text/html">
        <p>This is Contacts View</p>
    </script>

---

#####See Also#####
- [MultiView - Switch Between Views](/concepts/05%20UI%20Components/MultiView/10%20Switch%20Between%20Views.md '/Documentation/Guide/UI_Components/MultiView/Switch_Between_Views/')
- [MultiView - Loop the Views](/concepts/05%20UI%20Components/MultiView/15%20Loop%20the%20Views.md '/Documentation/Guide/UI_Components/MultiView/Loop_the_Views/')
- [MultiView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/MultiView/Overview)
- [MultiView API Reference](/api-reference/10%20UI%20Components/dxMultiView '/Documentation/ApiReference/UI_Components/dxMultiView/')

[tags]multi view, multiView, item appearance, customize, templates, template, custom template
