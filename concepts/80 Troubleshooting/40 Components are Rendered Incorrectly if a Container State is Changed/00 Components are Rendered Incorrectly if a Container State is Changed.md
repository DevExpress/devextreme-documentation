You often may need to put a component inside a container and change the container's visibility ot size. This article addresses the following issues that may occur:

- A container was invisible (`display: none`), then you changed the `display` state, and now the component's layout looks broken.

- You put the DataGrid, PivotGrid, or TreeList inside a Bootstrap Modal, Material Tabs, or Step WIzard. Now the table looks broken and cannot be scrolled and/or displays gray rectangles.

- You changed container's size, and now Toolbar, Menu, or Tabs items overflow the container.

- You changed container's size, and now the Chart's graph and axes look incorrect.

- You changed container's size, and now an empty column appears in DataGrid or TreeList.

This behavior occurs because not all DevExtreme components detect outside resizing out of the box. Currently, only the following components can track container's state changes:

- Popup, Popover, Tooltip in v21.2+ (see <a href="https://js.devexpress.com/New/21_2/#UIComponents" target="_blank">Overlay and Popup Enhancements</a>).
- Charts and Gauges in v22.2+ (see <a href="https://js.devexpress.com/New/22_2/#Data-Visualization" target="_blank">Data Visualization Components - Adapt to Container Resize</a>).

For other components, if a component is initialized when its parent container is not visible, all child elements have zero size during the layout calculation and the component is rendered incorrectly. For proper operation, the component should receive a notification that its container changed size or visibility. The most straightforward solution is to call the corresponding methods of a component:

- [updateDimensions](/api-reference/10%20UI%20Components/GridBase/3%20Methods/updateDimensions().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#updateDimensions') for DataGrid, TreeList, and PivotGrid.
- [repaint](/api-reference/10%20UI%20Components/Widget/3%20Methods/repaint().md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#repaint') for other components (Form, List, Scheduler, etc.).
- [render](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/render().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#render') method for charts (Chart, PieChart, PolarChart, etc.), VectorMap, and RangeSlider (prior v22.2).

---
##### Angular

In Angular, you can utilize bindings if a container is not visible. The following code snippet demonstrates how this solution may look like if a component (DataGrid) should appear when content visibility depends on an external variable.

    <!-- tab: app.component.html -->
    <dx-data-grid *ngIf="activeIndex === 1"></dx-data-grid> 
    <dx-data-grid [visible]="isVisible"></dx-data-grid> 

##### Vue

In Vue, you can utilize bindings if a container is not visible. The following code snippet demonstrates how this solution may look like if a component (DataGrid) should appear when content visibility depends on an external variable.

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid v-if="activeIndex === 1"></DxDataGrid> 
        <DxDataGrid :visible="isVisible"></DxDataGrid> 
    </template>

##### React

In React, you can utilize bindings if a container is not visible. The following code snippet demonstrates how this solution may look like if a component (DataGrid) should appear when content visibility depends on an external variable.

    <!-- tab: App.js -->
    // ...
    
    function App() {
        const  [activeIndex, setActiveIndex] = useState(0);
        const  [isVisible, setIsVisible] = useState(false);

        return (
            <DataGrid visible={isVisible} />
            { activeIndex === 1  && <DataGrid /> }
        );
    }

    export default App();

---    
