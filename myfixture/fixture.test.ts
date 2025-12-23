import { assert } from "console";
import myfixture,{ test1, varify } from "./fixture1";

test1("fixture demo",async({age,gender},info)=>{
console.log(age+10,gender.toLowerCase());
let text = gender.toLowerCase();
varify(gender).toBe('female');
console.log("is it pass ?" + info.status)

})