---
id: dxDiagram.Options.nodes.widthExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a node's width.

##### param(data): any
The current node's data object.

##### return: any
A node's width.

##### param(value): any
A node's new width or `undefined`.

---
A function assigned to this property should do the following:

* Return a node's width when the **value** parameter is set to `undefined`.
* Save a new width value to a data storage when the **value** parameter contains a node's width. For instance, assign this value to the **obj** parameter's field to save a node's width in your data source.

The [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') property specifies the measurement unit.

The example below demonstrates how to specify a node's width depending on the node's type:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#diagram').dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: 'id',
                    data: orgItems,
                }),
                widthExpr: itemWidthExpr,
                // ...
            },
        });

        function itemWidthExpr(obj, value) {
            if (value === undefined)
                obj.width = value;
            else
                return obj.width || (obj.type === 'group' && 1.5) || 1;
            return null;
        }
    });

    <!-- tab: data.js -->
    const orgItems = [
        {
            id: '106',
            name: 'Development',
            type: 'group',
            width: 2,
        },
        {
            id: '112',
            name: 'Ana\nTrujillo',
            level: 'senior',
        },
        // ... 
    ];


##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxo-nodes
            [dataSource]="orgItemsDataSource"
            keyExpr="ID"
            [widthExpr]="itemWidthExpr"
        >
        </dxo-nodes>
    </dx-diagram>


    <!-- tab: app.module.ts -->
    import { DxDiagramModule, DxDiagramComponent } from 'devextreme-angular';
    import ArrayStore from 'devextreme/data/array_store';
    import { Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
        providers: [Service],
    })

    export class AppComponent {
        orgItemsDataSource: ArrayStore;

        constructor(service: Service) {
            this.orgItemsDataSource = new ArrayStore({
                key: 'ID',
                data: service.getOrgItems(),
            });
        }

        itemWidthExpr(obj, value) {
            if (value === undefined) 
                obj.Width = value;
            else 
                return obj.Width || (obj.Type === 'group' && 1.5) || 1;
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class OrgItem {
        ID: string;
        Name: string;
        Type?: string;
        Level?: string;
        Width?: string;
    }

    const orgItems: OrgItem[] = [
        {
            ID: '106',
            Name: 'Development',
            Type: 'group',
            Width: '2',
        },
        {
            ID: '112',
            Name: 'Ana\nTrujillo',
            Level: 'senior',
        },
        // ...
    ];

    @Injectable()
    export class Service {
        getOrgItems() {
            return orgItems;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
        >
            <DxNodes
                :data-source="orgItemsDataSource"
                :width-expr="itemWidthExpr"
            />
        </DxDiagram>
    </template>
    <script>
        import {
            DxDiagram, DxNodes,
        } from 'devextreme-vue/diagram';
        import ArrayStore from 'devextreme/data/array_store';
        import service from './data.js';

        export default {
            components: {
                DxDiagram, DxNodes
            },
            data() {
                return {
                    orgItemsDataSource: new ArrayStore({
                        key: 'id',
                        data: service.getOrgItems(),
                    }),
                };
            },
            methods: {
                itemWidthExpr(obj, value) {
                    if (value === undefined)
                        obj.width = value;
                    else
                        return obj.width || (obj.type === 'group' && 1.5) || 1;
                    return null;
                },
            },
        };
    </script>

    <!-- tab: data.js -->
    const orgItems = [
        {
            id: '106',
            name: 'Development',
            type: 'group',
            width: '2'',
        },
        {
            id: '112',
            name: 'Ana\nTrujillo',
            level: 'senior',
        },
        // ...
    ];

    export default {
        getOrgItems() {
            return orgItems;
        },
    };


##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Diagram, { Nodes } from 'devextreme-react/diagram';
    import ArrayStore from 'devextreme/data/array_store';
    import service from './data.js';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.orgItemsDataSource = new ArrayStore({
                key: 'id',
                data: service.getOrgItems(),
            });
        }

        render() {
            return (
            <Diagram id="diagram">
                <Nodes dataSource={this.orgItemsDataSource}
                    widthExpr={this.itemWidthExpr}
                />
            </Diagram>
            );
        }

        itemWidthExpr(obj, value) {
            if (value === undefined)
                obj.width = value;
            else
                return obj.width || (obj.type === 'group' && 1.5) || 1;
            return null;
        }
    }

    export default App;

    <!-- tab: data.js -->
    const orgItems = [
        {
            id: '106',
            name: 'Development',
            type: 'group',
            width: '2',
        },
        {
            id: '112',
            name: 'Ana\nTrujillo',
            level: 'senior',
        },
        // ...
    ];

    export default {
        getOrgItems() {
            return orgItems;
        },
    };

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding"
}