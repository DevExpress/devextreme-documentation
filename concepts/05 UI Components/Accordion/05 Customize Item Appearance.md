For a minor customization of Accordion panels, you can define [specific fields](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/items/') in panel data objects. For example, the following code generates three panels, the first and third are not customized, the second is disabled.
   
---

##### jQuery

    <!--JavaScript-->
    var accordionData = [{
        title: "Employee",
        text: "John Smith"
    }, {
        title: "Phone Number",
        text: "(555)555-5555",
        disabled: true
    }, {
        title: "Position",
        text: "Network Administrator"
    }];

    $(function () {
        $("#accordionContainer").dxAccordion({
            dataSource: accordionData
        });
    });

    <!--HTML-->
    <div id="accordionContainer"></div>

##### Angular

    <!--HTML-->
    <dx-accordion
        [dataSource]="accordionData">
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        accordionData = [{
            title: "Employee",
            text: "John Smith"
        }, {
            title: "Phone Number",
            text: "(555)555-5555",
            disabled: true
        }, {
            title: "Position",
            text: "Network Administrator"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAccordion
            :data-source="accordionData">
        </DxAccordion>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxAccordion from "devextreme-vue/accordion";

    export default {
        components: {
            DxAccordion
        },
        data() {
            return {
                accordionData: [{
                    title: "Employee",
                    text: "John Smith"
                }, {
                    title: "Phone Number",
                    text: "(555)555-5555",
                    disabled: true
                }, {
                    title: "Position",
                    text: "Network Administrator"
                }]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Accordion } from 'devextreme-react/accordion';

    const accordionData = [{
        title: "Employee",
        text: "John Smith"
    }, {
        title: "Phone Number",
        text: "(555)555-5555",
        disabled: true
    }, {
        title: "Position",
        text: "Network Administrator"
    }];

    class App extends React.Component {
        render() {
            return (
                <Accordion
                    dataSource={accordionData}
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#itemTemplate') and [itemTitleTemplate](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/itemTitleTemplate.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#itemTitleTemplate'). In Angular and Vue, you can declare it in the markup. In React, you can use a rendering function (shown in the code below) or component

---

##### Angular

    <!--HTML-->
    <dx-accordion
        [dataSource]="accordionData"
        itemTitleTemplate="title"
        itemTemplate="item">
        <div *dxTemplate="let employee of 'title'">
            <span>{{employee.firstName}}&nbsp;</span>
            <span>{{employee.lastName}}</span>
        </div>
        <div *dxTemplate="let employee of 'item'">
            <span>{{employee.birthDate}}&nbsp;</span>
            <span>{{employee.position}}</span>
        </div>
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        accordionData = [{
            firstName: "John", lastName: "Smith",
            birthDate: "1986/03/14",
            position: "Network Administrator"
        }, {
            firstName: "Samantha", lastName: "Jones",
            birthDate: "1972/11/13",
            position: "Technical Writer"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAccordion
            :data-source="accordionData"
            item-title-template="title"
            item-template="item">
            <template #title="{ data }">
                <div>
                    <span>{{ data.firstName }}&nbsp;</span>
                    <span>{{ data.lastName }}</span>
                </div>
            </template>
            <template #item="{ data }">
                <div>
                    <span>{{ data.birthDate }}&nbsp;</span>
                    <span>{{ data.position }}</span>
                </div>
            </template>
        </DxAccordion>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxAccordion from "devextreme-vue/accordion";

    export default {
        components: {
            DxAccordion
        },
        data() {
            return {
                accordionData: [{
                    firstName: "John", lastName: "Smith",
                    birthDate: "1986/03/14",
                    position: "Network Administrator"
                }, {
                    firstName: "Samantha", lastName: "Jones",
                    birthDate: "1972/11/13",
                    position: "Technical Writer"
                }];
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Accordion } from 'devextreme-react/accordion';

    const accordionData = [{
        firstName: "John", lastName: "Smith",
        birthDate: "1986/03/14",
        position: "Network Administrator"
    }, {
        firstName: "Samantha", lastName: "Jones",
        birthDate: "1972/11/13",
        position: "Technical Writer"
    }];

    class App extends React.Component {
        render() {
            return (
                <Accordion
                    dataSource={accordionData}
                    itemTitleRender={this.renderTitle}
                    itemRender={this.renderItem}
                />
            );
        }

        renderTitle(data) {
            return (
                <div>
                    <span>{data.firstName}&nbsp;</span>
                    <span>{data.lastName}</span>
                </div>
            );
        }

        renderItem(data) {
            return (
                <div>
                    <span>{data.birthDate}&nbsp;</span>
                    <span>{data.position}</span>
                </div>
            );
        }
    }

    export default App;

---

If you use jQuery, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for accordion item. To apply this markup, use the **itemTemplate** and **itemTitleTemplate** callback functions as shown in the following code:

---

##### jQuery

    <!--JavaScript-->
    var accordionData = [{
        firstName: "John", lastName: "Smith",
        birthDate: "1986/03/14",
        position: "Network Administrator"
    }, {
        firstName: "Samantha", lastName: "Jones",
        birthDate: "1972/11/13",
        position: "Technical Writer"
    }];

    $(function () {
        $("#accordionContainer").dxAccordion({
            dataSource: accordionData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p>" + itemData.birthDate + "&nbsp;</p>");
                itemElement.append("<p>" + itemData.position + "</p>");
            },
            itemTitleTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<span>" + itemData.firstName + "&nbsp;</span> ");
                itemElement.append("<span>" + itemData.lastName + "</span>");
            }
        });
    });

    <!--HTML-->
    <div id="accordionContainer"></div>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Accordion/Overview/"
}

You can also customize individual items. In Angular, Vue, and React, declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component. When using jQuery, you can declare the items as scripts and reference them in the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/items/#template') property or assign a customization function straight to this property.

---

##### Angular

    <!--HTML-->
    <dx-accordion>
        <dxi-item title="John Smith">
            <span>Network Administrator</span>
        </dxi-item>
        <dxi-item title="Samantha Jones">
            <span>Technical Writer</span>
        </dxi-item>
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAccordion>
            <DxItem title="John Smith">
                <template #default>
                    <div>Network Administrator</div>
                </template>
            </DxItem>
            <DxItem title="Samantha Jones">
                <template #default>
                    <div>Technical Writer</div>
                </template>
            </DxItem>
        </DxAccordion>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxAccordion, { DxItem } from "devextreme-vue/accordion";

    export default {
        components: {
            DxAccordion,
            DxItem
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Accordion, Item } from 'devextreme-react/accordion';

    class App extends React.Component {
        render() {
            return (
                <Accordion>
                    <Item title="John Smith">
                        <span>Network Administrator</span>
                    </Item>
                    <Item title="Samantha Jones">
                        <span>Technical Writer</span>
                    </Item>
                </Accordion>
            );
        }
    }

    export default App;
   
##### jQuery

    <!--HTML-->
    <div id="accordionContainer"></div>
    <script id="individualTemplate" type="text/html">
        <span>Technical Writer</span>
    </script>

    <!--JavaScript-->
    $(function() {
        $("#accordionContainer").dxAccordion({
            items: [{
                title: "John Smith",
                template: function() {
                    return $("<span>").text("Network Administrator");
                }
            }, {
                title: "Samantha Jones",
                template: $("#individualTemplate")
            }]
        });
    });

---

In addition, you can use a 3rd-party template engine to customize UI component appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/UI_Components/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Accordion API Reference](/api-reference/10%20UI%20Components/dxAccordion '/Documentation/ApiReference/UI_Components/dxAccordion/')

[tags]accordion, item appearance, customize, templates