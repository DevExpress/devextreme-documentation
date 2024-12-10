---
id: utils.requestAnimationFrame(callback)
module: common/core/animation
export: requestAnimationFrame
---
---
##### shortDescription
Makes the browser call a function to update animation before the next repaint.

##### return: Number
The current request's ID.

##### param(callback): function()
The function.

---
This method acts as a normalization of the standard <a href="https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame" target="_blank">requestAnimationFrame</a> method of the **window** object:

    <!--JavaScript-->
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame

If the API in the code above is not supported, the **DevExpress.utils.requestAnimationFrame(callback)** method calls the function passed as a parameter after an internally set timeout.