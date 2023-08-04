This situation usually occurs when none of the component parent elements has a fixed height.

If the height of the component's parent is relative, the parent ancestor should have a fixed height. If there are multiple ancestors with relative heights, at least one should have a fixed height.

If you want to fill up the entire vertical space and cannot use fixed heights, set `100%` height for all parents up to `<html>`.