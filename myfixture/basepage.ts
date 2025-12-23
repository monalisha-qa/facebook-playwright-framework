import RegisterPage from "../POM/Register";
import LoginPage from "../POM/Login";
import HomePage from "../POM/Home";
import Special_hotPage from "../POM/Special_hot";

import {test as mytest} from '@playwright/test'

// type pages ={
//     registerPage : RegisterPage, 
//     loginPage : LoginPage,
//     homepage : Homepage;
// }

//insteaded of using type directly we create the references
const test = mytest.extend<{
    registerPage : RegisterPage,
    loginPage : LoginPage,
    homepage : HomePage,
    specialhot : Special_hotPage
     //based on the concept of var b:string ;
    //data/object: type or class
    
}>({
    //For referances we are creating the objects (constructor)
    registerPage :async({page},use)=>{
        await use(new RegisterPage(page));
    },

    loginPage:async({page},use)=>{
        await use(new LoginPage(page))
    },

    homepage :async({page},use)=>{
        await use(new HomePage(page))
    },

    specialhot:async({page},use)=>{
        await use(new Special_hotPage(page))
    }

})
export default test;
export const expect = test.expect;
