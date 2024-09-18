//  OBJECT EXAMPLE

const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    }
};

const karanArjun={
    salary:50000
}
karanArjun.__proto__=employee;


const karanArjun2={
    salary:60000
}
karanArjun2.__proto__=employee;


const karanArjun3={
    salary:70000,
    calcTax(){
        console.log("Tax rate is 30%");             //Same method in both the functions.
    }
}
karanArjun3.__proto__=employee;