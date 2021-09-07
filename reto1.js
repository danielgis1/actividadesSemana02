let data = [{
        idioma: "Español",
        texto: "Bienvenido al curso de React Native en PachaQtec",
        id_idioma: 1,
    },
    {
        idioma: "Ingles",
        texto: "Welcome to the React Native course at PachaQtec",
        id_idioma: 2,
    },
    {
        idioma: "Francés",
        texto: "Bienvenue dans le cours React Native chez PachaQtec",
        id_idioma: 3,
    },
    {
        idioma: "Italiano",
        texto: "Benvenuti al corso React Native presso PachaQtec",
        id_idioma: 4,
    },
    {
        idioma: "Portugués",
        texto: "Bem-vindo ao curso React Native na PachaQtec",
        id_idioma: 5,
    }
];

const translate = (text, language) => {
    // Check if text exists in the data array
    let elm = data.filter((elm) => {
        return elm.texto.toLowerCase() === text.toLowerCase()
    })
    if (!elm.length) {
        return 'Could not find the text entered in the data'
    }
    // Check if language exists in the data array
    let selectedLanguage = data.filter((elm) => {
        return elm.idioma.toLowerCase() === language.toLowerCase()
    })
    if (!selectedLanguage.length) {
        return 'Could not find the language selected in the data'
    }
    // Return the text in the selected language
    return selectedLanguage[0].texto
}

const languageIdentify = (text) => {
    // Check if text exists in the data array
    let elm = data.filter((elm) => {
        return elm.texto.toLowerCase() === text.toLowerCase()
    })
    if (!elm.length) {
        return 'Could not find the text entered in the data'
    }
    // Return the language of the text
    return elm[0].idioma
}

// Test
console.log(translate('Welcome to the React Native course at PachaQtec', 'Español'))
console.log(languageIdentify('Bienvenue dans le cours React Native chez PachaQtec'))