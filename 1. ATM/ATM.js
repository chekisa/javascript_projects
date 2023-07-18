// ATM application. Available operations:
// 1. Check balance
// 2. Withdraw money
// 3. Transfer money
// 4. Exit

let newLine = "\r\n";
let balance = 1000;

let message = "1. Check balance" + newLine
+"2. Withdraw money" + newLine
+"3. Transfer money" + newLine
+"4. Exit" + newLine;

let sel_oper = (prompt("Welcome to the ATM app. Choose one of the following options: "+ newLine + message));

switch(sel_oper)
{
    case "1":
        console.log("Your Balance: " + balance);
    break;

    case "2": 
        let withdraw = Number(prompt("Enter the amount you want to withdraw: "));
        if (balance<withdraw){
            console.log("You cannot withdraw more than your balance."+ newLine + "Your Balance: " + balance);
        }else{
            balance = balance - withdraw;
            console.log("Your Current Balance: " + balance);
        }
    break;

    case "3":
        let add_balance = Number(prompt("Enter the amount to deposit: "));
        balance = balance + add_balance;
        console.log("Your current balance: " + balance);
    break;

    case "4":
        alert("Signed out of the system. ");
    break;

    default:
        alert("The option you specified is not available. ");
    break;
}