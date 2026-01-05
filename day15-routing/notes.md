React Router DOM -> React mein routing ke liye kuch bhi nai rehta toh apan yeh use karte /courses se /courses-data-science ki taraf jaane and all types

npm i react-router-dom

React mein routing in built nai rehti jaisa NextJS mein rehti toh use karte apan 

React Router DOM ek Library hai, Tumaku <App> ku wrap karna padhta <BrowserRouter> se in Main.jsx 
Import karo {BrowserRouter} from 'react-router-dom'
-> iney use karta History API

Toh tum woich App.jsx mein 
<Routes>
  <Route path='/' element={<Home/>}>
  <Route path='/about' element={<About/>}>
</Routes>

Toh yeh jo apan karre woh basically CSR hai not SSR

Atleast ek rehna path='/' warna errors aate

Woh pages import karna zaroori hai woh elements mein aare <Home /> types 

Reload nai hona bolto <a> ke badle <Link> use karna apan isse reload nai hota yeh react se milta ismein to='' use karte


