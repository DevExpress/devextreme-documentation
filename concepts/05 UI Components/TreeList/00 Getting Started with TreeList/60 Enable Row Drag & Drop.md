Users can drag and drop nodes to reorder them or change their hierarchy. To configure these features, enable the [allowReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowReordering) and [allowDropInsideItem](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowDropInsideItem) properties of the [rowDragging](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/) object and implement the [onDragChange](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#onDragChange) and [onReorder](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#onReorder) functions as shown below. For detailed instructions, refer to the [Node Drag & Drop](/Demos/WidgetsGallery/Demo/TreeList/LocalReordering/) demo.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            rowDragging: {
                allowDropInsideItem: true,
                allowReordering: true,
                onDragChange: function(e) {
                    var visibleRows = treeList.getVisibleRows(),
                        sourceNode = treeList.getNodeByKey(e.itemData.ID),
                        targetNode = visibleRows[e.toIndex].node;

                    while (targetNode && targetNode.data) {
                        if (targetNode.data.ID === sourceNode.data.ID) {
                            e.cancel = true;
                            break;
                        }
                        targetNode = targetNode.parent;
                    }
                },
                onReorder: function(e) {
                    var visibleRows = e.component.getVisibleRows(),
                        sourceData = e.itemData,
                        targetData = visibleRows[e.toIndex].data;

                    if (e.dropInsideItem) {
                        e.itemData.HeadID = targetData.ID;
                    } else {
                        var sourceIndex = employees.indexOf(sourceData),
                            targetIndex = employees.indexOf(targetData);

                        if (sourceData.HeadID !== targetData.HeadID) {
                            sourceData.HeadID = targetData.HeadID;
                            if (e.toIndex > e.fromIndex) {
                                targetIndex++;
                            }
                        }
                        employees.splice(sourceIndex, 1);
                        employees.splice(targetIndex, 0, sourceData);
                    }
                    e.component.refresh();
                }
        },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <div id="app-container">
        <dx-tree-list ...
            <!-- ... -->
            <dxo-row-dragging
                [onDragChange]="onDragChange"
                [onReorder]="onReorder"
                [allowDropInsideItem]="true"
                [allowReordering]="true"
            ></dxo-row-dragging>
        </dx-tree-list>
    </div>

    <!-- tab: app.component.ts -->
    // ...

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        selectedEmployee: Employee;

        constructor(service: EmployeesService) {
            this.employees = service.getEmployees();
            // ...
            this.onReorder = this.onReorder.bind(this);
        }
        
        onDragChange(e) {
            let visibleRows = e.component.getVisibleRows(),
              sourceNode = e.component.getNodeByKey(e.itemData.ID),
              targetNode = visibleRows[e.toIndex].node;

            while(targetNode && targetNode.data) {
                if (targetNode.data.ID === sourceNode.data.ID) {
                    e.cancel = true;
                    break;
                }
                targetNode = targetNode.parent;
            }
        }

        onReorder(e) {
            let visibleRows =  e.component.getVisibleRows(),
              sourceData = e.itemData,
              targetData = visibleRows[e.toIndex].data;

            if (e.dropInsideItem) {
                e.itemData.HeadID = targetData.ID;
                e.component.refresh();
            } else {
                let sourceIndex = this.employees.indexOf(sourceData),
                  targetIndex = this.employees.indexOf(targetData);

                if (sourceData.HeadID !== targetData.HeadID) {
                    sourceData.HeadID = targetData.HeadID;
                    if (e.toIndex > e.fromIndex) {
                        targetIndex++;
                    }
                }

                this.employees.splice(sourceIndex, 1);
                this.employees.splice(targetIndex, 0, sourceData);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ... >
                <!-- ... -->
                <DxRowDragging
                    :on-drag-change="onDragChange"
                    :on-reorder="onReorder"
                    :allow-drop-inside-item="true"
                    :allow-reordering="true"
                />
            </DxTreeList>
        </div>
    </template>

    <script>
    import {
        DxTreeList,
        // ...
        DxRowDragging
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            // ...
            DxRowDragging
        },
        data() {
            return {
                employees: service.getEmployees(),
                // ...
            }
        },
        methods: {
            // ...
            onDragChange(e) {
                let visibleRows = e.component.getVisibleRows(),
                  sourceNode = e.component.getNodeByKey(e.itemData.ID),
                  targetNode = visibleRows[e.toIndex].node;

                while (targetNode && targetNode.data) {
                    if (targetNode.data.ID === sourceNode.data.ID) {
                        e.cancel = true;
                        break;
                    }
                    targetNode = targetNode.parent;
                }
            },
            onReorder(e) {
                let visibleRows = e.component.getVisibleRows(),
                  sourceData = e.itemData,
                  targetData = visibleRows[e.toIndex].data;

                if (e.dropInsideItem) {
                    e.itemData.HeadID = targetData.ID;
                    e.component.refresh();
                } else {
                    let sourceIndex = this.employees.indexOf(sourceData),
                      targetIndex = this.employees.indexOf(targetData);

                    if (sourceData.HeadID !== targetData.HeadID) {
                        sourceData.HeadID = targetData.HeadID;
                        if (e.toIndex > e.fromIndex) {
                            targetIndex++;
                        }
                    }
                    this.employees.splice(sourceIndex, 1);
                    this.employees.splice(targetIndex, 0, sourceData);
                    this.employees = this.employees.slice();
                }
            }
        }
    }
    </script>

    // ...

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        // ...
        RowDragging
    } from 'devextreme-react/tree-list';

    // ...

    function App() {
        // ...
        const [currentEmployees, setCurrentEmployees] = useState(employees);
        // ...

        const onDragChange = (e) => {
            let visibleRows = e.component.getVisibleRows(),
              sourceNode = e.component.getNodeByKey(e.itemData.ID),
              targetNode = visibleRows[e.toIndex].node;

            while (targetNode && targetNode.data) {
                if (targetNode.data.ID === sourceNode.data.ID) {
                    e.cancel = true;
                    break;
                }
                targetNode = targetNode.parent;
            }
        }

        const onReorder = (e) => {
            let visibleRows = e.component.getVisibleRows(),
            sourceData = e.itemData,
            targetData = visibleRows[e.toIndex].data,
            employeesReordered = currentEmployees,
            sourceIndex = employeesReordered.indexOf(sourceData),
            targetIndex = employeesReordered.indexOf(targetData);

            if (e.dropInsideItem) {
                sourceData = { ...sourceData, HeadID: targetData.ID };
                employeesReordered = [...employeesReordered.slice(0, sourceIndex), sourceData, ...employeesReordered.slice(sourceIndex + 1)];
            } else {
                if (sourceData.HeadID !== targetData.HeadID) {
                    sourceData = { ...sourceData, HeadID: targetData.HeadID };
                    if (e.toIndex > e.fromIndex) {
                        targetIndex++;
                    }
                }
                employeesReordered = [...employeesReordered.slice(0, sourceIndex), ...employeesReordered.slice(sourceIndex + 1)];
                employeesReordered = [...employeesReordered.slice(0, targetIndex), sourceData, ...employeesReordered.slice(targetIndex)];
            }

            setCurrentEmployees(employeesReordered);
        }

        return (
            <div className="App">
                <TreeList ... >
                    {/* ... */}
                    <RowDragging
                        onDragChange={onDragChange}
                        onReorder={onReorder}
                        allowDropInsideItem={true}
                        allowReordering={true}
                    />
                </TreeList>
                <SelectedEmployee employee={selectedEmployee} />
            </div>
        );
    }

    export default App;

---