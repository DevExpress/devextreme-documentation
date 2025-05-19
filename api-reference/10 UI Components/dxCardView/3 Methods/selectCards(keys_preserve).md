---
id: dxCardView.selectCards(keys, preserve)
---
---
##### shortDescription
Selects cards with specific keys.

##### param(keys): Array<any>
The card keys.

##### param(preserve): Boolean
Specifies whether selected cards should remain selected.

---
This method clears selected rows. To maintain their selection, use `true` as the second argument.

    <!--JavaScript-->{widgetName}Instance.selectRows([5, 10, 12], true);

If DataGrid's key is composite (for example, `key: ['id', 'name']`), call the method like this:

    <!--JavaScript-->{widgetName}Instance.selectRows([ { id: 5, name: 'Alex' }, { id: 10: name: 'Bob' } ], true);