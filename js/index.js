function triangleBtn(){
    const hValue = getInputValue("triangle-b-field");
    // console.log(hValue);
    const wValue = getInputValue("triangle-w-field");
    // console.log(wValue);
    const areaValue = 0.5 * hValue * wValue ;
    // console.log(areaValue);
    valueSetInArel("triangle-area-value", areaValue);
};

function getInputValue(inputFieldId){
    const inputFileldValue = document.getElementById(inputFieldId);
    const inputFileldStringValue = inputFileldValue.value;
    const inputFileldNumberValue = parseFloat(inputFileldStringValue);
    // inputFileldStringValue = ""; 
    return inputFileldNumberValue;
};

function valueSetInArel(areaId, areaValue) {
    const areaSpan = document.getElementById(areaId);
    areaSpan.innerText = areaValue;
};