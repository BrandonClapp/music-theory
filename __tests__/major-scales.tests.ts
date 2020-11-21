import { KeyOf, ScaleType } from '../src/models/Note';
import { getScale } from "../src/scale-calculations";

describe('calulate major scales', () => {
  
  it('Should calculate A Major Scale', () => {
    const majorScale = getScale(KeyOf.A, ScaleType.Major);
    expect(majorScale).toStrictEqual(['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A']);
    expect(majorScale).toHaveLength(8);
  });

  it('Should calculate B Major Scale', () => {
    const majorScale = getScale(KeyOf.B, ScaleType.Major);
    expect(majorScale).toStrictEqual(['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B']);
    expect(majorScale).toHaveLength(8);
  });

  it('Should calculate C Major Scale', () => {
    const majorScale = getScale(KeyOf.C, ScaleType.Major);
    expect(majorScale).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
    expect(majorScale).toHaveLength(8);
  });

  it('Should calculate G Major Scale', () => {
    const majorScale = getScale(KeyOf.G, ScaleType.Major);
    expect(majorScale).toStrictEqual(['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']);
    expect(majorScale).toHaveLength(8);
  });

  it('Should calculate C# Major Scale', () => {
    const majorScale = getScale(KeyOf.CSharp, ScaleType.Major);
    expect(majorScale).toStrictEqual(['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#']);
    expect(majorScale).toHaveLength(8);
  });

  it('Should calculate F# Major Scale', () => {
    const majorScale = getScale(KeyOf.FSharp, ScaleType.Major);
    expect(majorScale).toStrictEqual(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#', 'F#']);
    expect(majorScale).toHaveLength(8);
  });

  it('Should calculate Eb Major Scale', () => {
    const majorScale = getScale(KeyOf.EFlat, ScaleType.Major);
    expect(majorScale).toStrictEqual(['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb']);
    expect(majorScale).toHaveLength(8);
  });

  it('Should calculate D# Major Scale', () => {
    const majorScale = getScale(KeyOf.DSharp, ScaleType.Major);
    expect(majorScale).toStrictEqual(['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb']);
    expect(majorScale).toHaveLength(8);
  });
});
