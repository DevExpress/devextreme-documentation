---
##### shortDescription
Gets the parameters of the label's [minimum bounding rectangle](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle) (MBR).

##### return: Object
An object with the following content: <i>{ x: numeric, y: numeric, height: numeric, width: numeric }</i>.

---
The object returned by this method contains the X and Y coordinates of the upper-left corner of the MBR. These coordinates are relative to the client area (widget's container). Additionally, the returned object contains the height and width of the MBR.