import{test as mytest} from '@playwright/test'

//mona is the dataType , it contain data 
type mona =[
age : 24,
gender : "Female"
]

 const myfixture =mytest.extend<mona>({
})

//To use the datatype , use export
export const test1 = myfixture;