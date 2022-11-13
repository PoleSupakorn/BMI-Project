//การคำนวณ BMI
function sumallBMI()
{
    //ประกาศตัวแปร height และ บังคับให้เป็นตัวเลข โดยใช้ Number และ ให้แสดงใน console
    let height
    let height2
    let height3
    height = prompt("height :")
    height2 = (height)
    height3 = Number(height2)
    console.log(height)

    //ประกาศตัวแปร weight และ บังคับให้เป็นตัวเลข โดยใช้ Number และ ให้แสดงใน console
    let weight
    let weight2
    let weight3
    weight = prompt("weight :")
    weight2 = (weight)
    weight3 = Number(weight2)
    console.log(weight)

    //ประกาศตัวแปรที่จะเก็บค่าของการคำนวณ BMI และ บังคับให้เป็นตัวเลข โดยใช้ Number และ ให้แสดงใน console
    let sumHW = 0
    let sumHW2 = 0
    let sumHW3 = 0
    sumHW = (weight / ((height * height)
    / 10000)).toFixed(2);
    sumHW2 = sumHW
    sumHW3 = Number(sumHW2)

    //คำสั่งให้แสดงค่าให้แจ้งเตือน
    alert("ค่าBMIของคุณคือ(หน้าถัดไป)")
    alert(sumHW3)
    console.log(sumHW3)

    document.getElementById("answer").innerHTML = sumHW3;

}
//เรียกใช้ fucntion//
sumallBMI()


///////////////////////////////////////////////////////////////////
//ส่วนของการแบ่งระดับตามตาราง BMI
let score = prompt("ค่า BMI ของคุณ :")
if(score >= 30){
    //ส่วนเงื่อนไขของคนที่BMIมากกว่าหรือเท่ากับ 30 ขึ้นไป
    document.getElementById("result").innerHTML = "คุณเป็นโรคอ้วนระดับ 3 (สูงสุด) กรุณาลดน้ำหนักโดยเร็ว!"
}else if ( score <= 29.90){
    if (score >= 25){
    document.getElementById("result").innerHTML = "คุณเป็นโรคอ้วนระดับ 2"
    }//ส่วนเงื่อนไขของคนที่BMIต่ำกว่า29.90 แต่มากกว่า 25
    else{
        if ( score <= 24.90){
            if (score >= 23){
                document.getElementById("result").innerHTML = "คุณเป็นโรคอ้วนระดับ 1"
                }//ส่วนเงื่อนไขของคนที่BMIต่ำกว่า24.90 แต่มากกว่า 23
                else{
                    if ( score <= 22.90){
                        if (score >= 18.60){
                            document.getElementById("result").innerHTML = "คุณเป็นคนสุขภาพดี"
                            }//ส่วนเงื่อนไขของคนที่BMIต่ำกว่า22.90 แต่มากกว่า 18.50
                            else{
                                if( score <= 18.50){
                                    document.getElementById("result").innerHTML = "คุณเป็นผอมเกินไป กรุณาเพิ่มน้ำหนัก!"
                                }//ส่วนเงื่อนไขของคนที่BMIต่ำกว่าหรือเท่ากับตั้งแต่ 18.50 ลงไป
                            }
                        }
                    }
                }
        }
}