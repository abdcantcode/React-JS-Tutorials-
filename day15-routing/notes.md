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

These both need to be imported as well

Toh yeh jo apan karre woh basically CSRouting

Atleast ek rehna path='/' warna errors aate

Woh pages import karna zaroori hai woh elements mein aare <Home /> types 

Reload nai hona bolto <a> ke badle <Link> use karna apan isse reload nai hota yeh react se milta ismein to='' use karte iske liye tumaku import bhi karna padhta link ku

Agar tum chahre ki kuch change nai hona toh usku routes ke baher likho jaisa YT ka search change nai hota upon moving to different routes, udhar bhi waisich same rehta woh tum kar sakte

<Route path='/about/:id' element={<Kuchbhi/>}/> Dynamic page banana bolto tum about ke baad kuch bhi likhlo woh page ku jaate

Tum :id ki jagah kuch bhi rakh sakte aur udhar pass kar sakte laadleeee I mean id tum agar dere toh useParams() se call karke ek variable mein store kar sakte aur woh tumaku <Kuchbhi/> pe milta usse tumaku jo dikhana hai dikhao laadle

Yeh work karta similar to apna props but with links essentially
