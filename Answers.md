1. What problem does the context API help solve?
    A. ContextAPI provides a way to share values throughout different components without having to prop drill through every level.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    A reducer takes in two arguements, an action and a state and returns an object based on the action taken on the state.
    An action takes an action type and "payload" and this is used to update the store. It's the only thing that can update the state in the store.
    Store is a a place to STORE all of the various states which can be altered by actions and the information from the store can be passed down to other components.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is held globally and can be passed down to many components (store) and the component state is held inside the component only and only the component can change it. Application state can be used to pass down certain props that are needed to various components and and can be changed with actions. Component state can be used for somemthing like an input that will only change inside that component and passed down if necessary.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux thunk is the middleware that loads while another request is also loading. If a request for data is taking too long, the thunk/middleware will remain active longer displaying something like "Loading your smurfs" if you have it implemented. It can also run other functions as long as it is put in the actions. Multitasking under the hood.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Neither. I dislike them both equally. I'm leaning more towards redux although ContextAPI seems like it may be simpler for smaller projects.
