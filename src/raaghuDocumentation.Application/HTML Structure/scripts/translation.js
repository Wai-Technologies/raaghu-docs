document.addEventListener('DOMContentLoaded', function () {
    var languageDropdown = document.getElementById('language-dropdown');
    var translationData = {}; // To store loaded translation data

    // Load translations based on language selection
    languageDropdown.addEventListener('change', function () {
        var selectedLanguage = languageDropdown.value;

        if(selectedLanguage==="ar"){
            document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
        }
        else{
            document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
        }

        // Load JSON file based on selected language
        fetch('Assets/localization/' + selectedLanguage + '.json') // Adjust the path here
            .then(response => response.json(),
            console.log("hckudckd",selectedLanguage)
            )
            .then(data => {
                translationData = data;
                applyTranslations(); // Apply translations after loading
            })
            .catch(error => console.error('Error loading translations', error));
    });

    // Apply translations to HTML elements
    
    
    function applyTranslations() {
        for (var id in translationData) {
            if (translationData.hasOwnProperty(id)) {
                var element = document.getElementById(id);
                if (element) {
                    element.innerHTML = translationData[id];
                }
            }
        }
    }
});
