---
id: Widget.registerKeyHandler(key, handler)
---
---
##### shortDescription
Registers a handler to be executed when a user presses a specific key.

##### param(key): String
A key.

##### param(handler): function()
A handler. Accepts the **keydown** event as the argument. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery.

---
The **key** argument accepts one of the following values:

- *"backspace"*  
- *"tab"*  
- *"enter"*  
- *"escape"*  
- *"pageUp"*  
- *"pageDown"*  
- *"end"*  
- *"home"*  
- *"leftArrow"*  
- *"upArrow"*  
- *"rightArrow"*  
- *"downArrow"*  
- *"del"*  
- *"space"*  
- *"F"*  
- *"A"*  
- *"asterisk"*  
- *"minus"*

A custom handler for a key cancels the default handler for this key.

#####See Also#####
#include common-link-callmethods