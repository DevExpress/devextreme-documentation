---
type: object | array
---
---
##### shortDescription
Specifies the item location and size against the widget grid.

---
If you need to specify different locations for different screen factors, pass an array of objects with the same structure to the **location** field.

    <!--HTML-->
    <div class="header" data-options="dxItem: { 
        location: [
            { row: 0, col: 0, colspan: 3, screen: 'lg'},
            { row: 0, col: 0, colspan: 2, screen: 'xs sm md'}]
    }">Header</div>