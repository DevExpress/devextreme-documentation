---
id: GridBase.beginCustomLoading(messageText)
---
---
##### shortDescription
Shows the [load panel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/loadPanel '{basewidgetpath}/Configuration/loadPanel/').

##### param(messageText): String
The text for the load panel to display.

---
Normally, the load panel is invoked automatically while the widget is busy rendering or loading data. Additionally, you can invoke it by calling this method. If you call it without the argument, the load panel displays text specified by the **loadPanel**.[text](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/loadPanel/text.md '{basewidgetpath}/Configuration/loadPanel/#text') option. To specify the appearance of the load panel, use the [loadPanel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/loadPanel '{basewidgetpath}/Configuration/loadPanel/') object. Once invoked from code, the load panel will not hide until you call the [endCustomLoading()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/endCustomLoading().md '{basewidgetpath}/Methods/#endCustomLoading') method.

[note]The load panel invoked from code does not replace the automatically invoked load panel. This circumstance might lead to a situation where the load panel invoked from code suddenly changes its text because it was overridden by the automatically invoked load panel. Therefore, be mindful when invoking the load panel with different text. 

#####See Also#####
#include common-link-callmethods