Localstorage->5-10 mb rehti bas 

Localstorage.clear() is se clear hojata

SessionStorage bas browser khulla rahe tak chalta

localStorage.setItem('name','Abdullah');
pehle se name set raha toh isku update hojata

localStorage.getItem('name')->Abdullah aajata

localStorage.removeItem('name');

let arr=[12,34];
localStorage.setItem('val',arr);
toh yeh string ke jaisa save hota
aur getItem karey toh aata string ke jaisa

aisich object ku bhi karre toh JSON.stringify karke daalo
localStorage.setItem('obj',JSON.stringify(arr));

Wapis convert karne JSON.parse()