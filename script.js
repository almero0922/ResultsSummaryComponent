const cssColorsNames = ['--LightRed','--OrangeyYellow','--GreenTeal','--CobaltBlue'];
const cssColorsNamesB = ['--LightRedB','--OrangeyYellowB','--GreenTealB','--CobaltBlueB'];
const cssColorsValues = [];
const cssColorsValuesB = [];
cssColorsNames.forEach(element => {
    cssColorsValues.push(window.getComputedStyle(document.documentElement).getPropertyValue(element));
});
cssColorsNamesB.forEach(element => {
    cssColorsValuesB.push(window.getComputedStyle(document.documentElement).getPropertyValue(element));
});

const sumContainers = document.getElementsByClassName('summary-container-ind');
console.log(sumContainers);
/*sumContainers.forEach((element, index) => {
    element.style.backgroundColor = cssColorsValues[index];
});*/
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        for(var i = 0; i < cssColorsValues.length; i++){
            sumContainers[i].style.backgroundColor = cssColorsValuesB[i];
            //let img = 'url('+json[i].icon+')';
            sumContainers[i].children[0].children[0].src = json[i].icon;
            sumContainers[i].children[0].children[1].innerText = json[i].category;
            sumContainers[i].children[0].children[1].style.color = cssColorsValues[i];
            sumContainers[i].children[1].children[0].innerText = json[i].score;
        }
    })
