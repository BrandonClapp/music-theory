import { KeyOf, ScaleType } from './models/Note';

/**
 * Returns the 8 notes that make up a the major scale for the requested key.
 *
 * @param {string} key - The key for which to return the major scale for. Example: KeyOf.C.
 */
export function getScale(key: KeyOf, scaleType: ScaleType) {
    const sequence = getNoteSequence(key);

    let notes = [];
    if (scaleType === ScaleType.Major) {
        notes = [0, 2, 4, 5, 7, 9, 11, 0]; // r w w h w w w h
    } else if (scaleType === ScaleType.NaturalMinor) {
        notes = [0, 2, 3, 5, 7, 8, 10, 0]; // r w h w w h w w
    }

    let scale = [
        ...notes.map(n => sequence[n])
    ];

    const adjustEquivalents = (scale: string[]) => {
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

            const equivalent = getEnharmonicEquivalent(curr);
            acc.push(equivalent);
            return acc;
        }, []);

        return adjusted;
    }

    scale = adjustEquivalents(scale);

    return scale;
}

export function getMajorPentatonicScale(key: KeyOf) {
    const major = getScale(key, ScaleType.Major);
    const penta = [
        major[0],
        major[1],
        major[2],
        major[4],
        major[5],
    ];

    return penta;
}

export function getNoteSequence(note: string) {
    const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#','E', 'F', 'F#', 'G', 'G#'];

    note = note.toUpperCase();
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

export function getEnharmonicEquivalent(note: string) {
    const equivalents = [
        ['C', 'B#'],
        ['C#', 'Db'],
        ['D#', 'Eb'],
        ['E', 'Fb'],
        ['F', 'E#'],
        ['F#', 'Gb'],
        ['G#', 'Ab'],
        ['A#', 'Bb'],
        ['B', 'Cb']
    ];

    const tuple = equivalents.find(e => e.includes(note));
    const foundIndex = tuple.findIndex(n => n === note);
    return tuple[foundIndex === 0 ? 1 : 0];
}