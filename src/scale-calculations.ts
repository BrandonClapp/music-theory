import { KeyOf, ScaleType } from './models/Note';

/**
 * Returns the 8 notes that make up a the major scale for the requested key.
 *
 * @param {string} key - The key for which to return the major scale for. Example: KeyOf.C.
 */
export function getScale(key: KeyOf, scaleType: ScaleType) {

    // const alternatives = [
    //     [ScaleType.Major, KeyOf.ASharp, KeyOf.BFlat],
    //     [ScaleType.Major, KeyOf.DSharp, KeyOf.EFlat],
    //     [ScaleType.Major, KeyOf.GSharp, KeyOf.AFlat],
    //     // [ScaleType.NaturalMinor, KeyOf.GFlat, KeyOf.FSharp],
    //     [ScaleType.NaturalMinor, KeyOf.DFlat, KeyOf.CSharp]
    // ];

    // const alt = alternatives.find(a => a[0] === scaleType && a[1] === key);
    // if (alt) {
    //     console.warn(`Requsted ${key} ${scaleType}, but providing ${alt[2]} to prevent double sharps or double flats.`)
    //     key = alt[2] as KeyOf;
    // }

    const sequence = getNoteSequence(key);

    let notes = [];
    if (scaleType === ScaleType.Major || scaleType === ScaleType.MajorPentatonic) {
        notes = [0, 2, 4, 5, 7, 9, 11, 0]; // r w w h w w w h
    } else if (scaleType === ScaleType.NaturalMinor || scaleType === ScaleType.NaturalMinorPentatonic) {
        notes = [0, 2, 3, 5, 7, 8, 10, 0]; // r w h w w h w w
    }

    let scale: string[] = [
        ...notes.map(n => sequence[n])
    ];

    if (scaleType === ScaleType.Major || scaleType === ScaleType.NaturalMinor) {
        const adjusted = adjustEquivalents(scale);
        return adjusted;
    }


    let degrees = [];
    if (scaleType === ScaleType.MajorPentatonic) {
        degrees = [0, 1, 2, 4, 5]; // 1st, 2nd, 3rd, 5th, 6th
    }

    if (scaleType === ScaleType.NaturalMinorPentatonic) {
        degrees = [0, 2, 3, 4, 6] // 1st, 3rd, 4th, 5th, 7th
    }

    const penta = [
        ...degrees.map(d => scale[d])
    ];

    scale = adjustEquivalents(scale);

    return scale;
}

function adjustEquivalents (scale: string[]) {
    // Ensure that every letter is represented enharmonic equivalents as necessary.

    // Convert ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C',  'C#']
    // Into    ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#']

    // Convert ['G', 'A', 'A#', 'C', 'D', 'D#', 'F', 'G']
    // Into    ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']

    const scaleLetterOrder = getIntendedLetterOrder(scale[0]);
    const adjusted = scale.reduce((acc, curr, index) => {

        if (curr[0] === scaleLetterOrder[index]) {
            acc.push(curr);
            return acc;
        }

        const equivalent = getEnharmonicEquivalent(curr, scaleLetterOrder[index]);
        acc.push(equivalent);
        return acc;
    }, []);

    return adjusted;
}

// export function getPentatonicScale(key: KeyOf, scaleType: ScaleType) {

//     // C Major Scale:
//     // ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
//     // C Major Pentatonic (1st, 2nd, 3rd, 5th, 6th)
//     // ['C', 'D', 'E', 'G', 'A']
//     // C Minor Scale
//     // ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C']
//     // C Minor Pentatonic (1st, 3rd, 4th, 5th, 7th)
//     // ['C', 'Eb', 'F', 'G', 'Bb']

//     const sequence = getNoteSequence(key);
//     let degrees = [];

//     if (scaleType === ScaleType.Major) {
//         degrees = [0, 1, 2, 4, 5]; // 1st, 2nd, 3rd, 5th, 6th
//     } else if (scaleType === ScaleType.NaturalMinor) {
//         degrees = [0, 2, 3, 4, 6] // 1st, 3rd, 4th, 5th, 7th
//     }

//     let scale = [
//         ...degrees.map(d => sequence[d])
//     ];

//     scale = adjustEquivalents(scale);
//     return scale;
// }

export function getNoteSequence(note: string) {
    let notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

    // Account for if the key is flat
    if (note[1] === 'b') {
        // Get flat equivalent of sharps
        notes = notes.map(n => {
            if (n[1] === '#') {
                return getEnharmonicEquivalent(n);
            }
            return n;
        });
    }

    note = note.charAt(0).toUpperCase() + note.slice(1);
    const allNotes = [];
    let cursor = notes.findIndex(n => n === note);

    for (let i = 1; i <= 12; i++) {
        if (!notes[cursor]) {
            cursor = 0;
        }

        allNotes.push(notes[cursor]);
        cursor++;
    }

    return allNotes;
}

export function getIntendedLetterOrder(key: string) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const order = [];
    let cursor = letters.findIndex(l => l.includes(key[0]))
    for (let i = 1; i <= 8; i++) {
        if (!letters[cursor]) {
            cursor = 0;
        }

        order.push(letters[cursor]);
        cursor++;
    }

    return order;
}

export function getEnharmonicEquivalent(note: string, asLetter: string = null) {
    // TODO: Enhance this to get representation based on specific letter.
    const equivalents = [
        ['C', 'B#'],
        ['C#', 'Db'],
        ['D#', 'Eb'],
        ['E', 'Fb'],
        ['F', 'E#'],
        ['F#', 'Gb'],
        ['G#', 'Ab'],
        ['A#', 'Bb'],
        ['B', 'Cb'],

        ['G', 'F##'],
        ['A', 'Bbb', 'G##'],
        ['D', 'Ebb', 'C##']
    ];

    const noteAliases = equivalents.find(e => e.includes(note));

    if (!asLetter) {
        // Only 1 alias exists
        if (noteAliases.length > 2) {
            console.warn('Letter not specified and more than 1 alternative existed.');
        }

        const foundIndex = noteAliases.findIndex(n => n === note);
        return noteAliases[foundIndex === 0 ? 1 : 0];
    }

    const alias = noteAliases.find(n => n.includes(asLetter));
    return alias;
}