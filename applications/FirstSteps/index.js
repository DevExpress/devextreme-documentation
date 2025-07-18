$(() => {
  $("#progress").dxProgressBar({
    min: 0,
    max: 100,
    value: 50,
    showStatus: true,
    statusFormat: (v) => `Completed: ${v * 100}%`
  });

  const tasks = [
    { id: 1, task: "Buy groceries", dueDate: new Date(), done: false },
    { id: 2, task: "Write a blog post", dueDate: new Date(), done: true }
  ];

  const grid = $("#task-grid")
    .dxDataGrid({
      dataSource: tasks,
      keyExpr: "id",
      columns: ["task", "dueDate", "done"],
      editing: {
        mode: "cell",
        allowUpdating: true,
        allowAdding: true,
        allowDeleting: true,
        newRowPosition: "last"
      },
      onRowUpdated: updateProgress,
      onRowInserted: updateProgress,
      onRowRemoved: updateProgress
    })
    .dxDataGrid("instance");

  function updateProgress() {
    const all = tasks.length;
    const completed = tasks.filter((t) => t.done).length;
    $("#progress")
      .dxProgressBar("instance")
      .option("value", Math.round((completed / all) * 100));
  }
});
