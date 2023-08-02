var selectedGender = "";
var selectedValue = 0;
var BMR = 0;
var height = 0;
var weight = 0;
var age = 0;

function changeGender(gender) {
    selectedGender = gender;
}

function changeValue(value) {
    selectedValue = value;
}

function onblurEvent() {
    height = parseFloat(document.getElementById("height").value);
    weight = parseFloat(document.getElementById("weight").value);
    age = parseFloat(document.getElementById("age").value);
}

function calculatorBMR() {
    if (selectedGender === "man") {
        BMR = ((10*weight)+(6.25*height)-(5*age)+5);
    } 
    else {
        BMR = ((10*weight)+(6.25*height)-(5*age)-161);
    }
    if (selectedValue === 1) {
        BMR *= 1.2;
    }
    else if (selectedValue === 2) {
        BMR *= 1.375;
    }
    else if (selectedValue === 3) {
        BMR *= 1.55;
    }
    else if (selectedValue === 4) {
        BMR *= 1.725;
    }
    else if (selectedValue === 5) {
        BMR *= 1.9;
    }

    document.getElementById("bmrResult").innerHTML = "나의 BMR: " + BMR.toFixed(2);
}

var avgAge = ["20~29의 평균 : ", "30~49의 평균 : ", "50이상의 평균 : "];
var avgMan = [1728, 1669.5, 1493.8];
var avgWoman = [1311.5, 1316.8, 1252.5];
var devMan = [368.2, 302.1, 315.3];
var devWoman = [233.0, 225.9, 228.6];

function printAvgMan() {
    var content = '<strong>남자<br></strong>';
    for (var i = 0; i < avgAge.length; i++) {
        content += avgAge[i] + avgMan[i] + ' += ' + devMan[i] + 'kcal<br>';
    }
    return content;
}

function getAvgHTML(avgArray, devArray, gender) {
    var avgHTML = '<strong>' + gender + '<br></strong>';
    for (var i = 0; i < avgAge.length; i++) {
        avgHTML += avgAge[i] + avgArray[i] + ' +- ' + devArray[i].toFixed(1) + 'kcal<br>';
    }
    return avgHTML;
}

function printAvg() {
    var avgManHTML = getAvgHTML(avgMan, devMan, '남자');
    var avgWomanHTML = getAvgHTML(avgWoman, devWoman, '여자');
    document.getElementById("avgResult").innerHTML = avgManHTML + '<br>' + avgWomanHTML;
}

var Button = {
    setColor:function(color) {
        document.querySelector('man').style.backgroundColor=color;
    }
    , setBackgroundColor:function(color) {
        document.querySelector('man').style.backgroundColor=color;
    }
}
function clickedBtn(self) {
    var manBtn = document.querySelector('button[value="man"]');
    var womanBtn = document.querySelector('button[value="woman"]');

    if (self.value === 'man') {
        document.getElementById('man').style.color='blue';
        document.getElementById('woman').style.color='black';
    } else if (self.value === 'woman') {
        document.getElementById('woman').style.color='blue';
        document.getElementById('man').style.color='black';
    }
}

function clickedDayBtn(self) {
    var number = ['1','2','3','4','5'];
    var bnt1 = document.querySelector('button[value="1"]');
    var bnt2 = document.querySelector('button[value="2"]');
    var bnt3 = document.querySelector('button[value="3"]');
    var bnt4 = document.querySelector('button[value="4"]');
    var bnt5 = document.querySelector('button[value="5"]');

    if (self.value === '1') {
        for (var i=0; i<=number.length; i++) {
            if ((i+1)===parseInt(self.value)) {
                document.getElementById(number[i]).style.color='blue';
            }
            else {
                document.getElementById(number[i]).style.color='black';
            }
        }
    }
    else if (self.value === '2') {
        for (var i=0; i<number.length; i++) {
            if ((i+1)===parseInt(self.value)) {
                document.getElementById(number[i]).style.color='blue';
            }
            else {
                document.getElementById(number[i]).style.color='black';
            }
        }
    }
    else if (self.value === '3') {
        for (var i=0; i<number.length; i++) {
            if ((i+1)===parseInt(self.value)) {
                document.getElementById(number[i]).style.color='blue';
            }
            else {
                document.getElementById(number[i]).style.color='black';
            }
        }
    }
    else if (self.value === '4') {
        for (var i=0; i<number.length; i++) {
            if ((i+1)===parseInt(self.value)) {
                document.getElementById(number[i]).style.color='blue';
            }
            else {
                document.getElementById(number[i]).style.color='black';
            }
        }
    }
    else if (self.value === '5') {
        for (var i=0; i<number.length; i++) {
            if ((i+1)===parseInt(self.value)) {
                document.getElementById(number[i]).style.color='blue';
            }
            else {
                document.getElementById(number[i]).style.color='black';
            }
        }
    }
}