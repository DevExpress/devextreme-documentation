---
id: dxDataGrid.Options.selection.sensitivity
type: Enums.SelectionSensitivity
default: 'base'
---
---
##### shortDescription
Specifies how to filter selected DataGrid rows based on sensitivity.

---
This property is in effect only if selection is [deferred](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#deferred).

Available values:

- *"base"*    
Strings with different base letters are unequal. Examples: a ≠ b, a = á, a = A.

- *"accent"*    
Strings with different base letters or accents are unequal. Examples: a ≠ b, a ≠ á, a = A.

- *"case"*    
Strings with different base letters or case are unequal. Examples: a ≠ b, a = á, a ≠ A.

- *"variant"*    
Strings with different base letters, accents, diacritic marks, or case are unequal. Other differences may also apply. Examples: a ≠ b, a ≠ á, a ≠ A.