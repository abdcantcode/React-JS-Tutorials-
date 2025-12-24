//Variables ka concept essentially 

React JS ki file mein tu variable declare kara agar aur use karna chahra return mein ya kahin aur toh usku tu 
aisa use karna dekh

let a=10;

return <div>{a}</div>

Agar jsx mein tu js ka code likha chahra toh usku return se pehle likh mere bhai 
aur jidhar tu {} mein variable ku call karra tu udhar js ke ops kar sakta jaise apne map(), etc

map se tum agar return karre jsx mein toh element return kar sakte 

bhai agar tum {arr.map(function){
  return elem karey aur {elem} nai likhe toh chalta cuz tum baher likhe aur tumaku js ka code chalana bolto waisa 
  toh likhna ich padhta na magar agar return <h1>{elem}</h1> aisa dena padhta
}}

//Props ka concept 
//Props Drilling Essentially

{App("hello","hey")} pelu yeh aur <App name="hello"/> yeh essentially same kaam ich karre na mere bhaiii

<App name="abdullah" num={a}/> String aur numbers aisa dena

toh App.jsx mein jaake function mein props le sakte props ek object hai...agar tum {name,age} bolke daale props ke 
badle toh tum props.age ke badle age bolke use kar sakte essentially