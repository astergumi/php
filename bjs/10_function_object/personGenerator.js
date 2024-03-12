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
    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        if(gender === this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);
        }
        else if(gender === this.GENDER_FEMALE){
            return this.randomValue(this.firstNameFeMaleJson);
        }


    },

    randomGender: function() {
         gender = this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;

    },
    


     randomSurname: function() {
        
        if(gender === this.GENDER_FEMALE)
        return this.randomValue(this.surnameJson)+'а';
        else{
        return this.randomValue(this.surnameJson);
    }

    },

    randomYearDate: function () {
        year = this.randomIntNumber(2001, 1950);
        date = `${year} г.`;
        return date;
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.YearDate = this.randomYearDate();
        return this.person;
    }
};
