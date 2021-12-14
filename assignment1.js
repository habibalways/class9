//students inforemation

const students = [
    {
        name: 'habib',
        roll: 1,
        location: 'mirpur',
        marks: [
            {
                bn: 50,
                en: 60,
                math: 43,
                phy: 59,
                che: 94,
            }
        ]
    },
    {
        name: 'jillur',
        roll: 2,
        location: 'uttora',
        marks: [
            {
                bn: 60,
                en: 49,
                math: 58,
                phy: 84,
                che: 58,
            }
        ]
    },
    {
        name: 'robin',
        roll: 3,
        location: 'badda',
        marks: [
            {
                bn: 50,
                en: 60,
                math: 59,
                phy: 58,
                che: 59,
            }
        ]
    },
    {
        name: 'raihan',
        roll: 4,
        location: 'shamoli',
        marks: [
            {
                bn: 60,
                en: 58,
                math: 34,
                phy: 59,
                che: 84,
            }
        ]
    },
    {
        name: 'akash',
        roll: 5,
        location: 'uttora',
        marks: [
            {
                bn: 56,
                en: 85,
                math: 75,
                phy: 94,
                che: 68,
            }
        ]
    },
    {
        name: 'batas',
        roll: 6,
        location: 'mirpur',
        marks: [
            {
                bn: 94,
                en: 91,
                math: 83,
                phy: 48,
                che: 58,
            }
        ]
    },
    {
        name: 'alo',
        roll: 7,
        location: 'badda',
        marks: [
            {
                bn: 70,
                en: 84,
                math: 94,
                phy: 83,
                che: 48,
            }
        ]
    },
    {
        name: 'saya',
        roll: 8,
        location: 'mohakhali',
        marks: [
            {
                bn: 96,
                en: 59,
                math: 85,
                phy: 75,
                che: 85,
            }
        ]
    },
    {
        name: 'maya',
        roll: 9,
        location: 'mohammadpur',
        marks: [
            {
                bn: 95,
                en: 94,
                math: 73,
                phy: 84,
                che: 73,
            }
        ]
    },
    {
        name: 'shakil',
        roll: 10,
        location: 'mirpur',
        marks: [
            {
                bn: 70,
                en: 90,
                math: 81,
                phy: 72,
                che: 63,
            }
        ]
    }
];
//object to json data (student information)
let studentstin = JSON.stringify(students);
console.log(`
    student info:=======================
    ${studentstin}
`);
//localstorage 
localStorage.setItem('studentinfo', studentstin);






//data sheet of family phone number

const family = [
    {
        name: 'johirul',
        age: 20,
        phone: '01706005883'
    },
    {
        name: 'rakib',
        age: 30,
        phone: '01749959595'
    },
    {
        name: 'faruk',
        age: 50,
        phone: '018393939393'
    },
    {
        name: 'saown',
        age: 30,
        phone: '01259484994'
    },
    {
        name: 'rifat',
        age: 40,
        phone: '013585959595'
    },
    {
        name: 'shamim',
        age: 58,
        phone: '017595959595'
    },
    {
        name: 'sumona',
        age: 58,
        phone: '01459595959'
    },
    {
        name: 'shakil',
        age: 68,
        phone: '01759595959'
    },
    {
        name: 'maliha',
        age: 57,
        phone: '01694949944'
    },
    {
        name: 'mamun',
        age: 21,
        phone: '018585858585'
    }
];

//object to json data
let familynumber = JSON.stringify(family);
console.log(`
family info :=================================
${familynumber}
` );
//localstorage
localStorage.setItem('familyinfo', familynumber);




//devs information

const devs = [
    {
        name: 'rahim',
        age: 20,
        skill: 'java'
    },
    {
        name: 'rakib',
        age: 30,
        skill: 'wordpress'
    },
    {
        name: 'faruk',
        age: 50,
        skill: 'majndro'
    },
    {
        name: 'saown',
        age: 30,
        skill: 'phyton'
    },
    {
        name: 'rifat',
        age: 40,
        skill: 'java'
    },
    {
        name: 'shamim',
        age: 58,
        skill: 'laravel'
    },
    {
        name: 'sumona',
        age: 58,
        skill: 'php'
    },
    {
        name: 'shakil',
        age: 68,
        skill: 'java'
    },
    {
        name: 'maliha',
        age: 57,
        skill: 'javascript'
    },
    {
        name: 'mamun',
        age: 21,
        skill: 'php'
    }
];
//object to json data
console.log(`
    devs info :==========================
    ${JSON.stringify(devs)}
`);
//localstorege
localStorage.setItem('devsinfo',JSON.stringify(devs))



//devs information

