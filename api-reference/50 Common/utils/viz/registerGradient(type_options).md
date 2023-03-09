---
id: viz.registerGradient(type, options)
module: common/charts
export: registerGradient
---
---
##### shortDescription
Registers a new gradient.

##### return: String
The fill id.

##### param(type): String
The gradient type: 'linear' or 'radial'.

##### param(options): Object
The gradient's settings.

##### field(options.colors): Array<GradientColor>
The array of gradient colors.

##### field(options.rotationAngle): Number
The rotation angle for linear gradients.

---
Implement this method to register a gradient id. Then, use the id in the component color.fillId field.

[note]

- To correctly export a component with transparent gradient, specify gradient colors in the RGBA format.

- Radial and rotated linear gradients may look slightly different when exported. 

[/note]