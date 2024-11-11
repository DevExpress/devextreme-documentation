---
id: dxDiagram.Options.edges.customDataExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's custom data.

##### param(data): any
The current edge's data object.

##### return: any
An edge's custom data.

##### param(value): any
An edge's new custom data or `undefined`.

---
This property links custom data from a data source to the diagram edge. The edge contains the linked data copied from the data source. Changes in the data are reflected in the diagram history. You can use the UI to undo and redo these changes.

A function assigned to this property should do the following:

* Return an edge's new custom data when the **value** parameter is set to `undefined`.
* Save a new custom data value to a data storage when the **value** parameter contains an edge's custom data. For instance, assign this value to the **obj** parameter's field to save an edge's custom data in your data source.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#diagram').dxDiagram({
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: 'id',
                    data: orgLinks,
                }),
                customDataExpr(obj, value) {
                    if (value === undefined)
                        return {
                            myCustomField: obj.myCustomField,
                        };
                    obj.myCustomField = value.myCustomField;
                    return null;
                },
                // ...
        });
    });

    <!-- tab: data.js -->
    const orgLinks = [
        {
            id: '124',
            from: '106',
            to: '108',
            myCustomField: 'customValue',
        }, 
        {
            id: '125',
            from: '106',
            to: '109',
        },
        // ... 
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxo-edges
            [dataSource]="orgLinksDataSource"
            [customDataExpr]="linkCustomDataExpr"
        ></dxo-edges>
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
        orgLinksDataSource: ArrayStore;

        constructor(service: Service) {
            this.orgLinksDataSource = new ArrayStore({
                key: 'ID',
                data: service.getOrgLinks(),
            });
        }

        linkCustomDataExpr(obj, value) {
            if (value === undefined)
                return {
                    MyCustomField: obj.MyCustomField,
                };
            obj.MyCustomField = value.MyCustomField;
            return null;
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class OrgLink {
        ID: string;
        From: string;
        To: string;
        MyCustomField: string;
    }

    const orgLinks: OrgLink[] = [
        {
            ID: '124',
            From: '106',
            To: '108',
            MyCustomField: 'customValue',
        }, 
        {
            ID: '125',
            From: '106',
            To: '109',
        },
        // ...
    ];

    @Injectable()
    export class Service {
        getOrgLinks() {
            return orgLinks;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDiagram
            id="diagram"
            ref="diagram"
        >
            <DxEdges
                :data-source="orgLinksDataSource"
                :custom-data-expr="linkCustomDataExpr"
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
                    orgLinksDataSource: new ArrayStore({
                        key: 'id',
                        data: service.getOrgLinks(),
                    }),
                };
            },
            methods: {
                linkCustomDataExpr(obj, value) {
                    if (value === undefined)
                        return {
                            myCustomField: obj.myCustomField,
                        };
                    obj.myCustomField = value.myCustomField;
                    return null;
                },
            },
        };
    </script>

    <!-- tab: data.js -->
    const orgLinks = [
        {
            id: '124',
            from: '106',
            to: '108',
            myCustomField: 'customValue',
        },
        {
            id: '125',
            from: '106',
            to: '109',
        },
        // ...
    ];

    export default {
        getOrgLinks() {
            return orgLinks;
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
            this.orgLinksDataSource = new ArrayStore({
                key: 'id',
                data: service.getOrgLinks(),
            });
        }

        render() {
            return (
            <Diagram id="diagram">
                <Edges 
                    dataSource={this.orgLinksDataSource}
                    customDataExpr={this.linkCustomDataExpr} 
                />
            </Diagram>
            );
        }

        linkCustomDataExpr(obj, value) {
            if (value === undefined)
                return {
                    myCustomField: obj.myCustomField,
                };
            obj.myCustomField = value.myCustomField;
            return null;
        }

        
    }
    export default App;

    <!-- tab: data.js -->
    const orgLinks = [
        {
            id: '124',
            from: '106',
            to: '108',
            myCustomField: 'customValue',
        }, 
        {
            id: '125',
            from: '106',
            to: '109',
        },
        // ...
    ];

    export default {
        getOrgLinks() {
            return orgLinks;
        },
    };

---