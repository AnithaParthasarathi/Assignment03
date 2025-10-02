let lang = prompt('Enter a language code ("es", "de", "en", or "fr"):').toLowerCase();

if (lang === "es") {
    console.log("Hello World translated in Spanish is: Hola Mundo");
} else if (lang === "de") {
    console.log("Hello World translated in German is: Hallo Welt");
} else if (lang === "fr") {
    console.log("Hello World translated in French is: Bonjour le monde");
} else {
    // Defaults to English if none of the above
    console.log("Hello World translated in English is: Hello World");
}
