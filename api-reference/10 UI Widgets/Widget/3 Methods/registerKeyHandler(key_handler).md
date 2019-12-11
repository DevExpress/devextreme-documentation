---
##### shortDescription
Registers a handler to be executed when a user presses a specific key.

##### param(key): String
The key.

##### param(handler): function()
The handler.

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