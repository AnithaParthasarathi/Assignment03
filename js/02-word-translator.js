let lang = prompt('Enter a language code ("es", "de", "en", or "fr"):').toLowerCase();
document.write('The word Translater<br>');

if (lang === "es") {
    document.write("Hello World translated in Spanish is: Hola Mundo");
} else if (lang === "de") {
    document.write("Hello World translated in German is: Hallo Welt");
} else if (lang === "fr") {
    document.write("Hello World translated in French is: Bonjour le monde");
} else {
    // Defaults to English if none of the above
   document.write("Hello World translated in English is: Hello World");
}
