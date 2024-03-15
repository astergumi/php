window.onload = function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('Patronymic').innerText = initPerson.patronymic;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('nameProfession').innerText = initPerson.Profession;
    document.getElementById('birthYearOutput').innerText = initPerson.YearDate;

    document.getElementById('btnGenerate').addEventListener('click', function () {
        window.onload();
    })

    document.getElementById('btnClear').addEventListener('click', function (event) {
        document.getElementById('firstNameOutput').innerText = '';
        document.getElementById('genderOutput').innerText = '';
        document.getElementById('surnameOutput').innerText = '';
        document.getElementById('nameProfession').innerText = '';
        document.getElementById('birthYearOutput').innerText = '';
        document.getElementById('Patronymic').innerText = '';
    })
};