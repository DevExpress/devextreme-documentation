---
##### shortDescription
Indicates whether the node is in the hover state or not.

##### return: boolean
<i>true</i> if the node is in the hover state; <i>false</i> otherwise.

---
[note]When the user hovers the cursor over a group, the group changes its style. The tiles belonging to that group also change their style. However, the **isHovered()** method of the tiles will return *false*, although visually they have entered the hover state.