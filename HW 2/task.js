const rotatotList = document.querySelectorAll('.rotator__case');

let count = 0;
let arrayList = [...rotatotList];

function timeList() {

    if (count < arrayList.length - 1) {
        arrayList.at(count).classList.remove('rotator__case_active');
        count++
        arrayList.at(count).classList.add('rotator__case_active');       
    }  else {
        count = -1;
        timeList();
    }

};

const intervalList = setInterval(timeList, 1000)
