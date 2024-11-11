---
id: dxDiagram.Options.nodes.customDataExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a node's custom data.

##### param(data): any
The current node's data object.

##### return: any
A node's custom data.

##### param(value): any
A node's new custom data or `undefined`.

---
This property links custom data from a data source to a diagram node. The node contains the linked data copied from the data source. Changes in the data are reflected in the diagram history. You can use the UI to undo and redo these changes.

A function assigned to this property should do the following:

* Return a node's new custom data when the **value** parameter is set to `undefined`.
* Save a new custom data value to a data storage when the **value** parameter contains a node's custom data. For instance, assign this value to the **obj** parameter's field to save a node's custom data in your data source.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const store = new DevExpress.data.ArrayStore({
            key: 'ID',
            data: employees,
        });
        $('#diagram').dxDiagram({
            nodes: {
                dataSource: store,
                customDataExpr(obj, value) {
                    if (value === undefined)
                        return {
                            Full_Name: obj.Full_Name,
                            Prefix: obj.Prefix,
                            Title: obj.Title,
                        };
                    obj.Full_Name = value.Full_Name;
                    obj.Prefix = value.Prefix;
                    obj.Title = value.Title;
                    return null;
                },
                // ...
        });
    });

    <!-- tab: data.js -->
    const employees = [
        {
            ID: 1,
            Head_ID: 0,
            Full_Name: 'John Heart',
            Prefix: 'Mr.',
            Title: 'CEO',
        }, 
        {
            ID: 2,
            Head_ID: 1,
            Full_Name: 'Samantha Bright',
            Prefix: 'Dr.',
            Title: 'COO',
        },
        // ... 
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram #diagram id="diagram">
        <dxo-nodes
            [dataSource]="dataSource"
            [customDataExpr]="itemCustomDataExpr"
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
        dataSource: ArrayStore;

        constructor(service: Service) {
            this.dataSource = new ArrayStore({
                key: 'ID',
                data: service.getEmployees(),
            });
        }

        itemCustomDataExpr(obj, value) {
            if (value === undefined)
                return {
                    Full_Name: obj.Full_Name,
                    Prefix: obj.Prefix,
                    Title: obj.Title,
                };
            obj.Full_Name = value.Full_Name;
            obj.Prefix = value.Prefix;
            obj.Title = value.Title;
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Employee {
        ID: number;
        Head_ID: number;
        Full_Name: string;
        Prefix: string;
        Title: string;
        }

    const employees: Employee[] = [
        {
            ID: 1,
            Head_ID: undefined,
            Full_Name: 'John Heart',
            Prefix: 'Mr.',
            Title: 'CEO',
        },
        {
            ID: 2,
            Head_ID: 1,
            Full_Name: 'Samantha Bright',
            Prefix: 'Dr.',
            Title: 'COO',
        },
        // ...
    ];

    @Injectable()
    export class Service {
        getEmployees() {
            return employees;
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
                :data-source="dataSource"
                :custom-data-expr="itemCustomDataExpr"
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
                    dataSource: new ArrayStore({
                        key: 'ID',
                        data: service.getEmployees(),
                    }),
                };
            },
            methods: {
                itemCustomDataExpr(obj, value) {
                    if (value === undefined) 
                        return {
                            Full_Name: obj.Full_Name,
                            Prefix: obj.Prefix,
                            Title: obj.Title,
                        };
                    obj.Full_Name = value.Full_Name;
                    obj.Prefix = value.Prefix;
                    obj.Title = value.Title;
                    return null;
                    },
            },
        };
    </script>

    <!-- tab: data.js -->
    const employees = [
        {
            ID: 1,
            Head_ID: 0,
            Full_Name: 'John Heart',
            Prefix: 'Mr.',
            Title: 'CEO',
        },
        {
            ID: 2,
            Head_ID: 1,
            Full_Name: 'Samantha Bright',
            Prefix: 'Dr.',
            Title: 'COO',
        },
        // ...
    ];

    export default {
        getEmployees() {
            return employees;
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
            this.dataSource = new ArrayStore({
                key: 'ID',
                data: this.employees,
            });
        }

        itemCustomDataExpr(obj, value) {
            if (value === undefined)
                return {
                    Full_Name: obj.Full_Name,
                    Prefix: obj.Prefix,
                    Title: obj.Title,
                };
            obj.Full_Name = value.Full_Name;
            obj.Prefix = value.Prefix;
            obj.Title = value.Title;
            return null;
        }

        render() {
            return (
            <Diagram id="diagram">
                <Nodes 
                    dataSource={this.dataSource} 
                    customDataExpr={this.itemCustomDataExpr}>
                </Nodes>
            </Diagram>
            );
        }
    }
    export default App;

    <!-- tab: data.js -->
    const employees = [
        {
            ID: 1,
            Head_ID: 0,
            Full_Name: 'John Heart',
            Prefix: 'Mr.',
            Title: 'CEO',
        }, 
        {
            ID: 2,
            Head_ID: 1,
            Full_Name: 'Samantha Bright',
            Prefix: 'Dr.',
            Title: 'COO',
        },
        // ...
    ];

    export default {
        getEmployees() {
            return employees;
        },
    };

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithTemplatesWithEditing"
}
