# Global State Management with Redux-Toolkit (the control)

I need an example set to show whether global application state is practical using
React hooks, using redux-toolkit as a control since it is acknowledged to handle global
state management in an efficient manner

# The example libraries

There are 2 example applications
   - https://github.com/Mic1/react-redux-global-state
   - https://github.com/Mic1/react-context-global-state

This one is the redux example

## It's all about rendering!

There are published caveats about using React hooks for state management because
of excessive downstream rendering, and it appears to me that anything in the component tree
downstream of "state" or "dispatch":

`const { state, dispatch } = useAppContext();`

gets automatically rerendered whether it needs it or not - which is what I think
I can demonstrate in these 2 examples.

The HomePage - index.js (AntiScrabble) contains Comp1 which contains Comp2 which contains
Comp3, and both examples are littered with console.log('Render '{Comp}) messages

This one opens on :3001 `script "dev": "next dev -p 3001",`
so the other React useContext global state example can open on default :3000

If both are opened side by side with browser consoles opened, the console.log("Render " {component})
messages can be watched .....

-   app inits with HomeScreen/index.js - render: Layout, header, HomePage, Comp1, Comp2, Comp3, VertButtonBar.
    this makes total sense as components all rendered for the first time

Reduce width to mobile - shows "a1" in header "width display" - so menu button appears

Click the menu button several times to toggle the mobile sidebar

On the React example the HomePage/index.js is getting rerendered along with its complete downward tree of Comp1, Comp, Comp3
which of course is really expensive.

Have I made an error coding the React Context version? Or is this what "caveats" means when authors discuss useContext etc?
