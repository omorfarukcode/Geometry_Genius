
// Triangle 
function triangleBtn(){
    const hValue = getInputValue("triangle-b-field");
    // console.log(hValue);
    const wValue = getInputValue("triangle-w-field");
    // console.log(wValue);
    if(isNaN(hValue) || isNaN(wValue)){
        alert("is not a number");
        return;
    };
    const areaValue = 0.5 * hValue * wValue ;
    // console.log(areaValue);
    valueSetInArel("triangle-area-value", areaValue);


    calculation("Triangle", areaValue );
};
// Rectangle 
function rectangleBtn(){
    const rectangleWidth = getInputValue("rectangle-w");
    const rectangleHight = getInputValue("rectangle-h");
    if(isNaN(rectangleWidth) || isNaN(rectangleHight)){
        alert("haahaha");
        return;
    }
    const value = rectangleWidth * rectangleHight ;
    valueSetInArel("rectangle-value", value);

    calculation("Rectangle", value );
}
// Parallelogram 
function parallelogram(){
    const parallelogramBase = getInputValue("parallelogram-base");
    const parallelogramHight = getInputValue("parallelogram-hight");
    if(isNaN(parallelogramBase) || isNaN(parallelogramHight)){
        alert("lololo");
        return;
    }
    const parallelogramValue = parallelogramBase * parallelogramHight;
    valueSetInArel("parallelogram-value", parallelogramValue);


    calculation("Parallelogram", parallelogramValue );


}


function getInputValue(inputFieldId){
    const inputFileldValue = document.getElementById(inputFieldId);
    const inputFileldStringValue = inputFileldValue.value;
    const inputFileldNumberValue = parseFloat(inputFileldStringValue);
    // inputFileldStringValue = ""; 
    return inputFileldNumberValue;
};

function valueSetInArel(areaId, areaValue){
    const areaSpan = document.getElementById(areaId);
    areaSpan.innerText = areaValue;
};

function calculation(areaType, area){
    // console.log(areaType + " " + area);
    const calculationEntry = document.getElementById("calculation-entry");
    const p = document.createElement("p");
    // p.innerHTML = areaType + " " + area ;
    const count = calculationEntry.childElementCount;
    p.classList.add("my-2")
    p.innerHTML = `${count + 1 + "."} ${areaType} ${area}cm<sup>2</sup> <button class="btn btn-success">Convert</button>`
    calculationEntry.appendChild(p);

}

// function valitation (input1, input2){
//     if(isNaN(input1) || isNaN(input2)){
//         alert("is not a number");
//         return;
//     };
// };

