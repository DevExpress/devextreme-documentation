---
id: dxDiagram.exportTo(format, callback)
---
---
##### shortDescription
Exports the diagram to an image format.

##### param(format): 'svg' | 'png' | 'jpg'
The image format.

##### param(callback): function()
A function to be executed after a diagram image is prepared and allows you to save the image.

---
You should install or reference the <a href="https://github.com/canvg/canvg" target="_blank">canvg</a> plugin to export the diagram to the PNG or JPEG formats with the **exportTo** method.

---
##### jQuery
    <!-- tab: index.html -->
    <head>
        <script src="https://unpkg.com/canvg@3.0.4/lib/umd.js"></script>
        <!-- reference the DevExtreme sources here -->
    </head>

##### Angular   

    <!-- tab: Installation command -->
    npm install --save canvg

    <!-- tab: tsconfig.app.json -->
    {
        "compilerOptions": {
            // ...
            "paths": {
                // ...
                "canvg": [
                    "node_modules/canvg/dist/canvg.min.js"
                ]
            }
        }
    }

##### Vue

    npm install --save canvg

##### React

    npm install --save canvg

---