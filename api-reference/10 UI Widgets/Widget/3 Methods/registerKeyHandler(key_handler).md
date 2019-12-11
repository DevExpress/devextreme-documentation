---
##### shortDescription
Registers a handler when a specified key is pressed.

##### param(key): string
Specifies the key for which to register a handler.

##### param(handler): function
A handler function.

---
The **handler** function is called when the specified **key** is pressed if the widget is focused.

The **key** argument accepts the following values.

- "backspace"  
- "tab"  
- "enter"  
- "escape"  
- "pageUp"  
- "pageDown"  
- "end"  
- "home"  
- "leftArrow"  
- "upArrow"  
- "rightArrow"  
- "downArrow"  
- "del"  
- "space"  
- "F"  
- "A"  
- "asterisk"  
- "minus"

[note]If you specify a custom handler for a key, the default handler for this key is canceled.