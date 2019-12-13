---
id: dxFileManager.Options.customizeThumbnail
type: function(fileItem)
---
---
##### shortDescription
Allows you to provide custom icons to be used as thumbnails.

##### param(fileItem): Object
File or folder parameters.

##### return: String
An icon to use as a thumbnail.

---
This function should return one of the following:

- The icon's URL
- The icon's name if the icon is from the [DevExtreme icon library](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library')
- The icon's CSS class if the icon is from an external icon library (see [External Icon Libraries](/concepts/60%20Themes%20and%20Styles/30%20Icons/50%20External%20Icon%20Libraries.md '/Documentation/Guide/Themes_and_Styles/Icons/#External_Icon_Libraries'))
- The icon in the <a href="https://en.wikipedia.org/wiki/Base64" target="_blank">Base64</a> format

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/CustomThumbnails/"
}