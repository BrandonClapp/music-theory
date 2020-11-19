export class Note {
    id: KeyOf;
    numeric: number;
}

export enum KeyOf {
    A = 'A',
    ASharp = 'A#',
    B = 'B',
    C = 'C',
    CSharp = 'C#',
    D = 'D',
    DSharp = 'D#',
    E = 'E',
    F = 'F',
    FSharp = 'F#',
    G = 'G',
    GSharp = 'G#'
}

export enum ScaleType {
    Major,
    NaturalMinor
}