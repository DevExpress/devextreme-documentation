---
id: dxDiagram.Options.nodes.heightExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a node's height.

##### param(data): any
The current node's data object.

##### return: any
A node's height.

##### param(value): any
A node's new height or `undefined`.

---
A function assigned to this property should do the following:

* Return a node's new height when the **value** parameter is set to `undefined`.
* Save a new height value to a data storage when the **value** parameter contains a node's height. For instance, assign this value to the **obj** parameter's field to save a node's height in your data source.

The [units](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') property specifies the measurement unit.

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
                heightExpr: itemHeightExpr,
                // ...
            },
        });

        function itemHeightExpr(obj, value) {
            if (value === undefined)
                obj.height = value;
            else
                return obj.height || (obj.type === 'group' && 1) || 0.75;
            return null;
        }
    });

    <!-- tab: data.js -->
    const orgItems = [
        {
            id: '106',
            name: 'Development',
            type: 'group',
            height: 2,
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
            [heightExpr]="itemHeightExpr"
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

        itemHeightExpr(obj, value) {
            if (value === undefined)
                obj.Height = value;
            else 
                return obj.Height || (obj.Type === 'group' && 1) || 0.75;
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class OrgItem {
        ID: string;
        Name: string;
        Type?: string;
        Level?: string;
        Height?: string;
    }

    const orgItems: OrgItem[] = [
        {
            ID: '106',
            Name: 'Development',
            Type: 'group',
            Height: '2',
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
                :height-expr="itemHeightExpr"
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
                itemHeightExpr(obj, value) {
                    if (value === undefined)
                        obj.height = value;
                    else
                        return obj.height || (obj.type === 'group' && 1) || 0.75;
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
            height: '2'',
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
                    heightExpr={this.itemHeightExpr}
                />
            </Diagram>
            );
        }

        itemHeightExpr(obj, value) {
            if (value === undefined)
                obj.height = value;
            else
                return obj.height || (obj.type === 'group' && 1) || 0.75;
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
            height: '2',
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