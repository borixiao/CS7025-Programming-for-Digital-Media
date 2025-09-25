
// 建立一組變數
let name = "Pojui";
let age = 25;
let city = "Dublin";

// 改變變數的值
age = 26;

// 建立一個有 5 個項目的陣列
let shoppingList = ["milk", "bread", "butter", "eggs", "sugar"];

// 列出第二和第三項（陣列從 0 開始）
console.log("Second item:", shoppingList[1]); // bread
console.log("Third item:", shoppingList[2]);  // butter

// 建立 playerScore 變數
let playerScore = 0;

// 建立函式：每次呼叫讓 playerScore +1
function addScore() {
    playerScore += 1;
}

// 建立函式：顯示 playerScore 的值
function showScore() {
    console.log("Player Score:", playerScore);
}

// 測試
addScore(); // +1
addScore(); // +1
showScore(); // 輸出 2


// 檢查 playerScore 是奇數還是偶數
function checkScore() {
    if (playerScore % 2 === 0) {
        console.log("Score is even!");
    } else {
        console.log("Score is odd!");
    }
}

// 測試
addScore();  // playerScore = 3
showScore(); // 輸出 3
checkScore(); // 輸出 "Score is odd!"

