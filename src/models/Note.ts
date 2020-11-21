export class Note {
    id: KeyOf;
    numeric: number;
}

export enum KeyOf {
    AFlat = 'Ab',

    A = 'A',

    ASharp = 'A#',
    BFlat = 'Bb',

    B = 'B',

    BSharp = 'B#',
    C = 'C',

    CSharp = 'C#',
    DFlat = 'Db',

    D = 'D',

    DSharp = 'D#',
    EFlat = 'Eb',

    E = 'E',
    FFlat = 'Fb',

    ESharp = 'E#',
    F = 'F',

    FSharp = 'F#',
    GFlat = 'Gb',

    G = 'G',
    GSharp = 'G#'
}

export enum ScaleType {
    Major = 'Major',
    MajorPentatonic = 'Major Pentatonic',
    NaturalMinor = 'Natural Minor',
    NaturalMinorPentatonic = 'Natural Minor Pentatonic',
}