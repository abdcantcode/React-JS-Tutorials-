// function hero(){
//   console.log("Hello");
//   return 0;
// }
// var a=hero();//Isse yeh function call hojara aur a mein 0 aajata
// console.log(hero());
//Agar koi function ku console.log karey toh uske andar ka console log aata aur agar uney kuch return nai karra toh undefined aata uney return karra toh woh value aati warna nai aati kuch bhi 

//React aur React Dom alag alag cheezan hai react ku dom se connect karne use hota react dom 
// let h1=document.createElement('h1');
// h1.innerHTML='Kya bolte ho ladlo';
// let body=document.querySelector('body');
// body.appendChild(h1);

//Trying to the same using react js basically
let h1=React.createElement('h1',null,"Mai hu abdullah lala");
//body ku kabhi bhi root nai banana lala
let dabba=document.querySelector('.container');
var root=ReactDOM.createRoot(dabba);
root.render(h1);
//Crazy kardiye khaliiiiiiii

let h2=React.createElement('h2',{className:'nallu'},"This is a h2");//yeh id ya classname dene ku kaam mein aata 
root.render(h2);
// root.render(h1,div);//Yeh kaam nai karta
// root.render([h2,h1])//Yeh kar sakte lekin yeh sahi nai h ig... Lekin yeh karne se better yeh hai ki

//toh aap ab yeh karo ki h1 aur h2 ke liye ek div lelo basically
let div=React.createElement('div',null,[h1,h2])
root.render(div); //Yeh hai best tareekha according to the abdullah don