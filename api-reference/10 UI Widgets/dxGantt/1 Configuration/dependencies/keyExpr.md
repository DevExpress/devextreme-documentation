---
id: dxGantt.Options.dependencies.keyExpr
type: String | function()
default: 'id'
---
---
##### shortDescription
Specifies the data field that provides keys for dependencies.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            dependencies: {
                dataSource: dependencies,
                keyExpr: "key"
            },
            // your code
        });
    });
    <!-- tab: data.js -->
    var dependencies = [{
        'key': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];

##### Angular

    <!-- tab: app.service.ts -->
    export class Dependency {
        key: number;
        predecessorId: number;
        successorId: number;
        type: number;
    }
    let dependencies: Dependency[] = [{
        'key': 0,
        'predecessorId': 1,
        'successorId': 2,
        'type': 0
    },
    // ...
    ];
    <!-- tab: app.component.html -->
    <dx-gantt >
        <dxo-dependencies [dataSource]="dependencies" [keyExpr]="key" ></dxo-dependencies>
        // ...
    </dx-gantt>
    
---
