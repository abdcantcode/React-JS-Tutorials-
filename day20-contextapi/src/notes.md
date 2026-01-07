Steps:
1. Tum ek context folder banate
2. PostContext etc files banate 
3. Tum phir woich context se app ku wrap karte apne main.jsx mein
4. Woich context folder mein as a children render karte tumhare app ku via props.children
5. context create karo apne woich PostContext folder mein aur ek variable ku assign karo 
6. <Variable.Provider> mein wrap karo woh tumhare {props.children ku}
7. Jo bhi variable hona hai banake woh provider mein value={} bolke pass kardo 
8. Jidhar bhi use karna hai woh value ku udhar useContext call karo assign it to a variable
9. useContext ku tum createContext() ka variable pass karo aur woh variable ku use karo 
10. **Tumaku woh variable export karna padhta 9th mein jo use karre tum taaki useContext ku pass kar sakna firstly