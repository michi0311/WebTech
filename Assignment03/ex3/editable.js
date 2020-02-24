var form = document.createElement("form")

var selectBox = document.createElement("select")
//selectBox.setAttribute('')


var option0 = document.createElement('option')
option0.setAttribute('value','-1')
selectBox.appendChild(option0)

var option1 = document.createElement("option")
option1.setAttribute('value','0')
option1.innerHTML = 'Topic 1'
selectBox.appendChild(option1)

var option2 = document.createElement("option")
option2.setAttribute('value','1')
option2.innerHTML = 'Topic 2'
selectBox.appendChild(option2)

var option3 = document.createElement("option")
option3.setAttribute('value','2')
option3.innerHTML = 'Topic 3'
selectBox.appendChild(option3)

form.appendChild(selectBox)


var input = document.createElement("input")
input.setAttribute('type','text')
form.appendChild(input)

var textarea = document.createElement("textarea")
textarea.setAttribute('cols','80')
textarea.setAttribute('rows','20')
form.appendChild(textarea)

var submitButton = document.createElement("input")
submitButton.setAttribute('value', 'Submit')
submitButton.setAttribute('type','button')
submitButton.setAttribute('disabled','disabled')
form.appendChild(submitButton)


var element = document.getElementById("div1")
element.appendChild(form)

document.getElementsByTagName('select')[0].addEventListener('input',() => {
    var paragraphNum = selectBox.options[selectBox.selectedIndex].value
    
    if(paragraphNum != -1) {
        submitButton.removeAttribute('disabled','disabled')
    } else {
        input.value = ''
        textarea.value = ''
        submitButton.setAttribute('disabled','disabled')
    }
    var paragraph = document.getElementsByTagName('section')[paragraphNum]
    input.value = paragraph.getElementsByTagName("h1")[0].innerHTML
    textarea.value = paragraph.innerHTML
});

submitButton.addEventListener('click',() => {
    var paragraphNum = selectBox.options[selectBox.selectedIndex].value
    var paragraph = document.getElementsByTagName('section')[paragraphNum]
    paragraph.innerHTML = textarea.value
    paragraph.getElementsByTagName("h1")[0].innerHTML = input.value
    
    selectBox.options[parseInt(paragraphNum) + 1].innerHTML = input.value
})


