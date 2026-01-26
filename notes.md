<!-- s1 e4 -->
props means properties which is passed to components

config driven UI

resList, resData
map function
not using keys (not acceptable) <<< index as key >>> unique id is best practice

<!-- e5 -->
top rated restaurant
React hooks (normal JS utility functions)
useState() - generate superful state variable in react
local state variable - super powerful variable

when ever state variable changes, react rerender the components

virtual dom, reconciliation, react fiber - came in react 16
React use reconciliation algo, called react fibre
Vdom is representation of actual dom
Diff algo - finds diff between previous and updated actual dom

acdlite/react-fiber-architecture gitHub

<!-- e6 -->
microservice, monolith - 21:00
useEffect()
 useEffect(() => {}, [])
 it is called by using callback function and a dependency array

   if no dependency array then it will be called on every render
  if dependency array is empty = [] => useEffect is called on initial render (just once)

  useEffect(() =>{
    console.log("useEffect called");
  }, [])

 CORS policy
 searchText, filteredRestaurant
 component re-rendering 1:50:00

 <!-- e7 -->
 useEffect in Body.js
 react router install
 changes in main.jsx
 Error.jsx - useRouteError
 children routes, Outlet is used (I have not used)
 Link component
 Single page application
 2 types of routing
 - client side routing
 - server side routing
 Dynamic routing
 useParams hooks restaurantmenu.jsx // not used
 link routes in body.jsx // not used
 on clicking on restaurants in home page it directs to menu page of 

<!-- e8 -->
let's get classy - class based components

 <!-- e9 -->
 modular code
 create custom hooks - useRestaurantMenu, online/offline
 code splitting, chunking, dynamic bundling, lazy loading, on demand loading, dynamic import all are same terms
 lazy(), Suspense builtin function in react

#########
 not coding just watching videos
#########
custom hooks

<!-- ep 10 -->
tailwind css, not coded

<!-- ep 11 -->
first to 00:23:00
higher order component - func that takes a component inside as input, enhances it and returns a component
code added in RestaurantCard.jsx withPromotedLabel and in Body.jsx

00:23:01 controlled and uncontrolled components
2 layers - UI and Data(state, props, local var, js code) layer

arr.filter, .map
components - RestaurantCategory.jsx, ItemList.jsx

building accordion - at one time one accordion opens, useState hook used 
react dev tools - chrome extension

lifting state up read updated doc - react.dev

Props drilling
React context to avoid Props drilling
UserContext.js
createContext() - comes from react library, hook - useContext, here used for showing logged in user
UserContext.Provider

<!-- ep12 -->
Redux
00:29:00
click add to cart -> dispatches action -> calls reducer function -> modifies slice of redux store
add to cart component is subscribed to cart using selector
till 00:39:45 is theory, refer to screenshot