"use strict";

const addingForm = document.forms.taskAdding;
let idCounter = 0;

// validation
addingForm.elements.taskName.addEventListener('input', function deadLineValidate() {
    if (this.validity.valueMissing) setError(this, 'wrongTaskName');
    else setSuccess(this);
});

addingForm.elements.taskDeadline.addEventListener('input', function deadLineValidate() {
    let now = new Date();
    let inputDate = new Date(document.getElementById('taskDeadline').value);
    if (now >= inputDate) setError(this, 'dateInPast');
    else setSuccess(this);
});

function setSuccess(elem){
    elem.nextElementSibling.className = 'message';
    elem.setCustomValidity("");
}

function setError(elem, key){
    let messages = {
        dateInPast: 'Дата не может быть в прошлом',
        wrongTaskName: `Значение должно быть в диапазоне от ${elem.minLength} до ${elem.maxLength} символов`,
    };
    elem.nextElementSibling.innerText = messages[key];
    elem.nextElementSibling.className = 'message error active';
    elem.setCustomValidity(key);
}

// form submit
addingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let taskName = document.getElementById('taskName');
    let taskDesc = document.getElementById('taskDescription');
    let taskDeadline = document.getElementById('taskDeadline');
    let taskParticipants = document.querySelectorAll('.partInput');
    if (taskName.validity.valid && taskDeadline.validity.valid) {
        let participants = [];
        taskParticipants.forEach((participant) =>
            {participants.push(participant.value)});
        putToStorage({
            title: taskName.value,
            description: taskDesc.value,
            date: formatDate(taskDeadline.value),
            id: ++idCounter,
            participants
        });
        document.getElementById('successMessage').innerText = 'Задача была добавлена успешно';
        document.getElementById('successMessage').className = 'message active';
        this.reset();
        document.querySelectorAll('.participant').forEach((elem) => {elem.remove()});

        setTimeout(() => {document.getElementById('successMessage').className = 'message'}, 3000);
    }
});

// work with localStorage
function putToStorage(task) {
    let tasksFromStorage = localStorage.getItem("tasks");
    if (!(tasksFromStorage === null)) {
        tasksFromStorage = JSON.parse(tasksFromStorage);
        tasksFromStorage.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    } else {
        localStorage.setItem("tasks", JSON.stringify(Array.of(task)));
    }
}

// participants
document.getElementById("addParticipant").addEventListener('click', function addParticipant(event) {
    event.preventDefault();
    let participant = document.createElement('div');
    participant.className = 'participant';
    let partInput = document.createElement('input');
    partInput.setAttribute('type', 'text');
    partInput.className = 'partInput';
    partInput.setAttribute('placeholder', 'Введите имя участника')
    let buttonX = document.createElement('buttonX');
    buttonX.className = 'partDelete button';
    buttonX.innerText = 'X';
    buttonX.addEventListener('click', function deleteParticipant() {
        this.parentElement.remove();
    })
    participant.append(partInput);
    participant.append(buttonX);
    document.getElementById('taskParticipants').append(participant);
})

function formatDate(date) {
    //2021-12-31T22:39
    //31.12.2021 22:39
    return date.slice(8,10) + '.' + date.slice(5,7) + '.' + date.slice(0,4) + ' ' + date.slice(11,16)
}