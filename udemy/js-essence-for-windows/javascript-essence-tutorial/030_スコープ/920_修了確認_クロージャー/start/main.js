/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 * 
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 * 
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 * 
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */
const calc = calcFactory(10)
function calc(){
    function plus(num){
        let sum = 0
        sum = 10 +  num
        console.log(sum)
        function minus(){
            let sum2 = 0
            sum2 = sum - 3
            console.log(sum2)
            function multiply(){
                let sum3 = 0
                sum3 = sum2 * 3
                console.log(sum3)
                function divide(){
                    let sum4 = 0
                    sum4 = sum3 % 2
                    console.log(sum4)            
                }
        
            }
        }
    }
}
function calc(){
    plus: sum = 10 +  num
}
calc.plus(5);      // 出力結果 "10 + 5 = 15"
calc.minus(3);     // 出力結果 "15 - 3 = 12"
calc.multiply(3);  // 出力結果 "12 x 3 = 36"
calc.divide(2); 