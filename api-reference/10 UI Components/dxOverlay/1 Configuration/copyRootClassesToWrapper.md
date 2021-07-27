---
id: dxOverlay.Options.copyRootClassesToWrapper
type: Boolean
default: false
---
---
##### shortDescription
Copies user-defined classes from the root element to the wrapper element. 

---

The following markup illustrates relations between wrapper and root elements when you set **copyRootClassesToWrapper** to **true**:

    <!--HTML--><body>
        
        <!-- The following is the root element on which the component is initialized. -->
        <!-- Specify classes to be copied to the wrapper element here. -->
        <div id="{widgetname}" class="custom-class" ... ></div>

        
        <!-- The following is the wrapper element. -->
        <!-- User-defined classes ("custom-class" in this example) are automatically copied from the root element. -->
        <div class="dx-overlay-wrapper dx-{widgetname}-wrapper custom-class" ... > 

            <!-- The following element contains toolbars and component content. -->
            <div class="dx-overlay-content" ... >
                <!-- ... -->
            </div>
        </div>
    </body>

