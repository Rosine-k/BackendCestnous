// Fonction de validation des données du formulaire de contact
const validateContactFormData = (data) => {
    const { nom, prenom, email, objet, message } = data;

    // Vérifier que tous les champs obligatoires sont remplis
    if (!nom || !prenom || !email || !objet || !message) {
        return { isValid: false, error: 'Veuillez remplir tous les champs obligatoires.' };
    }

    // Vérifier que le nom et prénom contiennent uniquement du texte
    if (!isValidText(nom) || !isValidText(prenom)) {
        return { isValid: false, error: 'Veuillez entrer du texte.' };
    }

    // Vérifier que l'e-mail est valide
    if (!isValidEmail(email)) {
        return { isValid: false, error: 'Veuillez fournir une adresse e-mail valide.' };
    }

    // Vérifier que l'objet et le message contiennent uniquement du texte et des chiffres
    if (!isValidTextAndNumbers(objet) || !isValidTextAndNumbers(message)) {
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

// Fonction pour valider que l'e-mail est valide
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};