alert('مرحباً بك في موقعي! انا آسيه، وسوف احسب درجتك')
let grade = prompt("يرجى إدخال درجتك", 0);
console.log('%c' + grade, 'color: #9514ff');
let message = "";

if (grade > 100) {message =" يرجى إخال قيمة صحيحة بين ال100 و ال0";}
    else if (grade >= 90) {message = " لقد حصلت على امتياز 🥳";}
    else if (grade >= 80) {message = "لقد حصلت على جيد جداً🤩";}
    else if (grade >= 70) {message = "لقد حصلت على جيد🙂";}
    else if (grade >= 60) {message = "لقد حصلت على مقبول😕";}
    else if (grade >= 50) (message = "لقد حصلت على ضعيف☹️";)
    else {message = "راسب💔"}

console.log('%c' + message, 'color: #9514ff');

// جافاسكربت ليست جافا