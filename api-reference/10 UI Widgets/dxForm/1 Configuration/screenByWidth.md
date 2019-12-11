---
default: null
type: function()
---
---
##### shortDescription
Specifies the function returning the screen factor depending on the screen width.

---
The function passed to this option should take on the screen width as a parameter and return a string containing the appropriate screen factor.

    <!--JavaScript-->
    var formOptions: {
        screenByWidth: function(width) {
            if( width < 768 )
                return 'xs';
            if( width < 992 )
                return 'sm';
            if( width < 1200 )
                return 'md';
            return 'lg';
        }
    }

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/ColumnsAdaptability/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>