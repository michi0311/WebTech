calculate = (width, height, thickness) => {
    const color = document.querySelector('#color').value;
    const red = color.substr(1, 2);
    const green = color.substr(3, 2);
    const blue = color.substr(5, 2);
    if (red === green && green === blue) { // grey glass
        return (width * height * thickness) / 100;
    } else {
        return (width * height * thickness) / 64;
    }
}

update = () => {
    var priceText = document.getElementById('price');
    if (!document.getElementById('width').checkValidity()) {
        priceText.value = '-'
    } else if (!document.getElementById('height').checkValidity()) {
        priceTex.value = '-'
    } else {
        const width = document.querySelector('#width').value;
        const height = document.querySelector('#height').value;
        const thicknessArray = document.getElementsByName('thickness');
        const quantityOptions = document.getElementById('Qty');
        const quantity = quantityOptions.options[quantityOptions.selectedIndex].value
        var thickness = 0;
        thicknessArray.forEach(element => {
            if (element.checked) {
                thickness = element.value;
            }
        });

        var price = calculate(width,height,thickness) * quantity;
        document.getElementById('price').value = price
    }

}

document.getElementsByTagName('fieldset')[1].addEventListener('input',() => {
    update();
});
