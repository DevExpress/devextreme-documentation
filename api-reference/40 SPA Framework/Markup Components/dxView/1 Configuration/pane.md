---
default: 'detail'
acceptValues: 'master' | 'detail'
type: String
---
---
##### shortDescription
Specifies whether to display the view in the 'master' or 'detail' pane of the [Split](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/3%20Split%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Split_Layout') layout.

---
Use this option if the view is displayed within the predefined [Split](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/3%20Split%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Split_Layout')  layout. Usually, a list view is displayed in the 'master' pane and a detail view is displayed in the 'detail' pane.

[note]If you navigate from the Split layout to a view displayed within a non-Split layout, set the pane option of the target view to "master". Otherwise, this view can be put to the "details" navigation stack, which can cause unexpected behavior.