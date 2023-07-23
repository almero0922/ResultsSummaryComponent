fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
const cssColorsNames = ['--LightRed','--OrangeyYellow','--GreenTeal','--CobaltBlue'];
const cssColorsValues = [];
cssColorsNames.forEach(element => {
    cssColorsValues.push(window.getComputedStyle(document.documentElement).getPropertyValue(element));
});
console.log(cssColorsValues);