---
id: dxTreeMap.Options.layoutAlgorithm
acceptValues: 'sliceanddice' | 'squarified' | 'strip'
type: String | function(e)
default: 'squarified'
---
---
##### shortDescription
Specifies the layout algorithm.

##### param(e): Object
Data for implementing a custom layout algorithm.

##### field(e.items): Array<any>
A set of items to distribute. Each object in this array contains the **value** and **rect** fields.<br/>By default, **rect** is **undefined**. It must be assigned an array of the following format: *[x1, y1, x2, y2]*, where *(x1, y1)* and *(x2, y2)* are coordinates of two diagonally-opposite points defining a rectangle.

##### field(e.rect): Array<Number>
The rectangle available for subdivision.    
Contains the X and Y coordinates of two diagonally-opposite points in the following format: *[x1, y1, x2, y2]*.

##### field(e.sum): Number
The sum total value of all nodes on the current level.

---
Layout algorithms determine the position and size of tiles and groups. Therefore, the chosen algorithm plays the definitive role in the resulting look of the widget. **TreeMap** provides the following algorithms out of the box.

* **Squarified**        
This algorithm lays the items out so that the aspect ratio will be closer to 1. In other words, this algorithm tries to make items as square as possible. 

    For more information about this algorithm, refer to the <a href="http://www.win.tue.nl/~vanwijk/stm.pdf" target="_blank">Squarified Treemaps</a> paper.

* **Strip**     
This algorithm is a modification of the *"Squarified"* algorithm. At the beginning, the algorithm has an available area divided into several strips and a set of items to distribute between the strips. Throughout the layout process, a current strip is maintained. For each item to be arranged, the algorithm checks whether or not adding the item to the current strip improves the average aspect ratios of the rectangles in the current strip. If so, the item is added to the current strip. Otherwise, it is added to the next strip.

    The direction of the strips depends on the size of the available area. If the width is greater than the height, the strips are lined up horizontally. If vice versa, vertically.
    
    For more information on this algorithm, see the <a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.145.2634&rep=rep1&type=pdf" target="_blank">Ordered and Quantum Treemaps: Making Effective Use of 2D Space to Display Hierarchies</a> paper.
    
* **Slice and Dice**        
This algorithm uses parallel lines to divide an available area into rectangles representing items. In case of a hierarchical structure, each rectangle representing an item is divided once more into smaller rectangles representing its children, and so on.

    To learn more about this algorithm, refer to the <a href="http://citeseer.ist.psu.edu/viewdoc/download?doi=10.1.1.29.1549&rep=rep1&type=pdf" target="_blank">Tree Visualization with Tree-Maps: a 2D Space-Filling Approach</a> paper.

![DevExpress DevExtreme HTML5 TreeMap Squarified SliceAndDice Strip](/images/ChartJS/TreeMap_layoutAlgorithms.png)

If none of the predefined algorithms satisfy your needs, implement your own algorithm. For this purpose, assign a function to the **layoutAlgorithm** option. Basically, this function should calculate the coordinates of two diagonally-opposite points defining a rectangle and assign them to the needed item. To access a set of items to distribute, use the **items** field of the function's parameter. All available fields of the parameter are listed in the header of this description.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        layoutAlgorithm: function (e) {
            // ...
            e.items.forEach(function(item) {
                // ...
                // Calculating the rectangle for the current item here
                // ...
                item.rect = rectPoints;
            });
        }
    };

In addition, you can change the layout direction. For this purpose, use the [layoutDirection](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/layoutDirection.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutDirection') option.

#include common-ref-enum with {
    enum: "`TreeMapLayoutAlgorithm`",
    values: "`Squarified`, `Strip`, and `SliceAndDice`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/TilingAlgorithms/"
}