---
id: BaseWidget.Options.pathModified
type: Boolean
default: false
notUsedInTheme: 
---
---
##### shortDescription
Notifies the widget that it is embedded into an HTML page that uses a tag modifying the path.

---
If you place the widget on a page that uses a tag modifying the path (<a href="http://www.w3schools.com/tags/tag_base.asp" target="_blank">`<base>`</a>, <a href="http://www.w3schools.com/tags/tag_iframe.asp" target="_blank">`<iframe>`</a>, etc.), some of the widget elements may get mixed up or disappear. To solve this problem, set the **pathModified** option to **true**.

#####See Also#####
- [DevExpress.viz.refreshPaths()](/api-reference/50%20Common/utils/viz/refreshPaths().md '/Documentation/ApiReference/Common/utils/viz/#refreshPaths')