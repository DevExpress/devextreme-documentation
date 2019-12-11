---
EventForAction: ..\4 Events\drill.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **drill** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's instance.

##### field(e.element): Object
The widget's container.

##### field(e.node): dxtreemapnode
The current node.

---
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the currently displayed node. To learn about node's members that you can use, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

The **onDrill** event handler can be used to enable/disable other widgets bound to **TreeMap**. For example, consider that you have a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/'). A click on it drills the **TreeMap** widget one level up from the current node. But when the root node becomes the current, there is nowhere to drill up. In that case, disable the button in the **onDrill** event handler.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onDrill: function (e) {
            if (!e.node.getParent()) // checks whether the node has a parent; if it doesn't, it is the root node
                buttonInstance.option('disabled', true);
            else
                buttonInstance.option('disabled', false);
        };
    };

Although not provided out-of-the-box, the drill down capability is easy to implement using the API methods. Learn how to do this from the [drillDown()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/drillDown().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown') method description.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/DrillDown/jQuery/Light/"
}
<a href="https://www.youtube.com/watch?v=pCfBYtOcXxw&index=6&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>