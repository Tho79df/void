// curriculum.js — Curriculum complet du langage C
// 6 niveaux • 70 chapitres • 146+ concepts

export const curriculum = [

  // ================================================================
  // NIVEAU 1 : DÉBUTANT
  // ================================================================
  {
    id: 'debutant', title: 'Débutant', icon: '🌱', color: '#30d158',
    chapters: [
      {
        id: 'intro', title: 'Introduction au C', icon: '👋',
        concepts: [
          {
            id: 1, title: "Structure minimale d'un programme",
            code: "#include <stdio.h>\n\nint main(void)\n{\n    return 0;\n}",
            explanation: [
              { term: "#include <stdio.h>", desc: "Importe la bibliothèque d'entrées/sorties (printf, scanf...)." },
              { term: "int main(void)", desc: "Point d'entrée obligatoire de tout programme C." },
              { term: "return 0;", desc: "Renvoie 0 au système pour signaler un succès." },
            ],
            hint: "include, ligne vide, main, accolades, return 0. Le squelette de base.",
          },
          {
            id: 2, title: "Compiler avec gcc",
            code: "gcc -o programme source.c",
            explanation: [
              { term: "gcc", desc: "GNU C Compiler : le compilateur C le plus répandu." },
              { term: "-o programme", desc: "Nom du fichier exécutable produit." },
              { term: "source.c", desc: "Le fichier source à compiler." },
            ],
            hint: "gcc -o nom_executable fichier_source.c",
          },
          {
            id: 3, title: "Afficher du texte (printf)",
            code: 'printf("Hello, World!\\n");',
            explanation: [
              { term: "printf", desc: "Affiche du texte formaté. Nécessite <stdio.h>." },
              { term: "\\n", desc: "Caractère de retour à la ligne." },
            ],
            hint: "printf(\"texte\\n\"); — guillemets doubles et \\n pour la nouvelle ligne.",
          },
          {
            id: 4, title: "Commentaires",
            code: "// Commentaire ligne\n/* Commentaire\n   multi-lignes */",
            explanation: [
              { term: "//", desc: "Commente jusqu'à la fin de la ligne." },
              { term: "/* ... */", desc: "Commente un bloc sur plusieurs lignes." },
            ],
            hint: "// pour une ligne, /* */ pour un bloc.",
          },
        ],
      },
      {
        id: 'variables', title: 'Variables et types', icon: '📦',
        concepts: [
          {
            id: 5, title: "Entier (int)",
            code: "int age = 25;",
            explanation: [
              { term: "int", desc: "Nombre entier. 4 octets, de -2 milliards à +2 milliards." },
              { term: "age = 25", desc: "Initialisation de la variable à 25." },
            ],
            hint: "int pour les entiers. Toujours initialiser avant d'utiliser.",
          },
          {
            id: 6, title: "Double précision (double)",
            code: "double pi = 3.14159265;",
            explanation: [
              { term: "double", desc: "Nombre à virgule haute précision. 8 octets." },
              { term: "3.14159265", desc: "On utilise un POINT (.), jamais une virgule." },
            ],
            hint: "double pour les décimaux. Toujours un point pour la décimale.",
          },
          {
            id: 7, title: "Caractère (char)",
            code: "char lettre = 'A';",
            explanation: [
              { term: "char", desc: "Un seul caractère. 1 octet. Code ASCII." },
              { term: "'A'", desc: "Un char s'écrit entre APOSTROPHES simples." },
            ],
            hint: "char avec apostrophes SIMPLES. Guillemets doubles = chaîne.",
          },
          {
            id: 8, title: "Constante (const)",
            code: "const int MAX = 100;",
            explanation: [
              { term: "const", desc: "La valeur ne peut JAMAIS être modifiée après initialisation." },
            ],
            hint: "const avant le type. Doit être initialisée lors de la déclaration.",
          },
          {
            id: 9, title: "Formats printf (%d %f %c)",
            code: 'printf("%d %f %c", age, pi, lettre);',
            explanation: [
              { term: "%d", desc: "Format pour int." },
              { term: "%f", desc: "Format pour float/double." },
              { term: "%c", desc: "Format pour char." },
            ],
            hint: "%d=int, %f=double, %c=char, %s=chaîne, %p=pointeur, %zu=size_t.",
          },
        ],
      },
      {
        id: 'operateurs', title: 'Opérateurs', icon: '⚙️',
        concepts: [
          {
            id: 10, title: "Opérateurs arithmétiques",
            code: "int r = (a + b) * c / d % e;",
            explanation: [
              { term: "+ - * /", desc: "Addition, soustraction, multiplication, division entière." },
              { term: "%", desc: "Modulo : reste de la division entière. 10 % 3 = 1." },
            ],
            hint: "Priorité : * / % avant + -. Les parenthèses changent l'ordre.",
          },
          {
            id: 11, title: "Affectation composée",
            code: "a += 5;\na -= 3;\na *= 2;\na /= 4;",
            explanation: [
              { term: "+=", desc: "a += 5 est identique à a = a + 5." },
            ],
            hint: "opérateur= : modifie la variable en place.",
          },
          {
            id: 12, title: "Comparaison et logique",
            code: "a == b  a != b  a < b  a > b\na && b  a || b  !a",
            explanation: [
              { term: "==", desc: "Égalité. ATTENTION : == compare, = affecte !" },
              { term: "&& ||", desc: "ET logique, OU logique." },
              { term: "!", desc: "NON logique. Inverse une valeur booléenne." },
            ],
            hint: "== pour comparer (deux signes). = pour affecter (un seul). Faute classique !",
          },
          {
            id: 13, title: "Opérateur ternaire (?:)",
            code: "int max = (a > b) ? a : b;",
            explanation: [
              { term: "(a > b) ? a : b", desc: "Si vrai → a, sinon → b. Équivalent compact de if/else." },
            ],
            hint: "condition ? valeur_si_vrai : valeur_si_faux — Sur une ligne.",
          },
        ],
      },
      {
        id: 'conditions', title: 'Conditions', icon: '🔀',
        concepts: [
          {
            id: 14, title: "if / else",
            code: "if (age >= 18)\n    printf(\"Majeur\\n\");\nelse\n    printf(\"Mineur\\n\");",
            explanation: [
              { term: "if (condition)", desc: "Exécute le bloc si la condition est vraie." },
              { term: "else", desc: "Exécute le bloc si la condition est fausse. Pas de condition après else." },
            ],
            hint: "Pas de point-virgule après if(...). else suit directement le if.",
          },
          {
            id: 15, title: "else if",
            code: "if (n < 0)      printf(\"négatif\");\nelse if (n == 0) printf(\"zéro\");\nelse             printf(\"positif\");",
            explanation: [
              { term: "else if", desc: "Teste une nouvelle condition si la précédente était fausse." },
            ],
            hint: "Chaîne : if → else if → else. Un seul bloc est exécuté.",
          },
          {
            id: 16, title: "switch / case",
            code: "switch (note)\n{\n    case 20: printf(\"Parfait\"); break;\n    case 10: printf(\"Moyen\");  break;\n    default: printf(\"Autre\");  break;\n}",
            explanation: [
              { term: "switch (expr)", desc: "Évalue l'expression et saute au case correspondant." },
              { term: "break;", desc: "OBLIGATOIRE. Sans break, l'exécution tombe dans le case suivant." },
              { term: "default:", desc: "Exécuté si aucun case ne correspond." },
            ],
            hint: "TOUJOURS mettre break; après chaque case. default: pour le cas général.",
          },
        ],
      },
      {
        id: 'boucles', title: 'Boucles', icon: '🔁',
        concepts: [
          {
            id: 17, title: "Boucle while",
            code: "int i = 0;\nwhile (i < 10)\n{\n    i++;\n}",
            explanation: [
              { term: "while (condition)", desc: "Répète le bloc tant que la condition est vraie. Vérifie AVANT d'exécuter." },
            ],
            hint: "Initialiser avant, modifier dans la boucle, sinon boucle infinie.",
          },
          {
            id: 18, title: "Boucle for",
            code: "for (int i = 0; i < 10; i++)\n{\n    printf(\"%d\\n\", i);\n}",
            explanation: [
              { term: "int i = 0", desc: "Initialisation : exécutée une seule fois." },
              { term: "i < 10", desc: "Condition : vérifiée avant chaque tour." },
              { term: "i++", desc: "Incrémentation : exécutée après chaque tour." },
            ],
            hint: "for : init; condition; incrémentation. Les 3 séparés par des ;",
          },
          {
            id: 19, title: "Boucle do-while",
            code: "int i = 0;\ndo\n{\n    i++;\n} while (i < 10);",
            explanation: [
              { term: "do { }", desc: "Bloc exécuté AU MOINS UNE FOIS avant de vérifier la condition." },
              { term: "} while (...);", desc: "Point-virgule obligatoire ici !" },
            ],
            hint: "do { bloc } while (cond); — Toujours exécuté au moins une fois.",
          },
          {
            id: 20, title: "break et continue",
            code: "if (i == 5) break;    // quitte la boucle\nif (i % 2 == 0) continue; // tour suivant",
            explanation: [
              { term: "break;", desc: "Quitte immédiatement la boucle." },
              { term: "continue;", desc: "Passe directement au tour suivant." },
            ],
            hint: "break = sortir. continue = passer au suivant.",
          },
        ],
      },
      {
        id: 'fonctions', title: 'Fonctions', icon: '🔧',
        concepts: [
          {
            id: 21, title: "Prototype de fonction",
            code: "int addition(int a, int b);",
            explanation: [
              { term: "int", desc: "Type de retour de la fonction." },
              { term: "(int a, int b)", desc: "Paramètres avec leur type." },
              { term: ";", desc: "Le prototype finit par ; (pas le corps)." },
            ],
            hint: "Le prototype déclare la signature. Se place avant main() ou dans un .h",
          },
          {
            id: 22, title: "Définir une fonction",
            code: "int addition(int a, int b)\n{\n    return a + b;\n}",
            explanation: [
              { term: "return a + b;", desc: "Calcule et renvoie la valeur. return quitte la fonction." },
            ],
            hint: "Même signature que le prototype mais sans ; après l'en-tête.",
          },
          {
            id: 23, title: "Fonction void (sans retour)",
            code: "void afficher(int x)\n{\n    printf(\"%d\\n\", x);\n}",
            explanation: [
              { term: "void", desc: "La fonction ne retourne aucune valeur." },
            ],
            hint: "void = aucune valeur de retour. Pas de return nécessaire.",
          },
        ],
      },
      {
        id: 'tableaux', title: 'Tableaux', icon: '📊',
        concepts: [
          {
            id: 24, title: "Déclarer et initialiser un tableau",
            code: "int notes[5] = {10, 15, 18, 12, 20};",
            explanation: [
              { term: "int notes[5]", desc: "Tableau de 5 entiers. Indices de 0 à 4." },
              { term: "{10, 15, ...}", desc: "Initialisation directe entre accolades." },
            ],
            hint: "Type nom[taille]. Indices de 0 à taille-1. Valeurs entre { }.",
          },
          {
            id: 25, title: "Accéder et parcourir",
            code: "notes[0] = 20;\nfor (int i = 0; i < 5; i++)\n    printf(\"%d\\n\", notes[i]);",
            explanation: [
              { term: "notes[0]", desc: "Premier élément (index 0)." },
              { term: "i < 5", desc: "La condition < (pas <=) évite de dépasser le dernier index." },
            ],
            hint: "Toujours i < taille. Index 0 = premier élément.",
          },
          {
            id: 26, title: "Tableau 2D (matrice)",
            code: "int grille[3][4];\ngrille[1][2] = 42;",
            explanation: [
              { term: "[3][4]", desc: "3 lignes, 4 colonnes." },
              { term: "grille[1][2]", desc: "Ligne 1, colonne 2." },
            ],
            hint: "[lignes][colonnes]. Indices commençant à 0.",
          },
        ],
      },
      {
        id: 'chaines', title: 'Chaînes de caractères', icon: '💬',
        concepts: [
          {
            id: 27, title: "Déclarer une chaîne",
            code: 'char nom[50] = "Alice";',
            explanation: [
              { term: "char nom[50]", desc: "Tableau de 50 char. Les chaînes C sont des tableaux de char." },
              { term: '"Alice"', desc: "5 caractères + \\0 automatique. 6 octets utilisés sur 50." },
            ],
            hint: "Toujours prévoir plus de place pour le \\0 final.",
          },
          {
            id: 28, title: "strlen, strcpy, strcmp, strcat",
            code: "#include <string.h>\nstrlen(s)         // longueur sans \\0\nstrcpy(dest, src) // copie src dans dest\nstrcmp(a, b) == 0 // vrai si identiques\nstrcat(dest, src) // colle src à dest",
            explanation: [
              { term: "strcmp == 0", desc: "JAMAIS == entre chaînes. strcmp retourne 0 si égales." },
            ],
            hint: "Nécessite <string.h>. Jamais == pour comparer des chaînes, utiliser strcmp.",
          },
          {
            id: 29, title: "Lire une chaîne (fgets)",
            code: "fgets(nom, sizeof(nom), stdin);",
            explanation: [
              { term: "fgets", desc: "Lit une ligne depuis stdin. Sécurisée : ne dépasse jamais le buffer." },
            ],
            hint: "Préférer fgets à scanf pour les chaînes. Plus sûre. Inclut \\n dans la chaîne.",
          },
        ],
      },
    ],
  },

  // ================================================================
  // NIVEAU 2 : INTERMÉDIAIRE
  // ================================================================
  {
    id: 'intermediaire', title: 'Intermédiaire', icon: '⚡', color: '#0071e3',
    chapters: [
      {
        id: 'pointeurs', title: 'Pointeurs', icon: '👆',
        concepts: [
          {
            id: 30, title: "Adresse (&) et déclaration (*)",
            code: "int age = 25;\nint *ptr = &age;",
            explanation: [
              { term: "&age", desc: "Adresse mémoire de la variable age." },
              { term: "int *ptr", desc: "Pointeur vers un int. Contient une adresse." },
            ],
            hint: "& donne l'adresse. * dans la déclaration = c'est un pointeur.",
          },
          {
            id: 31, title: "Déréférencement (*)",
            code: "printf(\"%d\\n\", *ptr);\n*ptr = 30;",
            explanation: [
              { term: "*ptr (lecture)", desc: "Accède à la valeur à l'adresse pointée." },
              { term: "*ptr = 30", desc: "Modifie la valeur à l'adresse pointée. Modifie age !" },
            ],
            hint: "* devant un pointeur = accès à la valeur. Sans * = l'adresse.",
          },
          {
            id: 32, title: "Passage par adresse",
            code: "void doubler(int *n)\n{\n    *n *= 2;\n}\ndoubler(&age);",
            explanation: [
              { term: "int *n", desc: "Reçoit une adresse. Peut modifier la variable originale." },
              { term: "doubler(&age)", desc: "On passe l'adresse. Sans &, age ne serait pas modifié." },
            ],
            hint: "Pour modifier une variable dans une fonction : paramètre int*, appel avec &variable.",
          },
          {
            id: 33, title: "Pointeur NULL",
            code: "int *ptr = NULL;\nif (ptr != NULL)\n    printf(\"%d\\n\", *ptr);",
            explanation: [
              { term: "NULL", desc: "Valeur nulle. Déréférencer NULL = crash garanti." },
            ],
            hint: "Toujours initialiser à NULL et vérifier != NULL avant d'utiliser.",
          },
        ],
      },
      {
        id: 'allocation', title: 'Allocation mémoire', icon: '🧠',
        concepts: [
          {
            id: 34, title: "malloc et free",
            code: "#include <stdlib.h>\nint *p = malloc(5 * sizeof(int));\nif (p == NULL) return 1;\nfree(p);\np = NULL;",
            explanation: [
              { term: "malloc(5 * sizeof(int))", desc: "Alloue l'espace pour 5 entiers sur le tas." },
              { term: "if (p == NULL)", desc: "TOUJOURS vérifier. malloc peut échouer." },
              { term: "free(p); p = NULL;", desc: "Libère la mémoire. Mettre à NULL évite le double-free." },
            ],
            hint: "malloc → vérifier NULL → utiliser → free → NULL. Règle absolue.",
          },
          {
            id: 35, title: "calloc et realloc",
            code: "int *p = calloc(5, sizeof(int));\np = realloc(p, 10 * sizeof(int));",
            explanation: [
              { term: "calloc(5, sizeof(int))", desc: "Alloue ET initialise à zéro. 2 arguments séparés." },
              { term: "p = realloc(p, ...)", desc: "Redimensionne. L'adresse peut changer. Toujours réaffecter !" },
            ],
            hint: "calloc(nb, taille) = malloc + zéro. realloc : toujours réaffecter le résultat.",
          },
          {
            id: 36, title: "sizeof",
            code: "printf(\"%zu\\n\", sizeof(int));\nprintf(\"%zu\\n\", sizeof(double));",
            explanation: [
              { term: "sizeof", desc: "Retourne la taille en octets. Calculé à la compilation." },
              { term: "%zu", desc: "Format pour size_t, le type de sizeof." },
            ],
            hint: "sizeof(type). %zu pour l'afficher. Pas besoin de & ni de ().",
          },
        ],
      },
      {
        id: 'structures', title: 'Structures', icon: '🏗️',
        concepts: [
          {
            id: 37, title: "Déclarer une structure (typedef)",
            code: "typedef struct\n{\n    char nom[50];\n    int age;\n} Personne;",
            explanation: [
              { term: "typedef struct { } Nom;", desc: "Nouveau type de données composé. Le ; après } est OBLIGATOIRE." },
            ],
            hint: "typedef struct { champs; } NomType; — Le ; après } est indispensable !",
          },
          {
            id: 38, title: "Accès avec . et ->",
            code: "Personne p;\np.age = 25;\nPersonne *ptr = &p;\nptr->age = 30;",
            explanation: [
              { term: ".", desc: "Accède aux champs d'une struct par valeur." },
              { term: "->", desc: "Accède aux champs via un POINTEUR. ptr->age = (*ptr).age." },
            ],
            hint: "Variable struct : point (.). Pointeur de struct : flèche (->).",
          },
          {
            id: 39, title: "Allouer une struct dynamiquement",
            code: "Personne *p = malloc(sizeof(Personne));\np->age = 20;\nfree(p);\np = NULL;",
            explanation: [
              { term: "malloc(sizeof(Personne))", desc: "Alloue la taille exacte de la struct." },
            ],
            hint: "malloc(sizeof(Type)). Accès avec ->. free() à la fin.",
          },
        ],
      },
      {
        id: 'enumerations', title: 'Énumérations', icon: '📋',
        concepts: [
          {
            id: 40, title: "typedef enum",
            code: "typedef enum {\n    ROUGE = 0,\n    VERT,\n    BLEU\n} Couleur;\nCouleur c = VERT;",
            explanation: [
              { term: "ROUGE = 0, VERT, BLEU", desc: "ROUGE vaut 0, VERT vaut 1, BLEU vaut 2 (auto-incrémentés)." },
            ],
            hint: "Les valeurs commencent à 0 et s'incrémentent automatiquement.",
          },
        ],
      },
      {
        id: 'fichiers', title: 'Fichiers', icon: '📁',
        concepts: [
          {
            id: 41, title: "fopen / fclose",
            code: 'FILE *f = fopen("data.txt", "r");\nif (f == NULL) { perror("fopen"); return 1; }\nfclose(f);',
            explanation: [
              { term: '"r"', desc: "Mode lecture. 'w'=écriture, 'a'=ajout." },
              { term: "fclose(f)", desc: "TOUJOURS fermer ce qu'on ouvre !" },
            ],
            hint: "fopen → vérifier NULL → utiliser → fclose.",
          },
          {
            id: 42, title: "fprintf / fgets",
            code: 'fprintf(f, "Score: %d\\n", score);\nchar ligne[256];\nwhile (fgets(ligne, sizeof(ligne), f))\n    printf("%s", ligne);',
            explanation: [
              { term: "fprintf(f, ...)", desc: "printf dans un fichier." },
              { term: "while (fgets(...))", desc: "Lit ligne par ligne jusqu'à NULL (fin de fichier)." },
            ],
            hint: "fprintf = printf + FILE* en premier. fgets dans un while lit tout le fichier.",
          },
        ],
      },
      {
        id: 'erreurs', title: 'Gestion des erreurs', icon: '🚨',
        concepts: [
          {
            id: 43, title: "errno et perror",
            code: "#include <errno.h>\nif (fopen(\"missing.txt\", \"r\") == NULL)\n    perror(\"fopen\");",
            explanation: [
              { term: "errno", desc: "Variable globale avec le code d'erreur de la dernière opération échouée." },
              { term: "perror(\"msg\")", desc: "Affiche 'msg: description de errno' sur stderr." },
            ],
            hint: "perror affiche automatiquement l'erreur. Toujours vérifier les retours de fonctions système.",
          },
        ],
      },
      {
        id: 'stdlib', title: 'Bibliothèque standard', icon: '📚',
        concepts: [
          {
            id: 44, title: "math.h : sqrt, pow",
            code: "#include <math.h>\ndouble r = sqrt(16.0);\ndouble p = pow(2.0, 10.0);\n// gcc source.c -lm",
            explanation: [
              { term: "-lm", desc: "Flag de compilation obligatoire pour lier libm." },
            ],
            hint: "<math.h> + gcc -lm. sqrt, pow, sin, cos, log, ceil, floor...",
          },
          {
            id: 45, title: "rand / srand / ctype",
            code: "#include <stdlib.h>\n#include <time.h>\n#include <ctype.h>\nsrand(time(NULL));\nint r = rand() % 100;\nchar c = toupper('a');",
            explanation: [
              { term: "srand(time(NULL))", desc: "Initialise le générateur aléatoire. UNE SEULE FOIS." },
              { term: "toupper", desc: "<ctype.h> : isdigit, isalpha, toupper, tolower..." },
            ],
            hint: "srand une fois. rand() % N pour borner. ctype.h pour classifier/convertir des chars.",
          },
        ],
      },
    ],
  },

  // ================================================================
  // NIVEAU 3 : AVANCÉ
  // ================================================================
  {
    id: 'avance', title: 'Avancé', icon: '🔥', color: '#ff9f0a',
    chapters: [
      {
        id: 'pointeurs-avances', title: 'Pointeurs avancés', icon: '🎯',
        concepts: [
          {
            id: 46, title: "Pointeur de pointeur (**)",
            code: "int a = 5;\nint *p = &a;\nint **pp = &p;\nprintf(\"%d\\n\", **pp);",
            explanation: [
              { term: "int **pp", desc: "Pointeur vers un pointeur vers un int." },
              { term: "**pp", desc: "Double déréférencement : accède à la valeur de a." },
            ],
            hint: "** = deux niveaux d'indirection. Utile pour char** (tableaux de chaînes).",
          },
          {
            id: 47, title: "Pointeur de fonction",
            code: "int (*fn)(int, int) = addition;\nint r = fn(5, 3);",
            explanation: [
              { term: "int (*fn)(int, int)", desc: "Pointeur vers une fonction retournant int et prenant 2 int." },
              { term: "fn = addition", desc: "Le nom d'une fonction sans () est son adresse." },
            ],
            hint: "retour (*nom)(params). Parenthèses autour de *nom obligatoires.",
          },
        ],
      },
      {
        id: 'bitwise', title: 'Bitwise et manipulation de bits', icon: '🔢',
        concepts: [
          {
            id: 48, title: "Opérateurs bit à bit",
            code: "a & b   // AND : 1 si les deux à 1\na | b   // OR  : 1 si au moins un à 1\na ^ b   // XOR : 1 si différents\n~a      // NOT : inverse tous les bits",
            explanation: [
              { term: "& | ^ ~", desc: "AND, OR, XOR, NOT bit à bit." },
            ],
            hint: "& masque, | allume, ^ bascule, ~ inverse.",
          },
          {
            id: 49, title: "Décalages << et >>",
            code: "int a = 1 << 3;  // a = 8  (x * 2^3)\nint b = 16 >> 2; // b = 4  (x / 2^2)",
            explanation: [
              { term: "<< n", desc: "Décale à gauche : multiplie par 2^n." },
              { term: ">> n", desc: "Décale à droite : divise par 2^n (entier)." },
            ],
            hint: "<< = x2^n, >> = /2^n. Plus rapide que * et /.",
          },
          {
            id: 50, title: "SET, CLEAR, TOGGLE, CHECK un bit",
            code: "flags |= (1 << n);   // SET\nflags &= ~(1 << n);  // CLEAR\nflags ^= (1 << n);   // TOGGLE\nint b = (flags >> n) & 1; // CHECK",
            explanation: [
              { term: "|= (1<<n)", desc: "Allume le bit n sans toucher aux autres." },
              { term: "&= ~(1<<n)", desc: "Éteint le bit n sans toucher aux autres." },
            ],
            hint: "SET=|, CLEAR=&~, TOGGLE=^, CHECK=>>& 1. Les 4 opérations fondamentales.",
          },
        ],
      },
      {
        id: 'memoire-avancee', title: 'Mémoire avancée', icon: '💽',
        concepts: [
          {
            id: 51, title: "union : partage d'espace mémoire",
            code: "typedef union {\n    int i;\n    float f;\n    char bytes[4];\n} Valeur;",
            explanation: [
              { term: "union", desc: "Tous les champs partagent le MÊME espace. Taille = taille du plus grand champ." },
            ],
            hint: "union vs struct : même espace pour tous les champs. Un seul valide à la fois.",
          },
          {
            id: 52, title: "volatile et restrict",
            code: "volatile int capteur = 0;\nvoid copier(int *restrict dest, const int *restrict src, int n);",
            explanation: [
              { term: "volatile", desc: "Interdit le cache du compilateur. Relit à chaque accès. Pour registres hardware." },
              { term: "restrict", desc: "Promesse de non-chevauchement. Permet des optimisations agressives." },
            ],
            hint: "volatile = relire à chaque fois. restrict = je promets que les zones ne se chevauchent pas.",
          },
        ],
      },
      {
        id: 'preprocesseur', title: 'Préprocesseur expert', icon: '⚗️',
        concepts: [
          {
            id: 53, title: "Macros avec arguments",
            code: "#define MAX(a, b) ((a) > (b) ? (a) : (b))\n#define CARRE(x)   ((x) * (x))",
            explanation: [
              { term: "((a) > (b) ? (a) : (b))", desc: "Parenthèses INDISPENSABLES ! Sans elles : CARRE(1+2) = 5 au lieu de 9." },
            ],
            hint: "Entourer CHAQUE argument et le corps de parenthèses dans une macro.",
          },
          {
            id: 54, title: "# ## __VA_ARGS__ et gardes",
            code: "#define STR(x)   #x\n#define CAT(a,b) a##b\n#define LOG(fmt, ...) printf(fmt, ##__VA_ARGS__)\n#pragma once",
            explanation: [
              { term: "#x", desc: "Stringifie l'argument." },
              { term: "a##b", desc: "Colle deux tokens." },
              { term: "__VA_ARGS__", desc: "Arguments variadiques d'une macro." },
              { term: "#pragma once", desc: "Garde d'inclusion. Empêche les inclusions multiples d'un .h." },
            ],
            hint: "# stringifie, ## colle. #pragma once dans chaque .h",
          },
        ],
      },
      {
        id: 'fonctions-avancees', title: 'Fonctions avancées', icon: '🎭',
        concepts: [
          {
            id: 55, title: "Fonctions variadiques (va_list)",
            code: "#include <stdarg.h>\nint somme(int n, ...)\n{\n    va_list ap;\n    va_start(ap, n);\n    int s = 0;\n    for (int i = 0; i < n; i++)\n        s += va_arg(ap, int);\n    va_end(ap);\n    return s;\n}",
            explanation: [
              { term: "va_start(ap, n)", desc: "Initialise ap après le dernier paramètre fixe." },
              { term: "va_arg(ap, int)", desc: "Lit le prochain argument de type int." },
              { term: "va_end(ap)", desc: "Nettoie. TOUJOURS appeler avant de quitter." },
            ],
            hint: "va_start → va_arg répété → va_end. Séquence obligatoire.",
          },
          {
            id: 56, title: "setjmp / longjmp",
            code: "#include <setjmp.h>\njmp_buf env;\nif (setjmp(env) == 0) {\n    longjmp(env, 1);\n} else {\n    /* gestion erreur */\n}",
            explanation: [
              { term: "setjmp(env)", desc: "Sauvegarde le contexte. Retourne 0 la 1ère fois." },
              { term: "longjmp(env, 1)", desc: "Revient au setjmp. setjmp retourne alors 1." },
            ],
            hint: "setjmp = point de sauvegarde. longjmp = retour vers ce point. Gestion d'erreur en C.",
          },
          {
            id: 57, title: "extern et static (portée fichier)",
            code: "/* a.c */ int compteur = 0;\n/* b.c */ extern int compteur;\nstatic int prive = 0; // visible dans ce .c seulement",
            explanation: [
              { term: "extern", desc: "Déclare une variable définie dans un autre fichier." },
              { term: "static global", desc: "Visible UNIQUEMENT dans son fichier source." },
            ],
            hint: "extern = défini ailleurs. static global = privé à ce fichier.",
          },
        ],
      },
      {
        id: 'data-structures', title: 'Structures de données', icon: '🌳',
        concepts: [
          {
            id: 58, title: "Liste chaînée",
            code: "typedef struct Noeud {\n    int val;\n    struct Noeud *suiv;\n} Noeud;\n\nNoeud *n = malloc(sizeof(Noeud));\nn->val = 42;\nn->suiv = tete;\ntete = n;",
            explanation: [
              { term: "struct Noeud *suiv", desc: "Pointeur vers le nœud suivant du même type." },
              { term: "n->suiv = tete; tete = n;", desc: "Insertion en tête : lier d'abord, puis mettre à jour la tête." },
            ],
            hint: "Nœud = valeur + pointeur vers suivant. Insérer en tête : new->suiv = tete; tete = new.",
          },
          {
            id: 59, title: "Arbre binaire",
            code: "typedef struct Arbre {\n    int val;\n    struct Arbre *gauche;\n    struct Arbre *droite;\n} Arbre;",
            explanation: [
              { term: "gauche, droite", desc: "Chaque nœud a deux fils. BST : gauche < valeur < droite." },
            ],
            hint: "Arbre binaire = chaque nœud a deux fils (peuvent être NULL).",
          },
        ],
      },
      {
        id: 'algorithmes', title: 'Algorithmes', icon: '🧮',
        concepts: [
          {
            id: 60, title: "Récursivité : factorielle",
            code: "int fact(int n)\n{\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}",
            explanation: [
              { term: "if (n <= 1) return 1", desc: "Cas de base : arrête la récursion." },
              { term: "n * fact(n - 1)", desc: "Appel récursif avec un problème plus petit." },
            ],
            hint: "Cas de base + appel récursif sur un problème réduit.",
          },
          {
            id: 61, title: "Recherche binaire",
            code: "int g = 0, d = n - 1;\nwhile (g <= d) {\n    int m = g + (d - g) / 2;\n    if (t[m] == cible) return m;\n    if (t[m] < cible) g = m + 1;\n    else d = m - 1;\n}\nreturn -1;",
            explanation: [
              { term: "g + (d - g) / 2", desc: "Milieu sans risque de dépassement entier." },
            ],
            hint: "Tableau TRIÉ requis. O(log n). Divise l'espace par 2 à chaque étape.",
          },
        ],
      },
      {
        id: 'makefile', title: 'Makefile expert', icon: '🏭',
        concepts: [
          {
            id: 62, title: "Makefile : structure et règles",
            code: "CC = gcc\nCFLAGS = -Wall -Wextra -g\n.PHONY: all clean\nall: prog\nprog: main.o utils.o\n\t$(CC) -o $@ $^\n%.o: %.c\n\t$(CC) $(CFLAGS) -c $< -o $@\nclean:\n\trm -f *.o prog",
            explanation: [
              { term: ".PHONY", desc: "Ces cibles ne sont pas des fichiers." },
              { term: "$@, $^, $<", desc: "$@ = cible, $^ = toutes dépendances, $< = première dépendance." },
              { term: "%.o: %.c", desc: "Règle générique pour compiler les .o." },
            ],
            hint: "Recette avec TAB (pas espaces). $@ = cible, $< = source. %.o: %.c = règle générique.",
          },
        ],
      },
      {
        id: 'compilation', title: 'Compilation et Linker', icon: '⚙️',
        concepts: [
          {
            id: 63, title: "Flags gcc essentiels",
            code: "gcc -Wall -Wextra -Werror -g -O2 -o prog main.c",
            explanation: [
              { term: "-Wall -Wextra", desc: "Tous les avertissements importants. TOUJOURS utiliser." },
              { term: "-g", desc: "Informations de débogage (pour gdb)." },
              { term: "-O2", desc: "Optimisation niveau 2. -O0 = aucune, -O3 = agressive." },
            ],
            hint: "Toujours -Wall -Wextra. -g pour déboguer, -O2 pour la production.",
          },
        ],
      },
      {
        id: 'gdb', title: 'Débogage (GDB)', icon: '🔍',
        concepts: [
          {
            id: 64, title: "Commandes GDB essentielles",
            code: "gdb ./prog\n(gdb) break main\n(gdb) run\n(gdb) next\n(gdb) step\n(gdb) print var\n(gdb) backtrace\n(gdb) quit",
            explanation: [
              { term: "break / run", desc: "Pose un point d'arrêt et lance l'exécution." },
              { term: "next vs step", desc: "next passe à la ligne suivante. step entre dans la fonction." },
              { term: "backtrace", desc: "Pile d'appels complète. Essentiel pour les segfaults." },
            ],
            hint: "Compiler avec -g pour GDB. break, run, next, step, print, backtrace, quit.",
          },
        ],
      },
      {
        id: 'valgrind', title: 'Valgrind', icon: '🩺',
        concepts: [
          {
            id: 65, title: "Détecter fuites avec Valgrind",
            code: "valgrind --leak-check=full \\\n         --show-leak-kinds=all \\\n         --track-origins=yes \\\n         ./prog",
            explanation: [
              { term: "--leak-check=full", desc: "Rapport complet sur les fuites mémoire." },
              { term: "--track-origins=yes", desc: "Indique l'origine des valeurs non initialisées." },
            ],
            hint: "valgrind --leak-check=full ./prog. Zéro erreur = mémoire propre.",
          },
        ],
      },
      {
        id: 'optimisation', title: 'Optimisation du code', icon: '🚀',
        concepts: [
          {
            id: 66, title: "likely / unlikely et prefetch",
            code: "#define likely(x)   __builtin_expect(!!(x), 1)\n#define unlikely(x) __builtin_expect(!!(x), 0)\nif (unlikely(ptr == NULL)) return -1;\n__builtin_prefetch(&tab[i + 16], 0, 1);",
            explanation: [
              { term: "__builtin_expect", desc: "Indique au compilateur la branche la plus probable. Optimise la prédiction." },
              { term: "__builtin_prefetch", desc: "Précharge une donnée dans le cache avant qu'elle soit nécessaire." },
            ],
            hint: "likely/unlikely pour les branches. prefetch pour masquer la latence mémoire.",
          },
        ],
      },
    ],
  },

  // ================================================================
  // NIVEAU 4 : EXPERT
  // ================================================================
  {
    id: 'expert', title: 'Expert', icon: '💀', color: '#ff453a',
    chapters: [
      {
        id: 'multithreading', title: 'Multithreading POSIX', icon: '🧵',
        concepts: [
          {
            id: 67, title: "pthread_create et pthread_join",
            code: "#include <pthread.h>\nvoid *tache(void *arg) {\n    printf(\"thread\\n\");\n    return NULL;\n}\npthread_t tid;\npthread_create(&tid, NULL, tache, NULL);\npthread_join(tid, NULL);",
            explanation: [
              { term: "pthread_create(&tid, NULL, fn, arg)", desc: "Crée un thread qui exécute fn. Compiler avec -lpthread." },
              { term: "pthread_join(tid, NULL)", desc: "Attend la fin du thread tid." },
            ],
            hint: "La fonction thread = void* fn(void*). pthread_create lance, pthread_join attend.",
          },
          {
            id: 68, title: "Mutex",
            code: "pthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;\npthread_mutex_lock(&m);\ncompteur++;\npthread_mutex_unlock(&m);",
            explanation: [
              { term: "lock → section critique → unlock", desc: "Toujours en paire. Un lock sans unlock = deadlock !" },
            ],
            hint: "Mutex : lock avant, unlock après. Sans ça : race condition. Deadlock si oubli d'unlock.",
          },
          {
            id: 69, title: "pthread_cond_t",
            code: "pthread_cond_t cond = PTHREAD_COND_INITIALIZER;\n// Attente :\npthread_mutex_lock(&m);\nwhile (!pret)\n    pthread_cond_wait(&cond, &m);\npthread_mutex_unlock(&m);\n// Signal :\npthread_cond_signal(&cond);",
            explanation: [
              { term: "pthread_cond_wait(&cond, &m)", desc: "Relâche le mutex et dort. Se réveille avec le mutex verrouillé." },
              { term: "while (!pret)", desc: "TOUJOURS dans un while, pas un if (faux réveils possibles)." },
            ],
            hint: "cond_wait relâche le mutex et dort. La condition doit être dans un while.",
          },
        ],
      },
      {
        id: 'sync-avancee', title: 'Synchronisation avancée', icon: '🔐',
        concepts: [
          {
            id: 70, title: "Sémaphore POSIX",
            code: "#include <semaphore.h>\nsem_t sem;\nsem_init(&sem, 0, 1);\nsem_wait(&sem); /* section critique */ sem_post(&sem);",
            explanation: [
              { term: "sem_init(&sem, 0, 1)", desc: "0 = même processus. 1 = valeur initiale." },
              { term: "sem_wait / sem_post", desc: "P (décrémente) / V (incrémente). Bloque si valeur = 0." },
            ],
            hint: "Sémaphore = compteur. sem_wait décrémente (attend si 0), sem_post incrémente.",
          },
          {
            id: 71, title: "Barrière de synchronisation",
            code: "pthread_barrier_t barr;\npthread_barrier_init(&barr, NULL, N);\npthread_barrier_wait(&barr);\n// Tous les threads sont ici simultanément",
            explanation: [
              { term: "pthread_barrier_wait", desc: "Bloque jusqu'à ce que N threads aient atteint ce point." },
            ],
            hint: "Barrière = tous les threads se retrouvent au même point avant de continuer.",
          },
        ],
      },
      {
        id: 'processus', title: 'Processus UNIX', icon: '🌐',
        concepts: [
          {
            id: 72, title: "fork et wait",
            code: "#include <unistd.h>\n#include <sys/wait.h>\npid_t pid = fork();\nif (pid == 0) {\n    /* FILS */\n    exit(0);\n} else {\n    wait(NULL);\n    /* PÈRE */\n}",
            explanation: [
              { term: "fork()", desc: "Duplique le processus. Dans fils : retourne 0. Dans père : retourne PID du fils." },
              { term: "wait(NULL)", desc: "Le père attend la fin du fils. Sans ça : zombie process." },
            ],
            hint: "fork() = 0 dans fils, >0 dans père. Toujours wait() dans le père !",
          },
          {
            id: 73, title: "exec : remplacer un processus",
            code: "execvp(\"ls\", (char *[]){\"ls\", \"-l\", NULL});",
            explanation: [
              { term: "execvp(cmd, args)", desc: "Remplace l'image du processus par cmd. Si ça réussit, la suite n'est jamais exécutée." },
              { term: "NULL terminal", desc: "Le tableau d'arguments DOIT finir par NULL." },
            ],
            hint: "exec remplace le processus. Après fork dans le fils pour lancer un autre programme.",
          },
        ],
      },
      {
        id: 'ipc', title: 'IPC (pipes, mémoire partagée, sémaphores)', icon: '🔗',
        concepts: [
          {
            id: 74, title: "Pipe anonyme",
            code: "int fd[2];\npipe(fd);\n// fd[0] = lecture, fd[1] = écriture\nwrite(fd[1], \"hello\", 5);\nchar buf[6];\nread(fd[0], buf, 5);",
            explanation: [
              { term: "fd[0] / fd[1]", desc: "fd[0] = extrémité lecture, fd[1] = extrémité écriture." },
            ],
            hint: "pipe() : fd[0] lecture, fd[1] écriture. Unidirectionnel. Entre père et fils.",
          },
          {
            id: 75, title: "mmap : mémoire partagée",
            code: "#include <sys/mman.h>\nint *m = mmap(NULL, sizeof(int),\n    PROT_READ|PROT_WRITE,\n    MAP_SHARED|MAP_ANONYMOUS, -1, 0);\n*m = 42;\nmunmap(m, sizeof(int));",
            explanation: [
              { term: "MAP_SHARED|MAP_ANONYMOUS", desc: "Mémoire partagée entre processus, sans fichier." },
              { term: "munmap", desc: "Libère la région mappée." },
            ],
            hint: "mmap partage de la mémoire. munmap pour libérer. Utiliser avant fork().",
          },
        ],
      },
      {
        id: 'reseau', title: 'Réseau (Sockets TCP/UDP)', icon: '🌍',
        concepts: [
          {
            id: 76, title: "Serveur TCP",
            code: "int srv = socket(AF_INET, SOCK_STREAM, 0);\nstruct sockaddr_in a = {\n    .sin_family=AF_INET,\n    .sin_port=htons(8080),\n    .sin_addr.s_addr=INADDR_ANY};\nbind(srv,(struct sockaddr*)&a,sizeof(a));\nlisten(srv, 5);\nint cli = accept(srv, NULL, NULL);",
            explanation: [
              { term: "SOCK_STREAM", desc: "TCP : connexion fiable orientée flux." },
              { term: "htons(8080)", desc: "Host TO Network Short : ordre des octets réseau." },
              { term: "accept", desc: "Bloquant : attend une connexion client." },
            ],
            hint: "Serveur : socket → bind → listen → accept (bloquant).",
          },
          {
            id: 77, title: "Client TCP et UDP",
            code: "// TCP client :\nconnect(sock,(struct sockaddr*)&addr,sizeof(addr));\nsend(sock,\"hello\",5,0);\nrecv(sock,buf,sizeof(buf),0);\nclose(sock);\n// UDP :\nint u = socket(AF_INET,SOCK_DGRAM,0);\nsendto(u,\"hi\",2,0,(struct sockaddr*)&addr,sizeof(addr));",
            explanation: [
              { term: "SOCK_DGRAM", desc: "UDP : datagrammes sans connexion. Plus rapide, moins fiable." },
              { term: "sendto/recvfrom", desc: "UDP précise l'adresse à chaque envoi/réception." },
            ],
            hint: "TCP : connect → send/recv. UDP : SOCK_DGRAM, sendto/recvfrom sans connect.",
          },
        ],
      },
      {
        id: 'non-bloquant', title: 'Programmation non bloquante (epoll)', icon: '⏩',
        concepts: [
          {
            id: 78, title: "select() : surveiller plusieurs fds",
            code: "fd_set readfds;\nFD_ZERO(&readfds);\nFD_SET(sock, &readfds);\nstruct timeval tv = {5, 0};\nselect(sock+1, &readfds, NULL, NULL, &tv);\nif (FD_ISSET(sock, &readfds))\n    recv(sock, buf, sizeof(buf), 0);",
            explanation: [
              { term: "FD_ZERO, FD_SET", desc: "Initialise et remplit l'ensemble de fds à surveiller." },
              { term: "FD_ISSET", desc: "Vérifie si un fd est prêt après select." },
            ],
            hint: "FD_ZERO → FD_SET → select → FD_ISSET. Limité à 1024 fds.",
          },
          {
            id: 79, title: "epoll : I/O haute performance (Linux)",
            code: "int epfd = epoll_create1(0);\nstruct epoll_event ev = {.events=EPOLLIN,.data.fd=sock};\nepoll_ctl(epfd, EPOLL_CTL_ADD, sock, &ev);\nstruct epoll_event evs[10];\nint n = epoll_wait(epfd, evs, 10, -1);\nfor(int i=0;i<n;i++)\n    recv(evs[i].data.fd, buf, sizeof(buf), 0);",
            explanation: [
              { term: "epoll_create1(0)", desc: "Crée une instance epoll. Plus efficace que select pour beaucoup de connexions." },
              { term: "EPOLLIN", desc: "Surveille les données disponibles en lecture." },
            ],
            hint: "epoll = select amélioré (O(1) vs O(n)). Indispensable pour les serveurs haute performance.",
          },
        ],
      },
      {
        id: 'evenementiel', title: 'Programmation événementielle', icon: '🎪',
        concepts: [
          {
            id: 80, title: "Boucle événementielle avec callbacks",
            code: "typedef void (*Handler)(int fd, void *ctx);\ntypedef struct { int fd; Handler fn; void *ctx; } Event;\nEvent events[MAX];\nvoid loop(void) {\n    while (1) {\n        int n = epoll_wait(...);\n        for(int i=0;i<n;i++)\n            events[i].fn(events[i].fd,\n                         events[i].ctx);\n    }\n}",
            explanation: [
              { term: "Handler", desc: "Typedef de pointeur de fonction : le callback appelé pour chaque événement." },
              { term: "boucle infinie", desc: "La boucle événementielle est infinie. C'est la base de nginx, libuv, libevent..." },
            ],
            hint: "Event loop = boucle infinie qui dispatche les événements vers des callbacks.",
          },
        ],
      },
    ],
  },

  // ================================================================
  // NIVEAU 5 : TRÈS EXPERT
  // ================================================================
  {
    id: 'tres-expert', title: 'Très Expert', icon: '🌋', color: '#af52de',
    chapters: [
      {
        id: 'assembleur', title: 'Assembleur x86-64', icon: '⚙️',
        concepts: [
          {
            id: 81, title: "Assembleur inline et RDTSC",
            code: "__asm__ volatile (\"nop\");\n__asm__ volatile (\"mfence\");\n\nstatic inline unsigned long long rdtsc(void) {\n    unsigned int lo, hi;\n    __asm__ volatile (\"rdtsc\":\"=a\"(lo),\"=d\"(hi));\n    return ((unsigned long long)hi << 32) | lo;\n}",
            explanation: [
              { term: "__asm__ volatile", desc: "Insère de l'assembleur inline. volatile interdit l'optimisation." },
              { term: "rdtsc", desc: "Read Time Stamp Counter. Lit le nombre de cycles CPU." },
              { term: "\"=a\"(lo),\"=d\"(hi)", desc: "Contraintes de sortie : EAX → lo, EDX → hi." },
            ],
            hint: "__asm__ volatile(\"instruction\"). rdtsc lit les cycles CPU pour mesurer les perfs.",
          },
        ],
      },
      {
        id: 'abi', title: 'ABI System V x86-64', icon: '📐',
        concepts: [
          {
            id: 82, title: "Convention d'appel System V",
            code: "// Arguments entiers/pointeurs : rdi rsi rdx rcx r8 r9\n// Valeur de retour              : rax\n// Registres préservés           : rbx rbp r12-r15\n// Pile alignée sur 16 octets avant chaque call",
            explanation: [
              { term: "rdi rsi rdx rcx r8 r9", desc: "Les 6 premiers arguments entiers/pointeurs." },
              { term: "rax", desc: "Valeur de retour." },
              { term: "16 octets", desc: "La pile doit être alignée sur 16 octets à l'entrée d'une fonction." },
            ],
            hint: "System V ABI x86-64 : args dans rdi,rsi,rdx,rcx,r8,r9. Retour dans rax.",
          },
        ],
      },
      {
        id: 'syscall', title: 'Appels système (syscall)', icon: '🖥️',
        concepts: [
          {
            id: 83, title: "syscall inline x86-64",
            code: "// write(1, \"hello\", 5)\nlong ret;\n__asm__ volatile (\n    \"syscall\"\n    : \"=a\"(ret)\n    : \"a\"(1),\"D\"(1),\"S\"(\"hello\"),\"d\"(5)\n    : \"rcx\",\"r11\",\"memory\"\n);",
            explanation: [
              { term: "syscall", desc: "Instruction x86-64 pour appeler le noyau directement, sans la libc." },
              { term: "\"a\"(1)", desc: "Numéro du syscall dans rax. 1=write, 60=exit, 0=read." },
            ],
            hint: "syscall : numéro dans rax, args dans rdi/rsi/rdx. Résultat dans rax.",
          },
        ],
      },
      {
        id: 'elf', title: 'ELF (format des exécutables)', icon: '📄',
        concepts: [
          {
            id: 84, title: "Inspecter un ELF",
            code: "readelf -h prog       # en-tête ELF\nreadelf -S prog       # sections\nobjdump -d prog       # désassembler .text\nnm prog               # table des symboles",
            explanation: [
              { term: "sections", desc: ".text=code, .data=données init, .bss=données non-init, .rodata=constantes." },
            ],
            hint: "readelf -h pour l'en-tête, readelf -S pour les sections, objdump -d pour l'asm.",
          },
        ],
      },
      {
        id: 'chargement-dynamique', title: 'Chargement dynamique (dlopen)', icon: '🔌',
        concepts: [
          {
            id: 85, title: "dlopen / dlsym / dlclose",
            code: "#include <dlfcn.h>\nvoid *lib = dlopen(\"libm.so.6\", RTLD_LAZY);\ntypedef double (*fn_t)(double);\nfn_t mon_sqrt = (fn_t)dlsym(lib, \"sqrt\");\nprintf(\"%f\\n\", mon_sqrt(16.0));\ndlclose(lib);\n// gcc source.c -ldl",
            explanation: [
              { term: "dlopen(path, RTLD_LAZY)", desc: "Charge une .so à l'exécution. RTLD_LAZY = résolution différée." },
              { term: "dlsym(lib, \"nom\")", desc: "Retourne un void* à caster en pointeur de fonction." },
            ],
            hint: "dlopen → dlsym (caster en pointeur de fonction) → utiliser → dlclose. gcc -ldl.",
          },
        ],
      },
      {
        id: 'memoire-virtuelle', title: 'Mémoire virtuelle', icon: '🗺️',
        concepts: [
          {
            id: 86, title: "mmap fichier et mprotect",
            code: "int fd = open(\"data.bin\", O_RDONLY);\nvoid *m = mmap(NULL, size, PROT_READ,\n    MAP_PRIVATE, fd, 0);\nclose(fd);\nmunmap(m, size);\n// Rendre exécutable (JIT) :\nmprotect(code, size, PROT_READ|PROT_EXEC);",
            explanation: [
              { term: "MAP_PRIVATE", desc: "Copie-sur-écriture. MAP_SHARED = partage." },
              { term: "mprotect + PROT_EXEC", desc: "Rend la mémoire exécutable. Utilisé par les compilateurs JIT." },
            ],
            hint: "mmap mappe un fichier. mprotect change les permissions. munmap libère.",
          },
        ],
      },
      {
        id: 'cache-cpu', title: 'Cache CPU', icon: '⚡',
        concepts: [
          {
            id: 87, title: "False sharing et cache lines",
            code: "// ❌ Faux partage : a et b sur la même cache line\nstruct { int a; int b; } partagee;\n\n// ✅ Solution : rembourrage sur 64 octets\ntypedef struct {\n    int val;\n    char pad[60];\n} __attribute__((aligned(64))) CacheLine;",
            explanation: [
              { term: "false sharing", desc: "Deux cœurs modifient des données différentes sur la même cache line (64 octets). Invalidations coûteuses." },
              { term: "pad[60]", desc: "Rembourrage pour forcer chaque donnée sur sa propre cache line." },
            ],
            hint: "Cache line = 64 octets. False sharing = killer de perfs multithreading. Séparer avec padding.",
          },
        ],
      },
      {
        id: 'simd', title: 'SIMD (SSE, AVX)', icon: '🏎️',
        concepts: [
          {
            id: 88, title: "Intrinsics AVX2 : 8 floats en une instruction",
            code: "#include <immintrin.h>\n__m256 a = _mm256_loadu_ps(tabA);\n__m256 b = _mm256_loadu_ps(tabB);\n__m256 c = _mm256_add_ps(a, b);\n_mm256_storeu_ps(tabC, c);\n// gcc -mavx2 -O3",
            explanation: [
              { term: "__m256", desc: "Type vectoriel : 256 bits = 8 floats simultanément." },
              { term: "_mm256_add_ps", desc: "Additionne 8 floats en PARALLÈLE en une seule instruction CPU." },
            ],
            hint: "AVX2 : __m256 = 8 floats. Multiplier les perfs par 8 pour les opérations vectorisables.",
          },
        ],
      },
      {
        id: 'atomiques', title: 'Atomiques avancées et modèle mémoire C11', icon: '⚛️',
        concepts: [
          {
            id: 89, title: "CAS et memory orders",
            code: "#include <stdatomic.h>\natomic_int val = 0;\nint expected = 0;\nbool ok = atomic_compare_exchange_strong(\n    &val, &expected, 42);\n\n// Acquire/Release :\natomic_store_explicit(&pret, 1, memory_order_release);\nwhile (!atomic_load_explicit(&pret, memory_order_acquire));",
            explanation: [
              { term: "atomic_compare_exchange_strong", desc: "CAS : si val == expected → val = 42. Sinon → expected = val actuel." },
              { term: "memory_order_release/acquire", desc: "Synchronisation légère : plus efficace qu'un mutex pour des compteurs et flags." },
            ],
            hint: "CAS = base du lock-free. Release publie, Acquire consomme. Paire release/acquire = synchronisation.",
          },
        ],
      },
    ],
  },

  // ================================================================
  // NIVEAU 6 : RECHERCHE / DOCTORAT
  // ================================================================
  {
    id: 'recherche', title: 'Recherche', icon: '🎓', color: '#5856d6',
    chapters: [
      {
        id: 'allocateur', title: "Écriture d'un allocateur mémoire", icon: '🏗️',
        concepts: [
          {
            id: 90, title: "Freelist : structure d'un allocateur",
            code: "typedef struct Bloc {\n    size_t taille;\n    struct Bloc *suiv;\n} Bloc;\nBloc *freelist = NULL;\nvoid mon_free(void *ptr) {\n    Bloc *b = (Bloc *)ptr - 1;\n    b->suiv = freelist;\n    freelist = b;\n}",
            explanation: [
              { term: "(Bloc *)ptr - 1", desc: "L'en-tête du bloc est juste AVANT les données retournées." },
              { term: "freelist", desc: "Les blocs libérés sont réutilisés plutôt que rendus au système." },
            ],
            hint: "L'en-tête (taille, next) est avant les données. free le remet dans la freelist.",
          },
          {
            id: 91, title: "mon_malloc : allouer depuis la freelist",
            code: "void *mon_malloc(size_t sz) {\n    Bloc **c = &freelist;\n    while (*c) {\n        if ((*c)->taille >= sz) {\n            Bloc *b = *c; *c = b->suiv;\n            return (void *)(b + 1);\n        }\n        c = &(*c)->suiv;\n    }\n    Bloc *b = sbrk(sizeof(Bloc) + sz);\n    b->taille = sz;\n    return (void *)(b + 1);\n}",
            explanation: [
              { term: "(void *)(b + 1)", desc: "Retourne l'adresse APRÈS l'en-tête. L'utilisateur ne voit pas l'en-tête." },
              { term: "sbrk", desc: "Demande de la mémoire au noyau en étendant le segment de données." },
            ],
            hint: "Chercher dans freelist → si trouvé retourner, sinon sbrk pour demander au noyau.",
          },
        ],
      },
      {
        id: 'compilateur', title: "Écriture d'un compilateur C simplifié", icon: '🔤',
        concepts: [
          {
            id: 92, title: "Lexer : tokeniser le source",
            code: "typedef enum {\n    TOK_INT, TOK_IDENT, TOK_NUM,\n    TOK_PLUS, TOK_SEMI, TOK_EOF\n} TokType;\ntypedef struct { TokType type; char val[64]; } Token;\nToken lex_next(const char **src);",
            explanation: [
              { term: "TokType", desc: "Enum de tous les types de tokens du langage." },
              { term: "lex_next", desc: "Lit le source et retourne le prochain token en avançant le pointeur." },
            ],
            hint: "Lexer = source string → séquence de tokens. Première étape de la compilation.",
          },
          {
            id: 93, title: "AST : nœud de l'arbre syntaxique",
            code: "typedef enum {\n    NODE_NUM, NODE_ADD, NODE_VAR\n} NodeKind;\ntypedef struct Node {\n    NodeKind kind;\n    int val;\n    struct Node *lhs, *rhs;\n    char name[64];\n} Node;",
            explanation: [
              { term: "lhs, rhs", desc: "Left et Right Hand Side : fils gauche et droit d'un nœud binaire." },
            ],
            hint: "AST = arbre représentant le code. Chaque nœud = une construction du langage.",
          },
        ],
      },
      {
        id: 'gc', title: 'Garbage Collector (Mark & Sweep)', icon: '♻️',
        concepts: [
          {
            id: 94, title: "Mark and Sweep",
            code: "typedef struct Obj { int marque; struct Obj *suiv; } Obj;\nObj *tous = NULL;\nvoid marquer(Obj *o) {\n    if (!o || o->marque) return;\n    o->marque = 1;\n    /* marquer les refs de o */\n}\nvoid balayer(void) {\n    Obj **c = &tous;\n    while (*c) {\n        if (!(*c)->marque) {\n            Obj *m = *c; *c = m->suiv; free(m);\n        } else {\n            (*c)->marque = 0;\n            c = &(*c)->suiv;\n        }\n    }\n}",
            explanation: [
              { term: "marquer()", desc: "Phase 1 : marque tous les objets accessibles depuis les racines." },
              { term: "balayer()", desc: "Phase 2 : libère les non-marqués, réinitialise les marques." },
            ],
            hint: "Mark : marquer les accessibles. Sweep : libérer les non-marqués.",
          },
        ],
      },
      {
        id: 'lock-free', title: 'Programmation lock-free', icon: '🔓',
        concepts: [
          {
            id: 95, title: "Pile lock-free avec CAS",
            code: "_Atomic(struct Noeud *) sommet = NULL;\nvoid push(int v) {\n    struct Noeud *n = malloc(sizeof(*n));\n    n->v = v;\n    do {\n        n->suiv = sommet;\n    } while (!atomic_compare_exchange_weak(\n        &sommet, &n->suiv, n));\n}",
            explanation: [
              { term: "atomic_compare_exchange_weak", desc: "CAS faible dans un do-while. Retry automatique en cas d'échec." },
            ],
            hint: "Lock-free : do { préparer } while(!CAS). Pas de mutex, mais retry si contention.",
          },
        ],
      },
      {
        id: 'coroutines', title: 'Coroutines', icon: '🔄',
        concepts: [
          {
            id: 96, title: "Coroutines avec ucontext",
            code: "#include <ucontext.h>\nucontext_t main_ctx, coro_ctx;\nchar stack[65536];\nvoid coro_fn(void) {\n    printf(\"A\\n\");\n    swapcontext(&coro_ctx, &main_ctx);\n    printf(\"B\\n\");\n}\nvoid init(void) {\n    getcontext(&coro_ctx);\n    coro_ctx.uc_stack.ss_sp = stack;\n    coro_ctx.uc_stack.ss_size = sizeof(stack);\n    coro_ctx.uc_link = &main_ctx;\n    makecontext(&coro_ctx, coro_fn, 0);\n}",
            explanation: [
              { term: "swapcontext", desc: "Sauvegarde le contexte courant et bascule vers un autre." },
              { term: "makecontext", desc: "Configure un contexte avec sa propre pile." },
            ],
            hint: "Coroutines = coopérative multitâche. swapcontext pour basculer entre coroutines.",
          },
        ],
      },
      {
        id: 'openmp', title: 'OpenMP', icon: '🔀',
        concepts: [
          {
            id: 97, title: "Parallélisme avec OpenMP",
            code: "#include <omp.h>\n// Boucle parallèle :\n#pragma omp parallel for reduction(+:somme)\nfor (int i = 0; i < N; i++)\n    somme += tab[i];\n// Section critique :\n#pragma omp critical\n{ printf(\"Thread %d\\n\", omp_get_thread_num()); }\n// gcc -fopenmp source.c",
            explanation: [
              { term: "#pragma omp parallel for", desc: "Distribue les itérations entre les cœurs." },
              { term: "reduction(+:somme)", desc: "Chaque thread accumule localement, puis les résultats sont combinés." },
              { term: "#pragma omp critical", desc: "Section exécutée par un seul thread à la fois." },
            ],
            hint: "#pragma omp parallel for. reduction pour les accumulations. critical pour la synchronisation.",
          },
        ],
      },
      {
        id: 'mpi', title: 'MPI', icon: '🌐',
        concepts: [
          {
            id: 98, title: "Structure MPI et Send/Recv",
            code: "#include <mpi.h>\nMPI_Init(&argc, &argv);\nint rank, size;\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nMPI_Comm_size(MPI_COMM_WORLD, &size);\nif (rank == 0) {\n    int msg = 42;\n    MPI_Send(&msg,1,MPI_INT,1,0,MPI_COMM_WORLD);\n} else {\n    int msg;\n    MPI_Recv(&msg,1,MPI_INT,0,0,MPI_COMM_WORLD,MPI_STATUS_IGNORE);\n}\nMPI_Finalize();",
            explanation: [
              { term: "rank", desc: "Identifiant unique du processus (0 à size-1)." },
              { term: "MPI_Send / MPI_Recv", desc: "Envoi/réception bloquants entre processus." },
            ],
            hint: "MPI_Init → travailler → MPI_Finalize. rank=mon id. MPI_Send(data,count,type,dest,tag,comm).",
          },
        ],
      },
      {
        id: 'securite', title: 'Sécurité mémoire', icon: '🛡️',
        concepts: [
          {
            id: 99, title: "Buffer Overflow et mitigations",
            code: "// ❌ Vulnérable :\nvoid vuln(char *in) {\n    char buf[64];\n    strcpy(buf, in); // crash si in > 64 !\n}\n// ✅ Sécurisé :\nvoid safe(char *in) {\n    char buf[64];\n    strncpy(buf, in, sizeof(buf)-1);\n    buf[sizeof(buf)-1] = '\\0';\n}\n// Protections : -fstack-protector (canary)\n//               ASLR, NX bit, PIE",
            explanation: [
              { term: "Stack Canary (-fstack-protector)", desc: "Valeur magique entre variables et adresse de retour. Détecte les overflows." },
              { term: "ASLR / NX", desc: "Adresses randomisées, pile/tas non-exécutables." },
            ],
            hint: "strncpy+\\0 pour les chaînes. -fstack-protector, ASLR, NX contre les exploits.",
          },
        ],
      },
      {
        id: 'kernel', title: "Écriture d'un noyau minimal", icon: '🏚️',
        concepts: [
          {
            id: 100, title: "Module Linux : init et exit",
            code: "#include <linux/module.h>\n#include <linux/kernel.h>\nstatic int __init mon_init(void) {\n    printk(KERN_INFO \"Chargé\\n\");\n    return 0;\n}\nstatic void __exit mon_exit(void) {\n    printk(KERN_INFO \"Déchargé\\n\");\n}\nmodule_init(mon_init);\nmodule_exit(mon_exit);\nMODULE_LICENSE(\"GPL\");",
            explanation: [
              { term: "__init, __exit", desc: "Attributs : ces fonctions ne sont appelées qu'une fois." },
              { term: "printk(KERN_INFO ...)", desc: "printf du noyau. KERN_INFO = niveau de log." },
            ],
            hint: "module_init(fn_init) + module_exit(fn_exit) + MODULE_LICENSE. Le squelette de tout module Linux.",
          },
        ],
      },
      {
        id: 'rtos', title: 'Temps réel (RTOS / FreeRTOS)', icon: '⏱️',
        concepts: [
          {
            id: 101, title: "Tâche FreeRTOS",
            code: "#include <FreeRTOS.h>\n#include <task.h>\nvoid ma_tache(void *p) {\n    for (;;) {\n        /* travail */\n        vTaskDelay(pdMS_TO_TICKS(100));\n    }\n}\nxTaskCreate(ma_tache, \"T\", 128, NULL, 1, NULL);\nvTaskStartScheduler();",
            explanation: [
              { term: "for (;;)", desc: "Une tâche FreeRTOS ne doit JAMAIS retourner." },
              { term: "vTaskDelay", desc: "Suspend la tâche et cède la main pendant N ms." },
              { term: "vTaskStartScheduler()", desc: "Démarre le scheduler. Ne retourne jamais." },
            ],
            hint: "Tâche = boucle infinie avec vTaskDelay. xTaskCreate pour créer. vTaskStartScheduler pour démarrer.",
          },
        ],
      },
      {
        id: 'cross-compilation', title: 'Cross-compilation', icon: '🔄',
        concepts: [
          {
            id: 102, title: "Cross-compiler pour ARM",
            code: "arm-linux-gnueabihf-gcc -o prog source.c\n\n# Avec sysroot :\narm-linux-gnueabihf-gcc \\\n    --sysroot=/opt/arm-sysroot \\\n    -o prog source.c\n\n# Dans un Makefile :\nCROSS_COMPILE = arm-linux-gnueabihf-\nCC = $(CROSS_COMPILE)gcc",
            explanation: [
              { term: "arm-linux-gnueabihf-gcc", desc: "Compilateur qui tourne sur x86 mais produit du code ARM. Prefixe = arch-os-abi." },
              { term: "--sysroot", desc: "Dossier contenant les en-têtes et bibliothèques de la cible." },
            ],
            hint: "Cross-compiler = compiler sur x86 pour ARM. Prefixe identifie la cible.",
          },
        ],
      },
    ],
  },
];

// === Exports utilitaires ===

export const allConcepts = curriculum.flatMap(level =>
  level.chapters.flatMap(chapter =>
    chapter.concepts.map(c => ({
      ...c,
      levelId: level.id,
      levelTitle: level.title,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
    }))
  )
);

export function isChapterUnlocked(levelIdx, chapterIdx, completedIds) {
  if (levelIdx === 0 && chapterIdx === 0) return true;
  if (chapterIdx > 0) {
    const prev = curriculum[levelIdx].chapters[chapterIdx - 1];
    return prev.concepts.every(c => completedIds.has(c.id));
  }
  if (levelIdx > 0) {
    const prevLevel = curriculum[levelIdx - 1];
    const lastChapter = prevLevel.chapters[prevLevel.chapters.length - 1];
    return lastChapter.concepts.every(c => completedIds.has(c.id));
  }
  return false;
}
