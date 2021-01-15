---
id: dxTreeMapNode.drillDown()
---
---
##### shortDescription
Drills down into the node.

---
When the data source has several hierarchical levels, you may need to enable the user to navigate between them. The movement from the higher to the lower hierarchical level is called *"drilling down"*. The movement backwards is called *"drilling up"*. Although not provided out-of-the-box, this capability is easy to implement using the **drillDown()** and [drillUp()](/api-reference/10%20UI%20Components/dxTreeMap/3%20Methods/drillUp().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Methods/#drillUp') methods.

Usually, drilling down is performed when the user clicks a group of tiles in the UI component. For example, the following code shows the [onClick](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onClick') event handler where the **drillDown()** method is called of the clicked node.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onClick: function (e) {
            e.node.drillDown();
        }    
    };
    
To implement drilling up, bind another UI component to **TreeMap**, e.g., [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/'). When the user clicks the button, the treemap navigates one level up using its **drillUp()** method. Alternatively, a click on the button may navigate the user straight to the root node using the [resetDrillDown()](/api-reference/10%20UI%20Components/dxTreeMap/3%20Methods/resetDrillDown().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Methods/#resetDrillDown') method of the treemap. Note that the following code configures the **onClick** handler of the button, not of the treemap.

    <!--JavaScript-->var buttonOptions = {
        // ...
        onClick: function (e) {
            treeMapInstance.drillUp();
            // treeMapInstance.resetDrillDown();
        }    
    };
    
When the user drills up or down, the [drill](/api-reference/10%20UI%20Components/dxTreeMap/4%20Events/drill.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Events/#drill') event fires. To handle it, implement the [onDrill](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/onDrill.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#onDrill') event handler.
