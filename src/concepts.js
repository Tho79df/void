export const concepts = [
  // ============================================================
  // MODULE 1 : BASES DU LANGAGE
  // ============================================================
  {
    id: 1,
    title: "Le point d'entrée du programme",
    code: "int main(void)",
    explanation: [
      { term: "int", desc: "Indique que la fonction va renvoyer un nombre entier à la fin." },
      { term: "main", desc: "Nom obligatoire de la fonction principale — c'est ici que tout commence." },
      { term: "(void)", desc: "Indique que cette fonction ne prend aucun paramètre." },
    ],
    hint: "Trois mots : un type, un nom, et une indication de paramètres entre parenthèses.",
  },
  {
    id: 2,
    title: "Les accolades de bloc",
    code: "{\n}",
    explanation: [
      { term: "{", desc: "Marque le DÉBUT du bloc de code d'une fonction ou d'une structure." },
      { term: "}", desc: "Marque la FIN du bloc de code. Chaque { doit toujours avoir son }." },
    ],
    hint: "Une accolade ouvrante sur la première ligne, une fermante sur la deuxième.",
  },
  {
    id: 3,
    title: "Le retour de fonction",
    code: "return 0;",
    explanation: [
      { term: "return", desc: "Mot-clé qui sert à renvoyer une valeur et à quitter la fonction." },
      { term: "0", desc: "La valeur renvoyée. '0' signifie que le programme s'est terminé sans erreur." },
      { term: ";", desc: "Obligatoire en C à la fin de chaque instruction simple." },
    ],
    hint: "N'oublie pas le point-virgule à la fin !",
  },
  {
    id: 4,
    title: "Inclure une bibliothèque",
    code: "#include <stdio.h>",
    explanation: [
      { term: "#", desc: "Indique une directive pour le préprocesseur (qui prépare le code avant la compilation)." },
      { term: "include", desc: "Signifie qu'on veut importer un fichier de fonctions." },
      { term: "<stdio.h>", desc: "La bibliothèque Standard Input/Output — elle contient printf, scanf, etc." },
    ],
    hint: "Commence par #, puis include, puis le nom entre chevrons < >.",
  },
  {
    id: 5,
    title: "Afficher du texte",
    code: 'printf("Hello");',
    explanation: [
      { term: "printf", desc: "Fonction d'affichage (print formatted). Pas d'espace avant la parenthèse !" },
      { term: '"Hello"', desc: "Le texte à afficher, entouré obligatoirement de guillemets doubles." },
      { term: ";", desc: "Fin d'instruction." },
    ],
    hint: "printf, parenthèse, guillemets, texte, guillemets, parenthèse, point-virgule.",
  },
  {
    id: 6,
    title: "Le retour à la ligne dans printf",
    code: 'printf("Hello\\n");',
    explanation: [
      { term: "\\n", desc: "La séquence d'échappement pour un retour à la ligne (newline). Toujours à l'intérieur des guillemets." },
    ],
    hint: "C'est une barre oblique inverse (\\) suivie de la lettre n.",
  },
  {
    id: 7,
    title: "Déclarer un entier",
    code: "int age = 25;",
    explanation: [
      { term: "int", desc: "Type de données pour les nombres entiers (sans virgule)." },
      { term: "age", desc: "Le nom de la variable. Tu choisis ce nom toi-même." },
      { term: "= 25", desc: "On initialise la variable avec la valeur 25." },
      { term: ";", desc: "Fin d'instruction obligatoire." },
    ],
    hint: "Type, espace, nom, espace, égal, espace, valeur, point-virgule.",
  },
  {
    id: 8,
    title: "Afficher une variable entière",
    code: 'printf("%d", age);',
    explanation: [
      { term: "%d", desc: "Indicateur de format pour un entier (d = decimal). C'est un emplacement réservé." },
      { term: ", age", desc: "Après la virgule, on indique quelle variable remplira l'emplacement %d." },
    ],
    hint: "Le %d est dans les guillemets, la variable est après la virgule, en dehors.",
  },
  {
    id: 9,
    title: "Lire une valeur au clavier",
    code: 'scanf("%d", &age);',
    explanation: [
      { term: "scanf", desc: "Fonction pour lire une entrée depuis le clavier." },
      { term: "%d", desc: "Indique qu'on attend un entier." },
      { term: "&age", desc: "Le '&' donne l'adresse mémoire de la variable age. scanf en a besoin pour y stocker la valeur." },
    ],
    hint: "Comme printf mais avec & devant le nom de la variable. Ne pas oublier &!",
  },
  {
    id: 10,
    title: "Déclarer un caractère",
    code: "char lettre = 'A';",
    explanation: [
      { term: "char", desc: "Type de données pour un seul caractère (character). Prend 1 octet en mémoire." },
      { term: "'A'", desc: "Un caractère s'écrit entre APOSTROPHES simples ('), pas des guillemets doubles." },
    ],
    hint: "char avec des apostrophes simples, pas des guillemets doubles.",
  },
  {
    id: 11,
    title: "Déclarer un double (haute précision)",
    code: "double pi = 3.14159;",
    explanation: [
      { term: "double", desc: "Type pour les nombres à virgule avec une précision double par rapport à float. Toujours préférer double à float." },
      { term: "3.14159", desc: "On utilise un point (.) pas une virgule pour les décimales en C." },
    ],
    hint: "Comme float mais double. Plus de précision, toujours un point pour la décimale.",
  },
  {
    id: 12,
    title: "L'addition et affectation",
    code: "pommes = pommes + 3;",
    explanation: [
      { term: "pommes + 3", desc: "On calcule la valeur de pommes plus 3." },
      { term: "pommes =", desc: "Le résultat du calcul est stocké DANS la variable pommes (elle s'écrase)." },
    ],
    hint: "La valeur à droite du = est calculée, puis stockée dans la variable à gauche.",
  },
  {
    id: 13,
    title: "L'opérateur modulo (%)",
    code: "reste = 10 % 3;",
    explanation: [
      { term: "%", desc: "Le modulo donne le RESTE de la division entière. 10 / 3 = 3, il reste 1. Donc 10 % 3 = 1." },
    ],
    hint: "% c'est le reste de la division. Très utile pour savoir si un nombre est pair ou impair.",
  },
  {
    id: 14,
    title: "La condition if",
    code: "if (age > 18)\n{\n}",
    explanation: [
      { term: "if", desc: "Mot-clé pour une condition. Signifie 'si' en anglais." },
      { term: "(age > 18)", desc: "La condition entre parenthèses. Si elle est vraie, le bloc {} est exécuté." },
      { term: "{ }", desc: "Le bloc d'instructions à exécuter si la condition est vraie." },
    ],
    hint: "if, condition entre parenthèses, puis bloc. PAS de point-virgule après la parenthèse !",
  },
  {
    id: 15,
    title: "L'alternative else",
    code: "else\n{\n}",
    explanation: [
      { term: "else", desc: "Se place juste après l'accolade fermante du if. Signifie 'sinon' en anglais." },
      { term: "{ }", desc: "Le bloc qui s'exécute si la condition du if était FAUSSE." },
      { term: "", desc: "Pas de condition entre parenthèses après else — c'est un 'sinon' général." },
    ],
    hint: "Juste le mot else, puis un bloc d'accolades. Aucune condition entre parenthèses.",
  },
  {
    id: 16,
    title: "La boucle while",
    code: "while (pommes > 0)\n{\n}",
    explanation: [
      { term: "while", desc: "Mot-clé pour une boucle (signifie 'tant que' en anglais)." },
      { term: "(pommes > 0)", desc: "La condition. Tant qu'elle est vraie, le code dans les accolades est répété." },
      { term: "{ }", desc: "Le bloc d'instructions à répéter. PAS de point-virgule après la parenthèse !" },
    ],
    hint: "Même structure que le if : while, condition, bloc. Pas de point-virgule !",
  },
  {
    id: 17,
    title: "La décrémentation (--)",
    code: "pommes--;",
    explanation: [
      { term: "--", desc: "L'opérateur de décrémentation. Placé après une variable, il lui soustrait 1." },
      { term: "pommes--;", desc: "Raccourci pour pommes = pommes - 1;" },
    ],
    hint: "Nom de la variable, deux tirets (--), point-virgule.",
  },
  {
    id: 18,
    title: "L'incrémentation (++)",
    code: "pommes++;",
    explanation: [
      { term: "++", desc: "L'opérateur d'incrémentation. Placé après une variable, il lui ajoute 1." },
      { term: "pommes++;", desc: "Raccourci pour pommes = pommes + 1;" },
    ],
    hint: "Nom de la variable, deux plus (++), point-virgule.",
  },
  {
    id: 19,
    title: "La boucle for",
    code: "for (int i = 0; i < 5; i++)\n{\n}",
    explanation: [
      { term: "int i = 0;", desc: "1ère partie : On crée le compteur 'i' initialisé à 0." },
      { term: "i < 5;", desc: "2ème partie : La condition. Tant que i < 5, la boucle continue." },
      { term: "i++", desc: "3ème partie : Ce qui se passe à chaque fin de tour. PAS de point-virgule ici !" },
    ],
    hint: "for : initialisation; condition; incrémentation. Les 3 parties séparées par des point-virgules.",
  },
  {
    id: 20,
    title: "Le type float (nombre à virgule)",
    code: "float note = 15.5;",
    explanation: [
      { term: "float", desc: "Type de donnée pour les nombres à virgule (nombre flottant)." },
      { term: "15.5", desc: "En programmation, on utilise un POINT (.) et non une virgule pour les décimales." },
    ],
    hint: "Comme int, mais avec le mot float. Et un point, pas une virgule, pour les décimales !",
  },

  // ============================================================
  // MODULE 2 : TABLEAUX ET FONCTIONS
  // ============================================================
  {
    id: 21,
    title: "Déclarer un tableau",
    code: "int notes[5];",
    explanation: [
      { term: "int notes", desc: "Un tableau de nombres entiers nommé 'notes'." },
      { term: "[5]", desc: "Le tableau peut contenir exactement 5 éléments (indices 0 à 4)." },
    ],
    hint: "Type, nom, puis la taille entre crochets. Les indices vont de 0 à taille-1.",
  },
  {
    id: 22,
    title: "Initialiser un tableau",
    code: "int notes[3] = {10, 15, 18};",
    explanation: [
      { term: "{10, 15, 18}", desc: "On initialise le tableau avec les accolades. Les valeurs sont séparées par des virgules." },
    ],
    hint: "Les valeurs initiales sont entre accolades { } séparées par des virgules.",
  },
  {
    id: 23,
    title: "Accéder à un élément du tableau",
    code: "notes[0] = 20;",
    explanation: [
      { term: "[0]", desc: "L'index 0 désigne le PREMIER élément. En C, les tableaux commencent toujours à 0." },
    ],
    hint: "Nom du tableau suivi de l'index entre crochets. Le premier élément est à l'index 0 !",
  },
  {
    id: 24,
    title: "Parcourir un tableau avec for",
    code: "for (int i = 0; i < 5; i++)\n    printf(\"%d\\n\", notes[i]);",
    explanation: [
      { term: "notes[i]", desc: "On utilise la variable i comme index. À chaque tour de boucle, i change, donc on accède à chaque élément." },
    ],
    hint: "Le compteur de la boucle for sert directement d'index pour le tableau.",
  },
  {
    id: 25,
    title: "Tableau 2D (matrice)",
    code: "int grille[3][3];",
    explanation: [
      { term: "[3][3]", desc: "Un tableau à deux dimensions : 3 lignes et 3 colonnes, comme une grille." },
    ],
    hint: "Deux paires de crochets : [lignes][colonnes].",
  },
  {
    id: 26,
    title: "La boucle do-while",
    code: "do\n{\n} while (i < 10);",
    explanation: [
      { term: "do { }", desc: "Le bloc est exécuté AU MOINS UNE FOIS, avant même de vérifier la condition." },
      { term: "while (i < 10);", desc: "La condition est vérifiée APRÈS chaque exécution. Attention : point-virgule ici !" },
    ],
    hint: "do puis bloc, puis while(condition) avec un point-virgule à la fin.",
  },
  {
    id: 27,
    title: "Le mot-clé break",
    code: "break;",
    explanation: [
      { term: "break;", desc: "Interrompt immédiatement la boucle (for, while, do-while) ou le switch dans lequel il se trouve." },
    ],
    hint: "Un seul mot, un seul point-virgule. Quitte la boucle ou le switch immédiatement.",
  },
  {
    id: 28,
    title: "Le mot-clé continue",
    code: "continue;",
    explanation: [
      { term: "continue;", desc: "Passe directement au tour suivant de la boucle, sans exécuter le reste du bloc." },
    ],
    hint: "Un seul mot, un seul point-virgule. Saute le reste du bloc et passe au prochain tour.",
  },
  {
    id: 29,
    title: "Le switch case",
    code: "switch (note)\n{\n    case 20:\n        break;\n}",
    explanation: [
      { term: "switch (note)", desc: "Teste la valeur de la variable 'note'." },
      { term: "case 20:", desc: "Si note vaut 20, les instructions suivantes sont exécutées." },
      { term: "break;", desc: "Indispensable pour quitter le switch après chaque case." },
    ],
    hint: "switch avec variable, puis case valeur: instructions break; Toujours mettre le break !",
  },
  {
    id: 30,
    title: "Le cas default du switch",
    code: "default:\n    break;",
    explanation: [
      { term: "default:", desc: "Le bloc exécuté si aucun case ne correspond. Comme le 'else' du switch." },
    ],
    hint: "default: suivi des instructions et d'un break. Pas de valeur entre parenthèses.",
  },
  {
    id: 31,
    title: "Écrire un prototype de fonction",
    code: "int addition(int a, int b);",
    explanation: [
      { term: "int", desc: "Le type de la valeur que la fonction va renvoyer." },
      { term: "addition", desc: "Le nom de ta fonction. Tu le choisis." },
      { term: "(int a, int b)", desc: "Les paramètres que la fonction reçoit, avec leur type." },
      { term: ";", desc: "Le prototype se termine par un point-virgule (contrairement à la définition)." },
    ],
    hint: "Le prototype est une déclaration : type retour, nom, paramètres, et point-virgule final.",
  },
  {
    id: 32,
    title: "Définir une fonction",
    code: "int addition(int a, int b)\n{\n    return a + b;\n}",
    explanation: [
      { term: "int addition(int a, int b)", desc: "L'en-tête de la fonction. Identique au prototype mais sans point-virgule." },
      { term: "return a + b;", desc: "La valeur calculée est renvoyée à celui qui a appelé la fonction." },
    ],
    hint: "En-tête sans point-virgule, bloc, et return de la valeur calculée.",
  },
  {
    id: 33,
    title: "Appeler une fonction",
    code: "int resultat = addition(5, 3);",
    explanation: [
      { term: "addition(5, 3)", desc: "On appelle la fonction 'addition' avec les arguments 5 et 3." },
      { term: "int resultat =", desc: "La valeur renvoyée par la fonction (8) est stockée dans 'resultat'." },
    ],
    hint: "Nom de la fonction, arguments entre parenthèses, résultat stocké dans une variable.",
  },
  {
    id: 34,
    title: "Fonction sans valeur de retour (void)",
    code: "void afficher(int x)\n{\n    printf(\"%d\\n\", x);\n}",
    explanation: [
      { term: "void", desc: "Type de retour 'void' = la fonction ne renvoie rien. Pas de return nécessaire." },
    ],
    hint: "void devant le nom de la fonction : elle fait quelque chose mais ne renvoie aucune valeur.",
  },
  {
    id: 35,
    title: "Variable static locale",
    code: "static int compteur = 0;",
    explanation: [
      { term: "static", desc: "La variable est initialisée UNE SEULE FOIS et conserve sa valeur entre les appels à la fonction. Elle ne disparaît pas à la fin de la fonction." },
    ],
    hint: "static avant le type : la variable survit entre les appels de la fonction.",
  },

  // ============================================================
  // MODULE 3 : POINTEURS
  // ============================================================
  {
    id: 36,
    title: "L'opérateur d'adresse (&)",
    code: "int age = 25;\nprintf(\"%p\", &age);",
    explanation: [
      { term: "&age", desc: "Le & donne l'ADRESSE MÉMOIRE de la variable age. Chaque variable occupe un emplacement précis en mémoire." },
      { term: "%p", desc: "Le format pour afficher une adresse mémoire (p = pointer)." },
    ],
    hint: "& devant un nom de variable te donne son adresse en mémoire. %p pour l'afficher.",
  },
  {
    id: 37,
    title: "Déclarer un pointeur",
    code: "int *ptr;",
    explanation: [
      { term: "int *", desc: "On déclare un pointeur vers un int. Le * indique que c'est un pointeur." },
      { term: "ptr", desc: "Le nom du pointeur. Il contiendra une adresse mémoire." },
    ],
    hint: "Type suivi d'une étoile (*) puis le nom. L'étoile est collée au type ou au nom, peu importe.",
  },
  {
    id: 38,
    title: "Initialiser un pointeur",
    code: "int *ptr = &age;",
    explanation: [
      { term: "&age", desc: "On stocke l'adresse de la variable 'age' dans le pointeur ptr." },
      { term: "ptr", desc: "ptr pointe maintenant vers age. ptr sait où age se trouve en mémoire." },
    ],
    hint: "Un pointeur est initialisé avec l'adresse d'une variable (grâce à &).",
  },
  {
    id: 39,
    title: "Déréférencer un pointeur (*)",
    code: "printf(\"%d\", *ptr);",
    explanation: [
      { term: "*ptr", desc: "L'étoile devant un pointeur (déréférencement) accède à la VALEUR à l'adresse mémorisée. *ptr lit ce qui est à l'adresse pointée." },
    ],
    hint: "* devant un pointeur = 'la valeur À l'adresse'. Sans * = l'adresse elle-même.",
  },
  {
    id: 40,
    title: "Modifier via un pointeur",
    code: "*ptr = 30;",
    explanation: [
      { term: "*ptr = 30;", desc: "On modifie la valeur à l'adresse pointée. Si ptr pointe vers age, alors age devient 30." },
    ],
    hint: "Avec *ptr à gauche du =, tu modifies la variable originale à distance.",
  },
  {
    id: 41,
    title: "Pointeur et tableau",
    code: "int notes[5];\nint *ptr = notes;",
    explanation: [
      { term: "ptr = notes", desc: "Le nom d'un tableau SANS crochets est déjà une adresse (l'adresse du premier élément). Pas besoin du &." },
    ],
    hint: "Le nom du tableau seul (sans []) est l'adresse de son premier élément.",
  },
  {
    id: 42,
    title: "Arithmétique des pointeurs",
    code: "ptr++;",
    explanation: [
      { term: "ptr++", desc: "Avance le pointeur d'un élément (pas d'un octet). Si ptr pointe sur notes[0], après ptr++ il pointe sur notes[1]." },
    ],
    hint: "Incrémenter un pointeur le fait avancer d'un élément du type pointé.",
  },
  {
    id: 43,
    title: "Passage d'un pointeur en paramètre",
    code: "void doubler(int *n)\n{\n    *n = *n * 2;\n}",
    explanation: [
      { term: "int *n", desc: "La fonction reçoit une adresse, pas une valeur. Elle peut donc modifier l'original." },
      { term: "*n = *n * 2", desc: "On lit la valeur (*n), on la double, et on l'écrit à la même adresse." },
    ],
    hint: "Pour modifier une variable dans une fonction, passe son adresse avec & et reçois-la avec *.",
  },
  {
    id: 44,
    title: "Pointeur sur pointeur (**)",
    code: "int **pp = &ptr;",
    explanation: [
      { term: "int **", desc: "Un pointeur qui pointe vers un autre pointeur. Deux niveaux d'indirection." },
      { term: "&ptr", desc: "L'adresse du pointeur ptr lui-même (pas de la variable qu'il pointe)." },
    ],
    hint: "Deux étoiles ** = pointeur de pointeur. Un niveau d'indirection de plus.",
  },
  {
    id: 45,
    title: "Le pointeur NULL",
    code: "int *ptr = NULL;",
    explanation: [
      { term: "NULL", desc: "Valeur nulle d'un pointeur. Indique qu'il ne pointe vers rien. Vérifier si un pointeur est NULL avant de le déréférencer évite les crashes." },
    ],
    hint: "NULL initialise un pointeur à 'rien'. Toujours vérifier != NULL avant utilisation.",
  },

  // ============================================================
  // MODULE 4 : CHAÎNES DE CARACTÈRES
  // ============================================================
  {
    id: 46,
    title: "Déclarer une chaîne de caractères",
    code: "char nom[50];",
    explanation: [
      { term: "char nom[50]", desc: "En C, il n'y a pas de type 'string'. Une chaîne est un tableau de char. La taille doit inclure le caractère de fin \\0." },
    ],
    hint: "Une chaîne = un tableau de char. Toujours prévoir une case de plus pour le \\0 final.",
  },
  {
    id: 47,
    title: "Le caractère de fin de chaîne",
    code: 'char nom[6] = "Alice";',
    explanation: [
      { term: '"Alice"', desc: "'Alice' fait 5 caractères mais le tableau fait 6. La 6ème case contient automatiquement '\\0' (null terminator) qui marque la fin." },
      { term: "\\0", desc: "Le caractère nul. C'est lui que les fonctions comme printf, strlen etc. cherchent pour trouver la fin de la chaîne." },
    ],
    hint: "Toujours une case de plus que le nombre de caractères pour le \\0.",
  },
  {
    id: 48,
    title: "Inclure <string.h>",
    code: "#include <string.h>",
    explanation: [
      { term: "<string.h>", desc: "Bibliothèque contenant toutes les fonctions pour manipuler les chaînes de caractères : strlen, strcpy, strcmp, strcat..." },
    ],
    hint: "str comme string. Tout pour manipuler les chaînes est dedans.",
  },
  {
    id: 49,
    title: "Longueur d'une chaîne (strlen)",
    code: "int len = strlen(nom);",
    explanation: [
      { term: "strlen", desc: "Compte le nombre de caractères SANS compter le \\0 final. Nécessite <string.h>." },
    ],
    hint: "strlen retourne la longueur sans compter le \\0. Nécessite #include <string.h>.",
  },
  {
    id: 50,
    title: "Copier une chaîne (strcpy)",
    code: "strcpy(destination, source);",
    explanation: [
      { term: "strcpy", desc: "Copie le contenu de 'source' dans 'destination'. La destination doit être assez grande !" },
    ],
    hint: "strcpy(dest, src) : destination d'abord, source ensuite. Comme une affectation.",
  },
  {
    id: 51,
    title: "Comparer deux chaînes (strcmp)",
    code: "if (strcmp(a, b) == 0)",
    explanation: [
      { term: "strcmp(a, b)", desc: "Compare deux chaînes. Renvoie 0 si elles sont IDENTIQUES. Jamais d'== direct entre chaînes en C !" },
    ],
    hint: "On ne compare JAMAIS deux chaînes avec ==. On utilise strcmp et on vérifie si le résultat est 0.",
  },
  {
    id: 52,
    title: "Concaténer des chaînes (strcat)",
    code: "strcat(destination, source);",
    explanation: [
      { term: "strcat", desc: "Ajoute 'source' à la fin de 'destination'. La destination doit avoir assez de place !" },
    ],
    hint: "strcat (string concatenate) : colle la source à la fin de la destination.",
  },
  {
    id: 53,
    title: "Écrire dans une chaîne (sprintf)",
    code: 'sprintf(buffer, "Score: %d", score);',
    explanation: [
      { term: "sprintf", desc: "Comme printf, mais écrit dans un tableau de char au lieu de l'écran. Utile pour construire des chaînes dynamiquement." },
    ],
    hint: "sprintf = printf dans un buffer. Premier argument = le tableau de char de destination.",
  },

  // ============================================================
  // MODULE 5 : STRUCTURES
  // ============================================================
  {
    id: 54,
    title: "Déclarer une structure",
    code: "struct Joueur\n{\n    char nom[50];\n    int score;\n};",
    explanation: [
      { term: "struct Joueur", desc: "On crée un nouveau type de données nommé 'Joueur'." },
      { term: "char nom[50]; int score;", desc: "Les champs (membres) de la structure. Chaque joueur aura un nom et un score." },
      { term: "};", desc: "La définition d'une struct se termine par un point-virgule après l'accolade fermante !" },
    ],
    hint: "struct NomType { champs; }; — Le point-virgule après } est obligatoire !",
  },
  {
    id: 55,
    title: "Créer une variable de type struct",
    code: "struct Joueur j1;",
    explanation: [
      { term: "struct Joueur", desc: "Pour déclarer une variable, on écrit 'struct' suivi du nom du type." },
      { term: "j1", desc: "Le nom de la variable qui contiendra les données d'un joueur." },
    ],
    hint: "Pour utiliser une struct, on écrit 'struct NomType nomVariable;'.",
  },
  {
    id: 56,
    title: "Accéder aux champs d'une struct (.)",
    code: "j1.score = 100;\nprintf(\"%s\", j1.nom);",
    explanation: [
      { term: ".", desc: "L'opérateur point permet d'accéder à un champ d'une structure. nomVariable.nomChamp." },
    ],
    hint: "Variable.champ pour accéder ou modifier un membre de la struct.",
  },
  {
    id: 57,
    title: "typedef pour simplifier",
    code: "typedef struct Joueur Joueur;",
    explanation: [
      { term: "typedef", desc: "Crée un alias de type. Après cette ligne, on peut écrire 'Joueur j1;' au lieu de 'struct Joueur j1;'." },
    ],
    hint: "typedef struct NomStruct NouvelAlias; — Pour ne plus avoir à écrire 'struct' à chaque utilisation.",
  },
  {
    id: 58,
    title: "typedef struct en une déclaration",
    code: "typedef struct\n{\n    char nom[50];\n    int score;\n} Joueur;",
    explanation: [
      { term: "typedef struct { ... } Joueur;", desc: "On combine la déclaration de la struct et son alias en une seule fois. C'est la manière moderne et propre." },
    ],
    hint: "typedef struct { champs; } NomAlias; — La méthode propre et directe.",
  },
  {
    id: 59,
    title: "Pointeur sur struct et opérateur flèche (->)",
    code: "Joueur *p = &j1;\np->score = 200;",
    explanation: [
      { term: "->", desc: "L'opérateur flèche (->) accède à un champ d'une struct via un POINTEUR. p->score est équivalent à (*p).score." },
    ],
    hint: "Avec un pointeur de struct, on utilise -> au lieu de . pour accéder aux champs.",
  },

  // ============================================================
  // MODULE 6 : ALLOCATION DYNAMIQUE DE MÉMOIRE
  // ============================================================
  {
    id: 60,
    title: "Inclure <stdlib.h>",
    code: "#include <stdlib.h>",
    explanation: [
      { term: "<stdlib.h>", desc: "Standard Library. Contient malloc, free, calloc, realloc, rand, exit, etc." },
    ],
    hint: "stdlib = standard library. Nécessaire pour toute gestion dynamique de la mémoire.",
  },
  {
    id: 61,
    title: "Allouer de la mémoire (malloc)",
    code: "int *p = malloc(5 * sizeof(int));",
    explanation: [
      { term: "malloc", desc: "Memory ALLOCate. Réserve un bloc de mémoire sur le TAS (heap) et renvoie son adresse." },
      { term: "5 * sizeof(int)", desc: "On demande assez de place pour 5 entiers. sizeof(int) donne la taille d'un int en octets." },
    ],
    hint: "malloc(nombre * sizeof(type)). Renvoie un pointeur vers le bloc alloué.",
  },
  {
    id: 62,
    title: "Vérifier l'échec de malloc",
    code: "if (p == NULL)\n    return 1;",
    explanation: [
      { term: "if (p == NULL)", desc: "Si malloc échoue (plus de mémoire disponible), il renvoie NULL. TOUJOURS vérifier avant utilisation !" },
    ],
    hint: "Après chaque malloc, toujours vérifier si le résultat est NULL. C'est une règle de sécurité.",
  },
  {
    id: 63,
    title: "Libérer la mémoire (free)",
    code: "free(p);\np = NULL;",
    explanation: [
      { term: "free(p)", desc: "Libère le bloc de mémoire pointé par p. OBLIGATOIRE après chaque malloc pour éviter les fuites mémoire." },
      { term: "p = NULL;", desc: "Bonne pratique : mettre le pointeur à NULL après free pour éviter les 'pointeurs dangling'." },
    ],
    hint: "free() libère la mémoire allouée. Toujours libérer ce qu'on alloue ! Puis mettre à NULL.",
  },
  {
    id: 64,
    title: "calloc (alloue et met à zéro)",
    code: "int *p = calloc(5, sizeof(int));",
    explanation: [
      { term: "calloc", desc: "Comme malloc mais initialise tout le bloc à zéro. Prend deux arguments : nombre d'éléments et taille de chacun." },
    ],
    hint: "calloc(nombre, taille) : alloue ET initialise à 0. Deux arguments séparés (pas de multiplication).",
  },
  {
    id: 65,
    title: "Redimensionner un tableau (realloc)",
    code: "p = realloc(p, 10 * sizeof(int));",
    explanation: [
      { term: "realloc", desc: "REALLOCate. Redimensionne un bloc alloué. Peut déplacer le bloc en mémoire et renvoie la nouvelle adresse." },
      { term: "p = realloc(p, ...)", desc: "TOUJOURS réassigner le résultat à p car l'adresse peut changer." },
    ],
    hint: "realloc(pointeur, nouvelle_taille). Réassigne obligatoirement le résultat au pointeur.",
  },
  {
    id: 66,
    title: "L'opérateur sizeof",
    code: "printf(\"%zu\", sizeof(int));",
    explanation: [
      { term: "sizeof", desc: "Renvoie la taille en octets d'un type ou d'une variable. Pas une fonction — c'est un opérateur (pas de parenthèses obligatoires)." },
      { term: "%zu", desc: "Format pour afficher un size_t (le type retourné par sizeof)." },
    ],
    hint: "sizeof(type) pour connaitre la taille en octets. Utilise %zu pour l'afficher.",
  },

  // ============================================================
  // MODULE 7 : FICHIERS
  // ============================================================
  {
    id: 67,
    title: "Le pointeur FILE",
    code: "FILE *fichier;",
    explanation: [
      { term: "FILE *", desc: "Un type spécial de pointeur qui représente un fichier ouvert. Défini dans <stdio.h>." },
    ],
    hint: "Pour manipuler un fichier, on déclare toujours un FILE* (majuscules).",
  },
  {
    id: 68,
    title: "Ouvrir un fichier (fopen)",
    code: 'fichier = fopen("data.txt", "r");',
    explanation: [
      { term: '"data.txt"', desc: "Le nom du fichier à ouvrir." },
      { term: '"r"', desc: "Le mode : 'r' = read (lecture), 'w' = write (écriture), 'a' = append (ajout)." },
    ],
    hint: "fopen(nom, mode). Modes : r = lecture, w = écriture (efface), a = ajout. Vérifier si != NULL !",
  },
  {
    id: 69,
    title: "Écrire dans un fichier (fprintf)",
    code: 'fprintf(fichier, "Score: %d\\n", score);',
    explanation: [
      { term: "fprintf", desc: "Comme printf mais le premier argument est le FILE*. Écrit dans le fichier au lieu de l'écran." },
    ],
    hint: "fprintf = printf dans un fichier. Même syntaxe mais avec le FILE* en premier argument.",
  },
  {
    id: 70,
    title: "Lire depuis un fichier (fscanf)",
    code: "fscanf(fichier, \"%d\", &score);",
    explanation: [
      { term: "fscanf", desc: "Comme scanf mais lit depuis un fichier. Le premier argument est le FILE*." },
    ],
    hint: "fscanf = scanf depuis un fichier. FILE* en premier, puis format et adresses.",
  },
  {
    id: 71,
    title: "Lire une ligne (fgets)",
    code: "fgets(buffer, sizeof(buffer), fichier);",
    explanation: [
      { term: "fgets", desc: "Lit une ligne entière depuis un fichier ou stdin. Plus sûre que gets() (qui est dangereuse)." },
      { term: "sizeof(buffer)", desc: "La taille maximale à lire, pour éviter les dépassements de buffer." },
    ],
    hint: "fgets(tableau, taille, fichier). Toujours préciser la taille max. Plus sûre que gets.",
  },
  {
    id: 72,
    title: "Fermer un fichier (fclose)",
    code: "fclose(fichier);",
    explanation: [
      { term: "fclose", desc: "Ferme le fichier et libère les ressources. TOUJOURS appeler fclose après fopen. Comme free pour malloc." },
    ],
    hint: "fclose(pointeur_fichier). Toujours fermer ce qu'on ouvre. Règle absolue.",
  },

  // ============================================================
  // MODULE 8 : OPÉRATIONS BIT À BIT
  // ============================================================
  {
    id: 73,
    title: "L'opérateur ET bit à bit (&)",
    code: "int r = a & b;",
    explanation: [
      { term: "a & b", desc: "Compare les bits de a et b. Chaque bit du résultat est 1 SEULEMENT si le bit correspondant est 1 dans A ET dans B. Exemple : 1100 & 1010 = 1000." },
    ],
    hint: "& bit à bit : le bit résultat est 1 si les DEUX bits sont à 1. Utile pour masquer des bits.",
  },
  {
    id: 74,
    title: "L'opérateur OU bit à bit (|)",
    code: "int r = a | b;",
    explanation: [
      { term: "a | b", desc: "Le bit résultat est 1 si AU MOINS l'un des deux bits est à 1. Exemple : 1100 | 1010 = 1110." },
    ],
    hint: "| bit à bit : le bit résultat est 1 si AU MOINS un des deux bits est à 1. Utile pour allumer des bits.",
  },
  {
    id: 75,
    title: "L'opérateur XOR bit à bit (^)",
    code: "int r = a ^ b;",
    explanation: [
      { term: "a ^ b", desc: "eXclusive OR. Le bit résultat est 1 si les deux bits sont DIFFÉRENTS. Exemple : 1100 ^ 1010 = 0110." },
    ],
    hint: "^ (XOR) : 1 si différents, 0 si identiques. Propriété : a^b^b = a (utile pour chiffrer).",
  },
  {
    id: 76,
    title: "L'opérateur NOT bit à bit (~)",
    code: "int r = ~a;",
    explanation: [
      { term: "~a", desc: "Inverse TOUS les bits de a. Les 0 deviennent 1 et les 1 deviennent 0." },
    ],
    hint: "~ inverse tous les bits. ~0 = tous les bits à 1. Utile pour créer des masques.",
  },
  {
    id: 77,
    title: "Décalage à gauche (<<)",
    code: "int r = a << 2;",
    explanation: [
      { term: "<< 2", desc: "Décale tous les bits de a vers la gauche de 2 positions. Équivaut à multiplier par 2 pour chaque décalage (ici x4). Très rapide !" },
    ],
    hint: "<< n = multiplier par 2^n. Plus rapide qu'une vraie multiplication.",
  },
  {
    id: 78,
    title: "Décalage à droite (>>)",
    code: "int r = a >> 1;",
    explanation: [
      { term: ">> 1", desc: "Décale tous les bits de a vers la droite de 1 position. Équivaut à une division entière par 2." },
    ],
    hint: ">> n = diviser par 2^n (division entière). Plus rapide qu'une vraie division.",
  },
  {
    id: 79,
    title: "Allumer un bit (Bitmasking SET)",
    code: "flags |= (1 << n);",
    explanation: [
      { term: "1 << n", desc: "Crée un masque avec seulement le bit n allumé." },
      { term: "|=", desc: "Applique le masque avec OR : allume le bit n dans flags sans toucher aux autres." },
    ],
    hint: "Pour allumer le bit n : flags |= (1 << n). Le | allume, le << positionne.",
  },
  {
    id: 80,
    title: "Éteindre un bit (Bitmasking CLEAR)",
    code: "flags &= ~(1 << n);",
    explanation: [
      { term: "~(1 << n)", desc: "Crée un masque avec tous les bits à 1 SAUF le bit n." },
      { term: "&=", desc: "Applique le masque avec AND : éteint le bit n sans toucher aux autres." },
    ],
    hint: "Pour éteindre le bit n : flags &= ~(1 << n). Le & éteint, le ~ inverse le masque.",
  },
  {
    id: 81,
    title: "Champ de bits dans une struct",
    code: "struct Flags\n{\n    unsigned int actif : 1;\n    unsigned int mode : 2;\n};",
    explanation: [
      { term: ": 1", desc: "Indique que ce champ n'occupe qu'1 seul bit. Permet de compacter plusieurs flags dans un seul entier." },
      { term: ": 2", desc: "Ce champ occupe 2 bits. Peut donc valoir 0, 1, 2 ou 3." },
    ],
    hint: "Champ : nombre_de_bits. Très économe en mémoire pour stocker des flags.",
  },

  // ============================================================
  // MODULE 9 : MÉMOIRE AVANCÉE
  // ============================================================
  {
    id: 82,
    title: "L'union (partage de mémoire)",
    code: "union Data\n{\n    int i;\n    float f;\n};",
    explanation: [
      { term: "union", desc: "Comme une struct, mais TOUS les champs partagent le MÊME espace mémoire. La taille de l'union est celle de son plus grand champ. Un seul champ est valide à la fois." },
    ],
    hint: "union vs struct : dans une union, tous les champs occupent le MÊME espace mémoire.",
  },
  {
    id: 83,
    title: "Le mot-clé volatile",
    code: "volatile int etat_capteur;",
    explanation: [
      { term: "volatile", desc: "Indique au compilateur que cette variable peut être modifiée à tout moment (par le matériel, un autre thread, une interruption). Le compilateur ne la mettra pas en cache et la relira à chaque accès." },
    ],
    hint: "volatile = 'ne pas optimiser'. Essentiel pour les registres matériels et les variables partagées entre threads.",
  },
  {
    id: 84,
    title: "Le mot-clé restrict",
    code: "void copier(int *restrict dest, int *restrict src);",
    explanation: [
      { term: "restrict", desc: "Promesse au compilateur : ce pointeur est le SEUL moyen d'accéder à ces données dans cette fonction. Permet des optimisations agressives. Si la promesse est violée, comportement indéfini." },
    ],
    hint: "restrict = 'je promets que ces pointeurs ne se chevauchent pas'. Optimise le code généré.",
  },
  {
    id: 85,
    title: "Alignement mémoire (alignas)",
    code: "#include <stdalign.h>\nalignas(16) int data[4];",
    explanation: [
      { term: "alignas(16)", desc: "Force le compilateur à aligner cette variable sur une frontière de 16 octets. Crucial pour les instructions SIMD (processeur vectoriel)." },
    ],
    hint: "alignas(N) force un alignement sur N octets. Nécessite <stdalign.h> en C11.",
  },

  // ============================================================
  // MODULE 10 : PRÉPROCESSEUR EXPERT
  // ============================================================
  {
    id: 86,
    title: "Définir une constante (#define)",
    code: "#define MAX 100",
    explanation: [
      { term: "#define", desc: "Le préprocesseur remplace chaque occurrence de MAX par 100 avant la compilation. Ce n'est pas une variable — pas de type, pas de point-virgule !" },
    ],
    hint: "Pas de = et pas de ; dans un #define. C'est une substitution de texte pure.",
  },
  {
    id: 87,
    title: "Macro avec argument",
    code: "#define CARRE(x) ((x) * (x))",
    explanation: [
      { term: "CARRE(x)", desc: "Une macro qui prend un argument. Chaque x dans le corps est remplacé par l'argument fourni." },
      { term: "((x) * (x))", desc: "Les parenthèses supplémentaires sont ESSENTIELLES pour éviter les erreurs de priorité d'opérateurs." },
    ],
    hint: "Toujours entourer chaque argument ET la macro entière de parenthèses dans le corps.",
  },
  {
    id: 88,
    title: "Stringification (#)",
    code: "#define AFFICHER(x) printf(#x \" = %d\\n\", x)",
    explanation: [
      { term: "#x", desc: "L'opérateur # convertit l'argument x en une chaîne de caractères littérale. AFFICHER(score) produit printf(\"score\" \" = %d\\n\", score)." },
    ],
    hint: "# devant un paramètre de macro le transforme en chaîne de caractères littérale.",
  },
  {
    id: 89,
    title: "Concaténation de tokens (##)",
    code: "#define CREER(n) variable_##n",
    explanation: [
      { term: "##", desc: "L'opérateur ## colle deux tokens ensemble. CREER(1) donne variable_1. Utile pour générer du code automatiquement." },
    ],
    hint: "## colle deux tokens. Avant ## = partie gauche, après = partie droite. Forme un nouveau nom.",
  },
  {
    id: 90,
    title: "Macros variadiques (__VA_ARGS__)",
    code: "#define LOG(...) printf(__VA_ARGS__)",
    explanation: [
      { term: "...", desc: "Indique que la macro accepte un nombre variable d'arguments." },
      { term: "__VA_ARGS__", desc: "Représente tous les arguments variables fournis. LOG(\"Score: %d\", n) devient printf(\"Score: %d\", n)." },
    ],
    hint: "... dans les paramètres, __VA_ARGS__ dans le corps. Pour créer des macros flexibles comme printf.",
  },
  {
    id: 91,
    title: "Garde d'inclusion (#ifndef)",
    code: "#ifndef MON_HEADER_H\n#define MON_HEADER_H\n\n#endif",
    explanation: [
      { term: "#ifndef", desc: "IF NOT DEFined. Vérifie si la macro n'est pas encore définie." },
      { term: "#define MON_HEADER_H", desc: "Si non définie, on la définit — le fichier n'aura jamais été inclus deux fois." },
      { term: "#endif", desc: "Ferme le bloc conditionnel." },
    ],
    hint: "Toujours entourer le contenu d'un .h de ces gardes pour éviter les inclusions multiples.",
  },

  // ============================================================
  // MODULE 11 : FONCTIONS AVANCÉES
  // ============================================================
  {
    id: 92,
    title: "Déclarer un pointeur de fonction",
    code: "int (*operation)(int, int);",
    explanation: [
      { term: "int (*operation)(int, int)", desc: "Un pointeur nommé 'operation' qui peut pointer vers n'importe quelle fonction prenant 2 int et retournant un int. Les parenthèses autour de *operation sont obligatoires." },
    ],
    hint: "type_retour (*nom_pointeur)(type_params). Les parenthèses autour de *nom sont OBLIGATOIRES.",
  },
  {
    id: 93,
    title: "Utiliser un pointeur de fonction",
    code: "operation = addition;\nint r = operation(5, 3);",
    explanation: [
      { term: "operation = addition", desc: "On assigne la fonction 'addition' au pointeur. Le nom de la fonction seul (sans parenthèses) est son adresse." },
      { term: "operation(5, 3)", desc: "On appelle la fonction via le pointeur, comme une fonction normale." },
    ],
    hint: "Assigner sans parenthèses, appeler avec. Le nom de la fonction seul = son adresse.",
  },
  {
    id: 94,
    title: "Inclure <stdarg.h>",
    code: "#include <stdarg.h>",
    explanation: [
      { term: "<stdarg.h>", desc: "Bibliothèque pour créer des fonctions avec un nombre variable d'arguments (comme printf). Contient va_list, va_start, va_arg, va_end." },
    ],
    hint: "stdarg = standard arguments. Nécessaire pour les fonctions variadiques (à nombre variable d'arguments).",
  },
  {
    id: 95,
    title: "Fonction variadique (va_list)",
    code: "int somme(int n, ...)\n{\n    va_list args;\n    va_start(args, n);\n    va_end(args);\n}",
    explanation: [
      { term: "...", desc: "Indique une liste variable d'arguments. Doit être précédé d'au moins un paramètre fixe." },
      { term: "va_list args", desc: "Une liste qui va contenir les arguments variables." },
      { term: "va_start(args, n)", desc: "Initialise la liste à partir du dernier paramètre fixe (ici n)." },
      { term: "va_end(args)", desc: "Nettoie la liste. TOUJOURS appeler avant de quitter la fonction." },
    ],
    hint: "Séquence : va_list, va_start(liste, dernier_fixe), va_arg pour lire, va_end pour nettoyer.",
  },
  {
    id: 96,
    title: "Lire un argument variable (va_arg)",
    code: "int val = va_arg(args, int);",
    explanation: [
      { term: "va_arg(args, int)", desc: "Lit le prochain argument de la liste et avance le curseur. Tu dois connaître le type à l'avance — C ne peut pas le déduire automatiquement." },
    ],
    hint: "va_arg(liste, type) : lit l'argument suivant. Tu dois connaître le type.",
  },
  {
    id: 97,
    title: "Saut non-local (setjmp / longjmp)",
    code: "#include <setjmp.h>\njmp_buf env;\nif (setjmp(env) == 0) { }\nelse { }",
    explanation: [
      { term: "jmp_buf env", desc: "Une variable qui sauvegarde l'état du programme (registres, pile) à un point précis." },
      { term: "setjmp(env)", desc: "Sauvegarde l'état. Retourne 0 la première fois. Retourne une valeur non-nulle si on y revient via longjmp." },
    ],
    hint: "setjmp sauvegarde le point de retour. longjmp y revient comme un goto multi-niveaux.",
  },
  {
    id: 98,
    title: "Effectuer un saut (longjmp)",
    code: "longjmp(env, 1);",
    explanation: [
      { term: "longjmp(env, 1)", desc: "Saute IMMÉDIATEMENT au point où setjmp(env) avait été appelé. setjmp retourne alors la valeur 1. Utilisé pour la gestion d'erreurs en C." },
    ],
    hint: "longjmp(env, valeur) : revient au setjmp correspondant, qui retourne cette valeur.",
  },
  {
    id: 99,
    title: "Les énumérations (enum)",
    code: "enum Couleur { ROUGE, VERT, BLEU };",
    explanation: [
      { term: "enum", desc: "Crée un ensemble de constantes entières nommées. ROUGE vaut 0, VERT vaut 1, BLEU vaut 2 par défaut." },
      { term: "ROUGE, VERT, BLEU", desc: "Les membres de l'énumération. Par convention, en MAJUSCULES." },
    ],
    hint: "enum NomType { VALEUR1, VALEUR2 }; — Les valeurs commencent à 0 par défaut.",
  },
  {
    id: 100,
    title: "Utiliser une enum avec typedef",
    code: "typedef enum { ROUGE, VERT, BLEU } Couleur;\nCouleur c = VERT;",
    explanation: [
      { term: "typedef enum { ... } Couleur;", desc: "On combine la déclaration et l'alias en une fois. On peut ensuite utiliser 'Couleur' directement comme type." },
    ],
    hint: "typedef enum { valeurs } NomType; — La méthode propre pour éviter d'écrire 'enum' partout.",
  },

  // ============================================================
  // MODULE 12 : MULTITHREADING (POSIX)
  // ============================================================
  {
    id: 101,
    title: "Inclure <pthread.h>",
    code: "#include <pthread.h>",
    explanation: [
      { term: "<pthread.h>", desc: "POSIX Threads. La bibliothèque standard de multithreading sur Linux/macOS. Compiler avec -lpthread. Contient pthread_create, pthread_join, mutex..." },
    ],
    hint: "pthread = POSIX thread. Compiler avec le flag -lpthread.",
  },
  {
    id: 102,
    title: "Créer un thread (pthread_create)",
    code: "pthread_t tid;\npthread_create(&tid, NULL, ma_fonction, NULL);",
    explanation: [
      { term: "pthread_t tid", desc: "L'identifiant du thread." },
      { term: "pthread_create(&tid, NULL, ma_fonction, NULL)", desc: "Crée un thread qui exécute 'ma_fonction'. Les arguments : &id, options(NULL=défaut), fonction, argument(NULL si aucun)." },
    ],
    hint: "pthread_create(&id, NULL, fonction, argument). La fonction doit retourner void* et prendre un void*.",
  },
  {
    id: 103,
    title: "Attendre un thread (pthread_join)",
    code: "pthread_join(tid, NULL);",
    explanation: [
      { term: "pthread_join", desc: "Attend que le thread se termine. Bloque le thread courant jusqu'à la fin du thread tid. Comme 'join' dans d'autres langages." },
    ],
    hint: "pthread_join(id, NULL) : attends que ce thread finisse avant de continuer.",
  },
  {
    id: 104,
    title: "Déclarer un mutex",
    code: "pthread_mutex_t verrou = PTHREAD_MUTEX_INITIALIZER;",
    explanation: [
      { term: "pthread_mutex_t", desc: "Un verrou mutex (MUTual EXclusion). Empêche plusieurs threads d'accéder simultanément à une ressource partagée." },
      { term: "PTHREAD_MUTEX_INITIALIZER", desc: "Initialisation statique d'un mutex. Alternative : pthread_mutex_init()." },
    ],
    hint: "Déclare et initialise le mutex avec PTHREAD_MUTEX_INITIALIZER. Protège les ressources partagées.",
  },
  {
    id: 105,
    title: "Verrouiller et déverrouiller un mutex",
    code: "pthread_mutex_lock(&verrou);\n/* section critique */\npthread_mutex_unlock(&verrou);",
    explanation: [
      { term: "pthread_mutex_lock", desc: "Verrouille le mutex. Si un autre thread l'a déjà verrou, attend qu'il soit libéré." },
      { term: "pthread_mutex_unlock", desc: "Libère le mutex. TOUJOURS déverrouiller après avoir terminé. Sinon : deadlock !" },
    ],
    hint: "Lock avant la section critique, unlock après. Toujours. Sinon deadlock garanti.",
  },
  {
    id: 106,
    title: "Variable atomique (<stdatomic.h>)",
    code: "#include <stdatomic.h>\natomic_int compteur = 0;\natomic_fetch_add(&compteur, 1);",
    explanation: [
      { term: "atomic_int", desc: "Un entier dont les opérations sont atomiques (indivisibles). Aucun mutex nécessaire pour les opérations simples. Disponible en C11." },
      { term: "atomic_fetch_add", desc: "Incrémente de façon atomique (thread-safe). Équivalent à compteur++ mais sans race condition." },
    ],
    hint: "atomic_int pour un compteur partagé thread-safe. Plus rapide qu'un mutex pour les opérations simples.",
  },

  // ============================================================
  // MODULE 13 : IPC ET SIGNAUX
  // ============================================================
  {
    id: 107,
    title: "Intercepter un signal (signal.h)",
    code: "#include <signal.h>\nvoid handler(int sig) { }\nsignal(SIGINT, handler);",
    explanation: [
      { term: "SIGINT", desc: "Signal d'interruption (Ctrl+C). Il en existe d'autres : SIGSEGV (segfault), SIGTERM, SIGKILL..." },
      { term: "signal(SIGINT, handler)", desc: "Enregistre la fonction 'handler' pour intercepter SIGINT. Quand Ctrl+C est pressé, handler est appelé." },
    ],
    hint: "signal(SIGNAL, fonction_handler) pour intercepter des événements système (Ctrl+C, segfault...).",
  },
  {
    id: 108,
    title: "Créer un processus fils (fork)",
    code: "#include <unistd.h>\npid_t pid = fork();",
    explanation: [
      { term: "fork()", desc: "Crée une copie exacte du processus courant. Renvoie 0 dans le processus FILS et le PID du fils dans le PÈRE. Renvoie -1 en cas d'erreur." },
      { term: "pid_t", desc: "Le type pour un identifiant de processus (PID)." },
    ],
    hint: "fork() : 0 = dans le fils, >0 = dans le père (valeur = PID du fils), -1 = erreur.",
  },
  {
    id: 109,
    title: "Créer un pipe",
    code: "int fd[2];\npipe(fd);",
    explanation: [
      { term: "pipe(fd)", desc: "Crée un canal de communication unidirectionnel. fd[0] = extrémité de lecture, fd[1] = extrémité d'écriture." },
      { term: "int fd[2]", desc: "Un tableau de 2 descripteurs de fichiers : le tube de lecture et le tube d'écriture." },
    ],
    hint: "pipe(fd) : fd[0] = lecture, fd[1] = écriture. Utilisé pour la communication entre processus père/fils.",
  },
  {
    id: 110,
    title: "Mémoire partagée (mmap)",
    code: "#include <sys/mman.h>\nvoid *m = mmap(NULL, taille,\n    PROT_READ|PROT_WRITE,\n    MAP_SHARED|MAP_ANONYMOUS,\n    -1, 0);",
    explanation: [
      { term: "mmap", desc: "Memory MAP. Mappe une région de mémoire (ou un fichier) dans l'espace d'adressage du processus. Avec MAP_SHARED, plusieurs processus peuvent partager la même mémoire." },
      { term: "PROT_READ|PROT_WRITE", desc: "Droits d'accès : lecture et écriture." },
    ],
    hint: "mmap crée une zone de mémoire partagée. À libérer avec munmap(m, taille).",
  },

  // ============================================================
  // MODULE 14 : RÉSEAU (SOCKETS)
  // ============================================================
  {
    id: 111,
    title: "Créer un socket",
    code: "#include <sys/socket.h>\nint sock = socket(AF_INET, SOCK_STREAM, 0);",
    explanation: [
      { term: "AF_INET", desc: "Address Family INTERNET : on utilise le protocole IPv4." },
      { term: "SOCK_STREAM", desc: "Type de socket : flux TCP (connexion fiable). L'alternative est SOCK_DGRAM pour UDP." },
    ],
    hint: "socket(AF_INET, SOCK_STREAM, 0) : crée un socket TCP/IPv4. Retourne un descripteur de fichier.",
  },
  {
    id: 112,
    title: "Configurer l'adresse du serveur",
    code: "struct sockaddr_in addr;\naddr.sin_family = AF_INET;\naddr.sin_port = htons(8080);\naddr.sin_addr.s_addr = INADDR_ANY;",
    explanation: [
      { term: "sockaddr_in", desc: "Structure représentant une adresse réseau IPv4." },
      { term: "htons(8080)", desc: "Host TO Network Short : convertit le port 8080 en ordre des octets réseau (big-endian)." },
      { term: "INADDR_ANY", desc: "Écoute sur toutes les interfaces réseau disponibles." },
    ],
    hint: "sockaddr_in pour configurer l'adresse. htons() pour le port, INADDR_ANY pour écouter partout.",
  },
  {
    id: 113,
    title: "Lier, écouter, accepter (serveur)",
    code: "bind(sock, (struct sockaddr *)&addr, sizeof(addr));\nlisten(sock, 5);\nint client = accept(sock, NULL, NULL);",
    explanation: [
      { term: "bind", desc: "Associe le socket à l'adresse et au port configurés." },
      { term: "listen(sock, 5)", desc: "Met le socket en écoute. 5 = taille de la file d'attente de connexions." },
      { term: "accept", desc: "Attend et accepte une connexion client. Retourne un nouveau socket pour cette connexion." },
    ],
    hint: "Séquence serveur : bind → listen → accept. accept est bloquant : il attend un client.",
  },
  {
    id: 114,
    title: "Envoyer et recevoir des données",
    code: "send(sock, \"hello\", 5, 0);\nchar buf[1024];\nrecv(sock, buf, sizeof(buf), 0);",
    explanation: [
      { term: "send(sock, données, taille, 0)", desc: "Envoie des données sur le socket. Le dernier argument 0 = flags par défaut." },
      { term: "recv(sock, buf, taille, 0)", desc: "Reçoit des données dans le buffer. Bloquant par défaut. Retourne le nombre d'octets reçus." },
    ],
    hint: "send envoie, recv reçoit. Les deux sont bloquants par défaut. Toujours close(sock) à la fin.",
  },

  // ============================================================
  // MODULE 15 : C ULTRA-BAS NIVEAU
  // ============================================================
  {
    id: 115,
    title: "Chargement dynamique (dlopen)",
    code: "#include <dlfcn.h>\nvoid *lib = dlopen(\"libm.so\", RTLD_LAZY);",
    explanation: [
      { term: "dlopen", desc: "Charge dynamiquement une bibliothèque partagée (.so sur Linux, .dll sur Windows) au moment de l'exécution, pas à la compilation." },
      { term: "RTLD_LAZY", desc: "Résolution des symboles différée (au moment de leur utilisation, pas au chargement)." },
    ],
    hint: "dlopen charge une lib dynamiquement. dlsym pour obtenir une fonction. dlclose pour décharger.",
  },
  {
    id: 116,
    title: "Obtenir une fonction dynamique (dlsym)",
    code: "typedef double (*fn_t)(double);\nfn_t cosinus = dlsym(lib, \"cos\");",
    explanation: [
      { term: "dlsym(lib, \"cos\")", desc: "Cherche la fonction 'cos' dans la bibliothèque chargée et retourne son adresse sous forme de pointeur." },
      { term: "fn_t", desc: "On doit caster via un typedef de pointeur de fonction pour pouvoir appeler la fonction." },
    ],
    hint: "dlsym retourne un void* qu'on caste en pointeur de fonction pour pouvoir l'appeler.",
  },
  {
    id: 117,
    title: "Assembleur inline (lecture de registre)",
    code: "__asm__ volatile (\n    \"nop\"\n);",
    explanation: [
      { term: "__asm__", desc: "Insertion d'instructions assembleur directement dans le code C. Permet d'accéder à des fonctionnalités du processeur inaccessibles autrement." },
      { term: "volatile", desc: "Interdit au compilateur d'optimiser ou supprimer ces instructions assembleur." },
      { term: "nop", desc: "No OPeration : instruction assembleur qui ne fait rien (utile pour les timings précis)." },
    ],
    hint: "__asm__ volatile (\"instructions_asm\"); pour du code machine inline. Utilisé dans les OS et drivers.",
  },
  {
    id: 118,
    title: "Lire le compteur de cycles CPU",
    code: "unsigned long long rdtsc(void)\n{\n    unsigned int lo, hi;\n    __asm__ volatile (\n        \"rdtsc\" : \"=a\"(lo), \"=d\"(hi));\n    return ((unsigned long long)hi << 32) | lo;\n}",
    explanation: [
      { term: "rdtsc", desc: "Read Time Stamp Counter. Lit le compteur de cycles du processeur. Utilisé pour du profilage ultra-précis." },
      { term: "\"=a\"(lo), \"=d\"(hi)", desc: "Contraintes de sortie : le résultat est dans les registres EAX (a) et EDX (d)." },
    ],
    hint: "rdtsc est l'instruction x86 pour lire le timestamp counter. Permet de mesurer en cycles CPU.",
  },
  {
    id: 119,
    title: "Directive d'optimisation __attribute__",
    code: "void __attribute__((noreturn)) quitter(void)\n{\n    exit(1);\n}",
    explanation: [
      { term: "__attribute__((noreturn))", desc: "Extension GCC. Indique que cette fonction ne retourne JAMAIS. Le compilateur peut faire des optimisations supplémentaires et désactiver l'avertissement de 'return' manquant." },
    ],
    hint: "__attribute__ est une extension GCC pour donner des infos supplémentaires au compilateur.",
  },
  {
    id: 120,
    title: "Structure d'une liste chaînée (nœud)",
    code: "typedef struct Noeud\n{\n    int valeur;\n    struct Noeud *suivant;\n} Noeud;",
    explanation: [
      { term: "struct Noeud *suivant", desc: "Pointeur vers le prochain nœud du même type. Une structure qui se référence elle-même — c'est la base de toutes les structures de données dynamiques." },
    ],
    hint: "Un nœud contient une valeur et un pointeur vers le nœud suivant. Le dernier pointe vers NULL.",
  },
  {
    id: 121,
    title: "Créer un nœud de liste chaînée",
    code: "Noeud *nouveau = malloc(sizeof(Noeud));\nnouveau->valeur = 42;\nnouveau->suivant = NULL;",
    explanation: [
      { term: "malloc(sizeof(Noeud))", desc: "Alloue dynamiquement la mémoire pour un nœud. La liste grandit ainsi à la demande." },
      { term: "->suivant = NULL", desc: "Le dernier nœud pointe toujours vers NULL pour marquer la fin de la liste." },
    ],
    hint: "Créer un nœud : malloc + remplir les champs + suivant = NULL pour le dernier.",
  },
  {
    id: 122,
    title: "Insérer en tête de liste",
    code: "nouveau->suivant = tete;\ntete = nouveau;",
    explanation: [
      { term: "nouveau->suivant = tete", desc: "Le nouveau nœud pointe vers l'ancien premier nœud." },
      { term: "tete = nouveau", desc: "La tête de la liste devient le nouveau nœud." },
    ],
    hint: "Pour insérer en tête : 1) faire pointer le nouveau vers l'ancienne tête, 2) mettre à jour la tête.",
  },
  {
    id: 123,
    title: "Parcourir une liste chaînée",
    code: "Noeud *courant = tete;\nwhile (courant != NULL)\n{\n    courant = courant->suivant;\n}",
    explanation: [
      { term: "courant != NULL", desc: "On s'arrête quand on atteint la fin de la liste (le NULL qui termine la liste)." },
      { term: "courant = courant->suivant", desc: "On avance au nœud suivant à chaque tour." },
    ],
    hint: "Partir de la tête, avancer avec ->suivant, s'arrêter quand courant == NULL.",
  },
];
