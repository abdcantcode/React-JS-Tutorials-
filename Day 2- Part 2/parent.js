import circle from "./circle.js";
import box from "./box.js";
let parent=()=>{
  return React.createElement('div',null,[box(),circle()]);
}
export default parent;