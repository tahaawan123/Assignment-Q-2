// Q2.Evaluating a number game:


// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.

    
import inquirer from "inquirer";

let num :number = 6;
let user_Ans= await inquirer.prompt([{
    name : "nummberGame",
    type:"number",
    message:"Please Enter Your Number :"
}]);

if (user_Ans.nummberGame === num){
    console.log(`Congratulation! Your Entered Number is Equal to the Dynamic Number Value `);
}else if (user_Ans.nummberGame < num ){
console.log(`your Entered Number is less than to the Dynamic Number Value `);   
}
else if (user_Ans.nummberGame > num){
console.log(`your Entered Number is Greater than to the Dynamic Number Value`);

}
else{
    console.log(`Please Enter the Number`);
    
}

