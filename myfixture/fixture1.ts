import{test as mytest} from '@playwright/test'

//mona is the dataType , it contain data 
// type mona ={
// age: number,
// gender : string
// }
//const myfixture =mytest.extend<mona>({ age : 24 , gender : "female"})

 const myfixture =mytest.extend<{age: number,gender :string}>({
    age: 24,
    gender :"female"
})

//To use the datatype , use export
export default myfixture;
export const test1 = myfixture;
export const varify = myfixture.expect;