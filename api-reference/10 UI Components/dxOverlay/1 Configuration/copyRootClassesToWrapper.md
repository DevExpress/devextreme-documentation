---
id: dxOverlay.Options.copyRootClassesToWrapper
type: Boolean
default: false
---
---
##### shortDescription
Copies your custom CSS classes from the root element to the wrapper element.

---
This property allows you to use CSS for wrapper element configuration. You can customize the shade, resize, and drag zones.


The following markup illustrates relations between wrapper and root elements when you set **copyRootClassesToWrapper** to **true**:

    <!--HTML--><body>
        
        <!-- The following element is the root element on which the component is initialized. -->
        <!-- Specify classes to be copied to the wrapper element here. -->
        <div id="{widgetname}" class="custom-class" ... ></div>
        
        <!-- The following element is the wrapper element. -->
        <!-- Custom classes are automatically copied from the root element. -->
        <div class="dx-overlay-wrapper dx-{widgetname}-wrapper custom-class" ... > 

            <!-- The following element contains toolbars and component content. -->
            <div class="dx-overlay-content" ... >
                <!-- ... -->
            </div>
        </div>
    </body>
