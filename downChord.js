module.exports.downChord = (letter) => {
    if (letter == 'C') {
        return 'H';
    } else if (letter == 'H') {
        return 'B';
    } else if (letter == 'B') {
        return 'A';
    } else if (letter == 'A') {
        return 'As';
    } else if (letter == 'As') {
        return 'G';
    } else if (letter == 'G') {
        return 'Ges';
    }
    else if (letter == 'Ges') {
        return 'F';
    } else if (letter == 'F') {
        return 'E';
    } else if (letter == 'E') {
        return 'Es';
    } else if (letter == 'Es') {
        return 'D';
    } else if (letter == 'D') {
        return 'Des';
    } else if (letter == 'Des') {
        return 'C';
    }  if (letter == 'c') {
        return 'h';
    } else if (letter == 'h') {
        return 'b';
    } else if (letter == 'b') {
        return 'a';
    } else if (letter == 'a') {
        return 'as';
    } else if (letter == 'as') {
        return 'g';
    }else if (letter == 'g') {
        return 'ges';
    } else if (letter == 'Dis') {
        return 'D';
    } else if (letter == 'Cis') {
        return 'C';
    } else if (letter == 'Fis') {
        return 'F';
    } else if (letter == 'Gis') {
        return 'G';
    } else if (letter == 'Ais') {
        return 'A';
    } else if (letter == 'dis') {
        return 'd';
    } else if (letter == 'cis') {
        return 'c';
    } else if (letter == 'fis') {
        return 'f';
    } else if (letter == 'gis') {
        return 'g';
    } else if (letter == 'ais') {
        return 'a';
    }
    else if (letter == 'ges') {
        return 'f';
    } else if (letter == 'f') {
        return 'e';
    } else if (letter == 'e') {
        return 'es';
    } else if (letter == 'es') {
        return 'd';
    } else if (letter == 'd') {
        return 'des';
    } else if (letter == 'des') {
        return 'c';
    }
}