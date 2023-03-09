---
id: viz.registerPattern(options)
module: common/charts
export: registerPattern
---
---
##### shortDescription
Registers a new pattern.

##### return: String
The fill id.

##### param(options): Object
The pattern settings.

##### field(options.height): Number | String
The pattern height.

##### field(options.template): template
The SVG-based pattern template.

##### field(options.width): Number | String
The pattern width.

---
Implement this method to register a pattern id. Then, use the id in the component color.fillId field.

[note] If you specify width and height of a pattern in percents, the exported component may look different. 