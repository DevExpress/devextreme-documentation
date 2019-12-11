---
##### shortDescription
Switches a grid to a specified page.

##### param(newIndex): Number
The index of the page to switch to.

##### return: Promise<void>
A Promise that is resolved after the page is shown. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
This method allows you to switch between pages without using the [pager](/concepts/05%20Widgets/DataGrid/35%20Paging/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Paging/#User_Interaction') or [scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/'). Note that the page index, which is passed as the argument to the **pageIndex(newIndex)** method, is one number less than the page number.

#####See Also#####
#include common-link-callmethods