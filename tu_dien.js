function pandemic() {
    let arr_eng = ["banana", "apple", "orange", "pineapple", "watermelon", "i love you"]; // khai báo mảng TA
    let arr_vie = ["chuối", "táo", "cam", "dứa", "dưa hấu", "anh yêu em"]; // khai báo mảng TV
    let string = document.getElementById("string").value;
    let index_eng = 0;
    let result = "";
    for (let i = 0; i < arr_eng.length; i++) {
        if (string == arr_eng[i]) {
            index_eng = i; // 2
            for (let j = 0; j < arr_vie.length; j++) {
                if (index_eng == j) { //2 == 2
                    result = arr_vie[j]; // táo
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}