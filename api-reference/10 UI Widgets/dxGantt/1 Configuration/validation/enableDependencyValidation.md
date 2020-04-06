---
id: dxGantt.Options.validation.enableDependencyValidation
type: Boolean
default: false
---
---
##### shortDescription
Enables [task dependencies](/api-reference/10%20UI%20Widgets/dxGantt/1%20Configuration/dependencies '/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/dependencies/') validation.

---
The **Gantt** allows you to validate relationships between tasks when they are edited.

<div class="simple-table">
<table>
 <tr>
    <th>User Action</th>
    <th>Dependency Type</th>
    <th>Gantt's Reaction</th>
 </tr>
 <tr>
    <td>Move a predecessor task (Task 1) to the left or right.</td>
    <td>**Finish to Start (FS):** <br/>
    ![DevExtreme Gantt - Dependency validation - Finish To Start](~/images/Gantt/fs-move-task1.png) <br/>
    **Start to Start (SS):** <br/>
    ![DevExtreme Gantt - Dependency validation - Start To Start](~/images/Gantt/ss-move-task1.png)
    **Start to Finish (SF):**<br/>
    ![DevExtreme Gantt - Dependency validation - Start To Finish](~/images/Gantt/sf-move-task1.png)
    **Finish to Finish (FF):**<br/>
    ![DevExtreme Gantt - Dependency validation - Finish To Finish](~/images/Gantt/ff-move-task1.png)
    </td>
    <td>The widget moves a successor task (Task 2) forward or backward to the same time interval.</td>
 </tr>
 <tr>
    <td>Move a successor task (Task 2) to the left.</td>
    <td>**Finish to Start (FS):** <br/>
    ![DevExtreme Gantt - Dependency validation - Finish To Start](~/images/Gantt/fs-task2-left-shift.png)
    **Start to Start (SS):** <br/>
    ![DevExtreme Gantt - Dependency validation - Start To Start](~/images/Gantt/ss-task2-left-shift.png)
    **Start to Finish (SF):**<br/>
    ![DevExtreme Gantt - Dependency validation - Start To Finish](~/images/Gantt/sf-task2-left.png)
    **Finish to Finish (FF):**<br/>
    ![DevExtreme Gantt - Dependency validation - Finish To Finish](~/images/Gantt/ff-task2-left.png)
    </td>
    <td>**This change is denied as it violates dependency rules.** <br/>
    <br/>
    The control displays a popup window and suggests the following actions: <br/>
    - Decline the change.
    - Remove the dependency.
    </td>
 </tr>
 <tr>
    <td>Move a successor task (Task 2) to the right.</td>
    <td>**Finish to Start (FS):** <br/>
    ![DevExtreme Gantt - Dependency validation - Finish To Start](~/images/Gantt/fs-task2-right-shift.png)
    **Start to Start (SS):** <br/>
    ![DevExtreme Gantt - Dependency validation - Start To Start](~/images/Gantt/ss-task2-right-shift.png)
    **Start to Finish (SF):**<br/>
    ![DevExtreme Gantt - Dependency validation - Start To Finish](~/images/Gantt/sf-task2-right.png)
    **Finish to Finish (FF):**<br/>
    ![DevExtreme Gantt - Dependency validation - Finish To Finish](~/images/Gantt/ff-task2-right.png)
    </td>
    <td>The control displays a popup window and suggests the following actions: <br/>
    - Decline the change.
    - Remove the dependency.
    - Apply the change. It creates a gap between tasks. Note that you can move tasks forward and backward within this gap while it meets the dependency rules.
    </td>
 </tr> 
</table>
</div>