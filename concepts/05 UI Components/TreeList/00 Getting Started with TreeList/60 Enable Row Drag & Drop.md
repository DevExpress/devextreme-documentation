TreeList allows users to drag and drop rows to reorder records or modify the node hierarchy. To configure this feature, specify the following [rowDragging](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/') options:

- [allowReordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/allowReordering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowReordering')
- [allowDropInsideItem](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/allowDropInsideItem.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#allowDropInsideItem')
- [onDragChange](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/onDragChange.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#onDragChange')
- [onReorder](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/rowDragging/onReorder.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/rowDragging/#onReorder')

[note] Sorting overrides row order changes applied using drag and drop. Do not specify initial sort orders (**columns[]**.[sortOrder](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortIndex)) to ensure row drag and drop functions correctly.

---
##### jQuery

    <!-- tab: index.js -->
    const treeList = $("#tree-list").dxTreeList({
        rowDragging: {
            allowDropInsideItem: true,
            allowReordering: true,
            onDragChange(e) {
                const visibleRows = treeList.getVisibleRows();
                const sourceNode = treeList.getNodeByKey(e.itemData.ID);
                let targetNode = visibleRows[e.toIndex].node;

                while (targetNode && targetNode.data) {
                    if (targetNode.data.ID === sourceNode.data.ID) {
                        e.cancel = true;
                        break;
                    }
                    targetNode = targetNode.parent;
                }
            },
            onReorder(e) {
                const visibleRows = e.component.getVisibleRows();
                const sourceData = e.itemData;
                const targetData = visibleRows[e.toIndex].data;

                if (e.dropInsideItem) {
                    e.itemData.HeadID = targetData.ID;
                } else {
                    const sourceIndex = employees.indexOf(sourceData);
                    let targetIndex = employees.indexOf(targetData);

                    if (sourceData.HeadID !== targetData.HeadID) {
                        sourceData.HeadID = targetData.HeadID;
                        if (e.toIndex > e.fromIndex) {
                            targetIndex += 1;
                        }
                    }
                    employees.splice(sourceIndex, 1);
                    employees.splice(targetIndex, 0, sourceData);
                }
                e.component.refresh();
            },
        },
        // ...
    }).dxTreeList("instance");

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .RowDragging(r => r
            .AllowDropInsideItem(true)
            .AllowReordering(true)
            .OnDragChange("handleDragChange")
            .OnReorder("handleReorder")
        )
        @* ... *@
    )

    <script>
        function handleDragChange(e) {
            const targetRow = e.component.getVisibleRows()[e.toIndex];
            if (!targetRow) {
                return;
            }

            const sourceNode = e.component.getNodeByKey(e.itemData.ID);
            let targetNode = targetRow.node;

            while (targetNode && targetNode.data) {
                if (targetNode.data.ID === sourceNode.data.ID) {
                    e.cancel = true;
                    break;
                }
                targetNode = targetNode.parent;
            }
        }

        function handleReorder(e) {
            const treeList = e.component;
            const store = treeList.getDataSource().store();
            const visibleRows = treeList.getVisibleRows();
            const sourceData = e.itemData;
            const targetData = visibleRows[e.toIndex].data;
            const newOrderIndex = targetData.OrderIndex;
            const d = $.Deferred();

            if (e.dropInsideItem) {
                store.update(sourceData.ID, { HeadID: targetData.ID }).then(function() {
                    treeList.refresh().then(d.resolve, d.reject);
                }, d.reject);
            } else {
                store.update(sourceData.ID, {
                    OrderIndex: newOrderIndex,
                    HeadID: targetData.HeadID,
                }).then(function() {
                    treeList.refresh().then(d.resolve, d.reject);
                }, d.reject);
            }

            e.promise = d.promise();
        }
    </script>

    <!-- tab: EmployeeDataController.cs -->
    using System.Linq;
    using System.Text.Json;
    using ASP_NET_Core.Models;
    using DevExtreme.AspNet.Data;
    using DevExtreme.AspNet.Mvc;
    using Microsoft.AspNetCore.Mvc;

    namespace ASP_NET_Core.Controllers;

    public class EmployeeDataController : Controller {

        [HttpPut]
        public IActionResult Update(int key, string values) {
            var employee = EmployeeData.Employees.FirstOrDefault(e => e.ID == key);
            if(employee == null)
                return NotFound();

            var oldOrderIndex = employee.OrderIndex;

            PopulateEmployee(employee, values);

            var newOrderIndex = employee.OrderIndex;

            if (oldOrderIndex != newOrderIndex) {
                employee.OrderIndex = oldOrderIndex;
                var sortedEmployees = EmployeeData.Employees
                    .OrderBy(e => e.OrderIndex)
                    .ToList();

                if (oldOrderIndex < newOrderIndex) {
                    for(var i = oldOrderIndex + 1; i <= newOrderIndex; i++) {
                        sortedEmployees[i].OrderIndex--;
                    }
                } else {
                    for(var i = newOrderIndex; i < oldOrderIndex; i++) {
                        sortedEmployees[i].OrderIndex++;
                    }
                }
                employee.OrderIndex = newOrderIndex;
            }

            return Ok(employee);
        }

    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list>
        <dxo-tree-list-row-dragging
            [allowDropInsideItem]="true"
            [allowReordering]="true"
            [onDragChange]="onDragChange"
            [onReorder]="onReorder"
        ></dxo-tree-list-row-dragging>
        <!-- ... -->
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    import { type DxTreeListTypes } from 'devextreme-angular/ui/tree-list';
    import { EmployeesService, type Employee } from './employees.service';

    // ...
    export class AppComponent {
        employees: Employee[] = [];

        onDragChange(e: DxTreeListTypes.RowDraggingChangeEvent): void {
            const visibleRows = e.component.getVisibleRows();
            const sourceNode = e.component.getNodeByKey(e.itemData.ID);
            let targetNode = visibleRows[e.toIndex].node;

            while (targetNode?.data) {
                if (targetNode.data.ID === sourceNode.data.ID) {
                    e.cancel = true;
                    break;
                }
                const parentNode = targetNode.parent;
                if (!parentNode) {
                    break;
                }
                targetNode = parentNode;
            }
        }

        onReorder(e: DxTreeListTypes.RowDraggingReorderEvent): void {
            const visibleRows = e.component.getVisibleRows();
            const sourceData = e.itemData;
            const targetData = visibleRows[e.toIndex].data;

            if (e.dropInsideItem) {
                e.itemData.HeadID = targetData.ID;
                e.component.refresh().catch(() => {
                    // Handle error silently
                });
            } else {
                let targetIndex = this.employees.indexOf(targetData);

                if (sourceData.HeadID !== targetData.HeadID) {
                    sourceData.HeadID = targetData.HeadID;
                    if (e.toIndex > e.fromIndex) {
                        targetIndex += 1;
                    }
                }

                this.employeesService.reorderEmployees(sourceData, targetIndex);
                this.employees = this.employeesService.getEmployees();
            }
        }
    }

    <!-- tab: employees.service.ts -->
    // ...
    export class EmployeesService {
        reorderEmployees(sourceData: Employee, targetIndex: number): void {
            const sourceIndex = this.employees.indexOf(sourceData);
            this.employees.splice(sourceIndex, 1);
            this.employees.splice(targetIndex, 0, sourceData);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList>
            <DxRowDragging
                :allow-drop-inside-item="true"
                :allow-reordering="true"
                :on-drag-change="onDragChange"
                :on-reorder="onReorder"
            />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxRowDragging, type DxTreeListTypes } from 'devextreme-vue/tree-list';

    const onDragChange = (e: DxTreeListTypes.RowDraggingChangeEvent): void => {
        const visibleRows = e.component.getVisibleRows();
        const sourceNode = e.component.getNodeByKey(e.itemData.ID);
        let targetNode = visibleRows[e.toIndex].node;

        while (targetNode?.data) {
            if (targetNode.data.ID === sourceNode.data.ID) {
                e.cancel = true;
                break;
            }

            if (!targetNode.parent) {
                break;
            }
            targetNode = targetNode.parent;
        }
    };

    const onReorder = (e: DxTreeListTypes.RowDraggingReorderEvent): void => {
        const visibleRows = e.component.getVisibleRows();
        const sourceData = e.itemData;
        const targetData = visibleRows[e.toIndex].data;

        if (e.dropInsideItem) {
            e.itemData.HeadID = targetData.ID;
            employeesService.updateEmployee(e.itemData);
            e.component.refresh().catch(() => {
                // Handle error silently
            });
        } else {
            let targetIndex = employees.value.indexOf(targetData);

            if (sourceData.HeadID !== targetData.HeadID) {
                sourceData.HeadID = targetData.HeadID;
                if (e.toIndex > e.fromIndex) {
                    targetIndex += 1;
                }
            }

            employeesService.reorderEmployees(sourceData, targetIndex);
            employees.value = employeesService.getEmployees();
        }

        e.component.refresh();
    };
    </script>

    <!-- tab: employeeService.ts -->
    let employeeData = [...employees];

    export const employeesService = {
        reorderEmployees: (sourceData: Employee, targetIndex: number): void => {
            const sourceIndex = employeeData.indexOf(sourceData);
            employeeData.splice(sourceIndex, 1);
            employeeData.splice(targetIndex, 0, sourceData);
        },

        // ...
    };

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import { TreeList, RowDragging, type TreeListTypes } from 'devextreme-react/tree-list';
    import { employeesService, type Employee } from './employeesService';

    function App() {
        const [currentEmployees, setCurrentEmployees] = useState<Employee[]>(employeesService.getEmployees());

        const onDragChange = useCallback((e: any) => {
            const visibleRows = e.component.getVisibleRows();
            const sourceNode = e.component.getNodeByKey(e.itemData.ID);
            let targetNode: TreeListTypes.Node<Employee, number> | undefined = visibleRows[e.toIndex].node;

            while (targetNode?.data) {
                if (targetNode.data.ID === sourceNode.data.ID) {
                    e.cancel = true;
                    break;
                }
                targetNode = targetNode.parent;
            }
        }, []);

        const onReorder = useCallback((e: any) => {
            const visibleRows = e.component.getVisibleRows();
            const sourceData = e.itemData;
            const targetData = visibleRows[e.toIndex].data;

            if (e.dropInsideItem) {
                const updatedSourceData = { ...sourceData, HeadID: targetData.ID };
                employeesService.updateEmployee(updatedSourceData);
            } else {
                let targetIndex = currentEmployees.indexOf(targetData);
                if (sourceData.HeadID !== targetData.HeadID) {
                    sourceData.HeadID = targetData.HeadID;
                    if (e.toIndex > e.fromIndex) {
                        targetIndex += 1;
                    }
                }
                employeesService.reorderEmployees(sourceData, targetIndex);
            }

            setCurrentEmployees(employeesService.getEmployees());
            e.component.refresh();
        }, [currentEmployees]);

        return (
            <TreeList>
                <RowDragging
                    onDragChange={onDragChange}
                    onReorder={onReorder}
                    allowDropInsideItem={true}
                    allowReordering={true}
                />
                {/* ... */}
            </TreeList>
        );
    }

    <!-- tab: employeesService.ts -->
    let employeeData = [...employees];

    export const employeesService = {
        reorderEmployees: (sourceData: Employee, targetIndex: number): void => {
            const sourceIndex = employeeData.indexOf(sourceData);
            employeeData.splice(sourceIndex, 1);
            employeeData.splice(targetIndex, 0, sourceData);
        },

        // ...
    };

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/LocalReordering/"
}
