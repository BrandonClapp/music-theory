import { KeyOf, ScaleType } from '../src/models/Note';
import { getMajorPentatonicScale, getScale, getNoteSequence, getIntendedLetterOrder, getEnharmonicEquivalent } from "../src/scale-calculations";

describe('calulate major scales', () => {
  
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
});
