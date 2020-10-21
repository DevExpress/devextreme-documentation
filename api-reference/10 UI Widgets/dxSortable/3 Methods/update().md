---
id: dxSortable.update()
---
---
##### shortDescription
Updates **Sortable**'s dimensions. Call this method after items are added or their dimensions are changed.

---
Depending on the framework, use this method in different places:

* **jQuery** - immediately after a markup update;

* **React** - in the <a href="https://reactjs.org/docs/hooks-reference.html#useeffect" target="_blank">useEffect</a> hook or in the <a href="https://reactjs.org/docs/react-component.html#componentdidupdate" target="_blank">componentDidUpdate</a> lifecycle method;

* **Angular** - in the ngAfterContentChecked hook;

* **Vue** - in the <a href="https://vuejs.org/v2/api/#updated" target="_blank">updated</a> hook.

#####See Also#####
#include common-link-callmethods