React.js offers <a href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components" target="_blank">two ways</a> to access and influence your components' state and content.

Components that use the *controlled* state management mode rely on external (React-based) logic for data storage and state management. They receive data from their parents through *props*, and use *callbacks* to notify their parent of state updates. The official React documentation recommendeds this approach for most users.

Components that use the *uncontrolled* state management mode are self-contained. Like traditional HTML, they store data directly inside the DOM. You can use`refs` to access this data.

[tags] react