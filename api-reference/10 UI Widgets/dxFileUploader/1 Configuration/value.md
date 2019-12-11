---
default: []
type: array
---
---
##### shortDescription
A read-only option that holds a [File](https://www.w3.org/TR/FileAPI/#dfn-file) instance representing the selected file.

---
Internet Explorer 8 does not support [File API](https://www.w3.org/TR/FileAPI/#dfn-file). That is why in Internet Explorer 8, the **value** option holds an object containing only the **name** field, which specifies the selected file name.

    <!--JavaScript-->
    { name: 'MyFile.dat' }