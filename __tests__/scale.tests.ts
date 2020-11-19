import { KeyOf, ScaleType } from '../src/models/Note';
import { getMajorPentatonicScale, getScale, getNoteSequence, getIntendedLetterOrder, getEnharmonicEquivalent } from "../src/scale-calculations";

describe('note calculation functions', () => {
  
  it('calculates the next 12 notes for keys', () => {
    const notesA = getNoteSequence('A');
    expect(notesA).toStrictEqual(['A', 'A#', 'B', 'C', 'C#', 'D', 'D#','E', 'F', 'F#', 'G', 'G#']);

    const notesB = getNoteSequence('B');
    expect(notesB).toStrictEqual(['B', 'C', 'C#', 'D', 'D#','E', 'F', 'F#', 'G', 'G#', 'A', 'A#']);

    const notesC = getNoteSequence('C');
    expect(notesC).toStrictEqual(['C', 'C#', 'D', 'D#','E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',]);

    const notesFSharp = getNoteSequence('F#');
    expect(notesFSharp).toStrictEqual(['F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#','E', 'F']);

    expect(notesA).toHaveLength(12);
    expect(notesB).toHaveLength(12);
    expect(notesC).toHaveLength(12);
    expect(notesFSharp).toHaveLength(12);
  });


  it('should calculate A Major Scale', () => {
    const aMajorScale = getScale(KeyOf.A, ScaleType.Major);
    expect(aMajorScale).toStrictEqual(['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A']);
    expect(aMajorScale).toHaveLength(8);
  });

  it('should calculate B Major Scale', () => {
    const bMajorScale = getScale(KeyOf.B, ScaleType.Major);
    expect(bMajorScale).toStrictEqual(['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B']);
    expect(bMajorScale).toHaveLength(8);
  });

  it('should calculate C Major Scale', () => {
    const cMajorScale = getScale(KeyOf.C, ScaleType.Major);
    expect(cMajorScale).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
    expect(cMajorScale).toHaveLength(8);
  });

  it('should calculate G Major Scale', () => {
    const gMajorScale = getScale(KeyOf.G, ScaleType.Major);
    expect(gMajorScale).toStrictEqual(['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']);
    expect(gMajorScale).toHaveLength(8);
  });

  it('should calculate C# Major Scale', () => {
    const cSharpMajorScale = getScale(KeyOf.CSharp, ScaleType.Major);
    expect(cSharpMajorScale).toStrictEqual(['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#']);
    expect(cSharpMajorScale).toHaveLength(8);
  });

  it('should calculate F# Major Scale', () => {
    const fSharpMajorScale = getScale(KeyOf.FSharp, ScaleType.Major);
    expect(fSharpMajorScale).toStrictEqual(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#', 'F#']);
    expect(fSharpMajorScale).toHaveLength(8);
  });

  it('should calculate C Major Pentatonic Scale', () => {
    const cMajorPentaScale = getMajorPentatonicScale(KeyOf.C);
    expect(cMajorPentaScale).toStrictEqual(['C', 'D', 'E', 'G', 'A']);
    expect(cMajorPentaScale).toHaveLength(5);
  });

  it('should calculate B Major Pentatonic Scale', () => {
    const bMajorPentaScale = getMajorPentatonicScale(KeyOf.B);
    expect(bMajorPentaScale).toStrictEqual(['B', 'C#', 'D#', 'F#', 'G#']);
    expect(bMajorPentaScale).toHaveLength(5);
  });

  it('should calculate E Major Pentatonic Scale', () => {
    const eSharpMajorPentaScale = getMajorPentatonicScale(KeyOf.E);
    expect(eSharpMajorPentaScale).toStrictEqual(['E', 'F#', 'G#', 'B', 'C#']);
    expect(eSharpMajorPentaScale).toHaveLength(5);
  });

  it('should calculate C# Major Pentatonic Scale', () => {
    const cSharpMajorPentaScale = getMajorPentatonicScale(KeyOf.CSharp);
    expect(cSharpMajorPentaScale).toStrictEqual(['C#', 'D#', 'E#', 'G#', 'A#']);
    expect(cSharpMajorPentaScale).toHaveLength(5);
  });

  it('should return expected scale letters', () => {
    const letters = getIntendedLetterOrder(KeyOf.CSharp);
    expect(letters).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
    expect(letters).toHaveLength(8);
  });

  it('should convert to enharmonic equivalent', () => {
    const c = getEnharmonicEquivalent('B#');
    expect(c).toBe('C');
  });
  
  it('should calculate G Natural Minor Scale', () => {
    const gNatMinorScale = getScale(KeyOf.G, ScaleType.NaturalMinor);
    expect(gNatMinorScale).toStrictEqual(['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']);
    expect(gNatMinorScale).toHaveLength(8);
  });

  it('should calculate B Natural Minor Scale', () => {
    const bNatMinorScale = getScale(KeyOf.B, ScaleType.NaturalMinor);
    expect(bNatMinorScale).toStrictEqual(['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B']);
    expect(bNatMinorScale).toHaveLength(8);
  });
});
