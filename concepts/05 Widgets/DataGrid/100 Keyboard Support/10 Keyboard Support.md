The **DataGrid** widget grants end-users the ability to perform basic operations in that grid using a keyboard. Useful functions of keys and key combinations differ depending on whether a grid is in a normal or editing state. The following table provides an overview of keys and key combinations that can be used in each state of **DataGrid**. Additional information is given in footnotes.

<div class="simple-table">
	<table>
		<tr>
		  <th style="width:15%;">Key / Key Combination</th>
		  <th style="width:40%">Normal State</th>		
		  <th style="width:40%">Editing State</th>
		</tr>
		<tr>
		  <td>Arrow Keys</td>
		  <td>Navigate through data cells</td>		
		  <td>-</td>
		</tr>
		<tr>
		  <td>Enter</td>
		  <td>
			In case of a data cell, switches it into an editing state.
			In case of a group row, collapses/expands the corresponding group.<sup>1</sup>
		  </td>		
		  <td>Saves changes made in a data cell/row and switches it back to a normal state.</td>
		</tr>
		<tr>
		  <td>Esc</td>
		  <td>-</td>		
		  <td>Cancels changes made in a data cell/row and switches it back to a normal state.</td>
		</tr>
		<tr>
		  <td>PageUp</td>
		  <td>Switches the grid to the previous page.<sup>2</sup></td>		
		  <td>Switches the grid to the previous page.<sup>2</sup></td>
		</tr>
		<tr>
		  <td>PageDown</td>
		  <td>Switches the grid to the next page.<sup>2</sup></td>		
		  <td>Switches the grid to the next page.<sup>2</sup></td>
		</tr>
		<tr>
		  <td>Space</td>
		  <td>Selects the data row to which the currently focused cell belongs.<sup>3</sup> Previously selected rows, if any, become unselected.</td>		
		  <td>-</td>
		</tr>
		<tr>
		  <td>Space + Ctrl</td>
		  <td>Selects/deselects the data row to which the currently focused cell belongs. Previously selected rows, if any, remain selected.<sup>4</sup></td>		
		  <td>-</td>
		</tr>
		<tr>
		  <td>Space + Shift</td>
		  <td>Selects/deselects all data rows located between the last selected/deselected row and the currently focused row.<sup>4</sup></td>
		  <td>-</td>
		</tr>
		<tr>
		  <td>Ctrl + Left Click</td>
		  <td>Deselects the clicked data row.<sup>3</sup></td>		
		  <td>-</td>
		</tr>
		<tr>
		  <td>Ctrl + A</td>
		  <td>Selects all grid rows.<sup>3,5</sup></td>		
		  <td>Selects all grid rows.<sup>3,5</sup></td>
		</tr>
		<tr>
		  <td>Ctrl + F</td>
		  <td>Shifts the focus to the search panel.<sup>6</sup></td>		
		  <td>Shifts the focus to the search panel.<sup>6</sup></td>
		</tr>
		<tr>
		  <td>Alt + &#8595;</td>
		  <td>-</td>		
		  <td>Opens a drop-down editor (a select box<sup>7</sup>, a calendar<sup>8</sup>, etc.).</td>
		</tr>
		<tr>
		  <td>Tab</td>
		  <td>Shifts the focus to the next cell in the current row or to the first cell in the next row if the current cell is the last in the current row.</td>		
		  <td>Shifts the focus to the next cell in the current row or to the first cell in the next row if the current cell is the last in the current row.</td>
		</tr>
		<tr>
		  <td>Shift + Tab</td>
		  <td>Shifts the focus to the previous cell in the current row or to the last cell in the previous row if the current cell is the first in the current row.</td>		
		  <td>Shifts the focus to the previous cell in the current row or to the last cell in the previous row if the current cell is the first in the current row.</td>
		</tr>
	</table>
</div>

<div style="font-size:12px">
	<sup>1</sup> - <b>grouping</b> | <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping#allowCollapsing">allowCollapsing</a> must be <i>true</i>.<br />
	<sup>2</sup> - The <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Pager">pager</a> must be visible.<br />
	<sup>3</sup> - <b>selection</b> | <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection#mode">mode</a> must be different from <i>"none"</i>.<br />
	<sup>4</sup> - <b>selection</b> | <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection#mode">mode</a> must be <i>"multiple"</i>.<br />
	<sup>5</sup> - <b>selection</b> | <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection#allowSelectAll">allowSelectAll</a> must be <i>true</i>.<br />
	<sup>6</sup> - The <a href="/Documentation/16_2/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel">search panel</a> must be visible.<br />
	<sup>7</sup> - A select box appears in a data cell when you use a <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup">lookup</a> in a column.<br />
	<sup>8</sup> - A calendar appears in a data cell when a column contains data of a <i>"date"</i> <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns#dataType">type</a>.
</div>