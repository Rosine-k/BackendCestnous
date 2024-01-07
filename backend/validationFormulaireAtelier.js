// Tableau pour stocker les données des formulaires
const formDataArray = [];

// Fonction de validation des données du formulaire
const validateFormData = (data) => {
    const { nom, prenom, email, motivation, adresse, codePostal, telMobile, age } = data;

    // Vérifier que tous les champs obligatoires sont remplis
    if (!nom || !prenom || !email || !motivation || !adresse || !codePostal || !telMobile || !age) {
        return { isValid: false, error: 'Veuillez remplir tous les champs obligatoires.' };
    }

    // Vérifier que le nom et prénom contiennent uniquement du texte
    if (!isValidText(nom) || !isValidText(prenom)) {
        return { isValid: false, error: 'Veuiller entrer du texte.' };
    }

    // Vérifier que l'adresse contient uniquement du texte et des chiffres
    if (!isValidTextAndNumbers(adresse)) {
        return { isValid: false, error: 'L\'adresse doit contenir uniquement du texte et des chiffres.' };
    }

    // Vérifier que le code postal contient uniquement des chiffres
    if (!isValidNumbers(codePostal)) {
        return { isValid: false, error: 'Le code postal doit contenir uniquement des chiffres.' };
    }

    // Vérifier que le numéro de téléphone et l'âge contiennent uniquement des chiffres
    if (!isValidNumbers(telMobile) || !isValidNumbers(age)) {
        return { isValid: false, error: 'Veuillez entrer des chiffres.' };
    }

    // Vérifier que les zones de texte contiennent uniquement du texte et des chiffres
    if (!isValidTextAndNumbers(motivation)) {
        return { isValid: false, error: 'Les caractères spéciaux ne sont pas autorisés.' };
    }

    return { isValid: true, error: null };
};

// Fonction pour valider que la chaîne contient uniquement du texte
const isValidText = (value) => {
    const textRegex = /^[a-zA-Z\s]*$/;
    return textRegex.test(value);
};

// Fonction pour valider que la chaîne contient uniquement du texte et des chiffres
const isValidTextAndNumbers = (value) => {
    const textAndNumbersRegex = /^[a-zA-Z0-9\s]*$/;
    return textAndNumbersRegex.test(value);
};

// Fonction pour valider que la chaîne contient uniquement des chiffres
const isValidNumbers = (value) => {
    const numbersRegex = /^\d+$/;
    return numbersRegex.test(value);
};


// Route pour le formulaire de contact
app.post('/submit_form', (req, res) => {
    // Exemple de traitement du formulaire de contact
    const formData = req.body;

    // Validez les données du formulaire
    if (!validateFormData(formData)) {
        return res.status(400).json({ error: 'Veuillez remplir tous les champs obligatoires.' });
    }

    // Stocker les données dans le tableau (ou une base de données selon vos besoins)
    formDataArray.push(formData);

    // Afficher les données dans la console
    console.log('Nouveau formulaire de contact :', formData);

    res.json({ message: 'Formulaire de contact reçu avec succès!' });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});