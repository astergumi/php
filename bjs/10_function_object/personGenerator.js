const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    jobsMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Охранник",
            "id_3": "Полицейский",
            "id_4": "Врач",
            "id_5": "Механик",
            "id_6": "Пожарный",
            "id_7": "Тренер",
            "id_8": "Водитель",
            "id_9": "Гид",
            "id_10": "Пилот"
        }
    }`,
    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Юлия",
            "id_3": "Татьяна",
            "id_4": "Полина",
            "id_5": "Виктория",
            "id_6": "Валерия",
            "id_7": "Анастасия",
            "id_8": "Светлана",
            "id_9": "Екатерина",
            "id_10": "Ирина"
        }
    }`,
    jobsFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Администратор",
            "id_2": "Повар",
            "id_3": "Архитектор",
            "id_4": "Дизайнер",
            "id_5": "Флорист",
            "id_6": "Продавец",
            "id_7": "Стилист",
            "id_8": "Врач",
            "id_9": "Учитель",
            "id_10": "Стюардесса"
        }
    }`,
    nameMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomSurname: function () {

        if (gender === this.GENDER_FEMALE)
            return this.randomValue(this.surnameJson) + 'а';
        else {
            return this.randomValue(this.surnameJson);
        }

    },

    randomGender: function () {
        gender = this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;

    },


    randomProfession: function () {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.jobsMaleJson);
        } else if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.jobsFeMaleJson);
        }
    },

    randomFirstName: function () {

        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFeMaleJson);
        }
    },

    randomPatronymic: function () {
        let patronymic = this.randomValue(this.firstNameMaleJson);
        return this.namePatronymic(patronymic);
    },

    namePatronymic: function (name) {
        if (gender === this.GENDER_MALE) {
            switch (name) {
                case "Александр":
                case "Максим":
                case "Иван":
                case "Артем":
                case "Михаил":
                case "Даниил":
                case "Егор":
                    return name + 'ович';
                case "Дмитрий":
                case "Андрей":
                case "Сергей":
                    return name.slice(0, -1) + 'евич';
                case "Никита":
                    return name.slice(0, -1) + 'ич';
                case "Павел":
                    return name.slice(0, -3) + 'лович';
            }
        } else if (gender === this.GENDER_FEMALE) {
            switch (name) {
                case "Александр":
                case "Максим":
                case "Иван":
                case "Артем":
                case "Михаил":
                case "Даниил":
                case "Егор":
                    return name + 'овна';
                case "Дмитрий":
                case "Андрей":
                case "Сергей":
                    return name.slice(0, -1) + 'евна';
                case "Никита":
                    return name.slice(0, -1) + 'ична';
                case "Павел":
                    return name.slice(0, -3) + 'ловна';
            }
        }
    },



    randomYearDate: function () {
        year = this.randomIntNumber(2001, 1950);
        month = this.randomValue(this.nameMonthJson);
        if (this.month === `id_1` || `id_3` || `id_5` || `id_7` || `id_8` || `id_10` || `id_12`) {
            day = this.randomIntNumber(31, 1);
        } else if (this.month === `id_4` || `id_6` || `id_9` || `id_11`) {
            day = this.randomIntNumber(30, 1);
        } else {
            day = this.randomIntNumber(28, 1);
        }
        date = `${day} ${month} ${year} г.`;
        return date;
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.patronymic = this.randomPatronymic();
        this.person.Profession = this.randomProfession();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.YearDate = this.randomYearDate();
        return this.person;
    }
};