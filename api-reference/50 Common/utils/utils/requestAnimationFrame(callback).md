---
module: animation/frame
export: request
---
---
##### shortDescription
Makes the browser call a function to update animation before the next repaint.

##### param(callback): function()
The function.

##### return: Number
The current request's ID.

---
This method acts as a normalization of the standard [requestAnimationFrame](https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame) method of the **window** object:

    <!--JavaScript-->
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame

If the API in the code above is not supported, the **DevExpress.utils.requestAnimationFrame(callback)** method calls the function passed as a parameter after an internally set timeout.