1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  *`.map()` `concat()` `filter()`  to create new object we use `object.assign()`*

- [X] In your own words, describe `actions`, `reducers` and the `store` and their role

  *`actions:` Actions in redux are function that send information or data from application to the store (reducers) and its the only source of information for the store using`(store.dispatch())`*

 in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  *Each piece of action creators must send at least action type and payload`(optional`) to the reducer*

  *`Store` is known as single source of truth because it holds all application state(data) and provide a unidirectional data flow*

- [X] What is the difference between Application state and Component state? When would be a good time to use one over the other?


  *`Application state` use a state container and management framework which allows us to put all state(data) in one location and access anywhere in our application*

  *`Component state` this use native react hooks `useState()` or class component `this.state = {}` to hold application state in a parent container component and pass it down any child that needs to access it*

  *`Good place to use one over the other` This varies based on application requirement ,if the application is big and requires separation of functionality or modularity using `state management frameworks` like `Redux` or `Flux` will be good otherwise for small app `React native` way of holding state is fine*

- [X] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

*`redux-thunk` Redux is action creator or dispatchers are synchronous and only allows action  creators to be an object. `redux-thunk` is a middleware that that intercept between action creators and the reducers, allows us to perform asynchronous request and also return action as a function*
