import { KeyOf, ScaleType } from '../src/models/Note';
import { getScale } from "../src/scale-calculations";

describe('Calculate Natural Minor Pentatonic Scales', () => {
  
  it('Should calculate C Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.C, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['C', 'Eb', 'F', 'G', 'Bb']);
    expect(minorPentaScale).toHaveLength(5);
  });

  it('Should calculate C# Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.CSharp, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['C#', 'E', 'F#', 'G#', 'B']);
    expect(minorPentaScale).toHaveLength(5);
  });
  
  it('Should calculate D Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.D, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['D', 'F', 'G', 'A', 'C']);
    expect(minorPentaScale).toHaveLength(5);
  });

  it('Should calculate D# Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.DSharp, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['D#', 'F#', 'G#', 'A#', 'C#']);
    expect(minorPentaScale).toHaveLength(5);
  });

  it('Should calculate Eb Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.EFlat, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['Eb', 'Gb', 'Ab', 'Bb', 'Db']);
    expect(minorPentaScale).toHaveLength(5);
  });

  it('Should calculate E Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.E, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['E', 'G', 'A', 'B', 'D']);
    expect(minorPentaScale).toHaveLength(5);
  });

  it('Should calculate F Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.F, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['F', 'Ab', 'Bb', 'C', 'Eb']);
    expect(minorPentaScale).toHaveLength(5);
  });

  it('Should calculate F# Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.FSharp, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['F#', 'A', 'B', 'C#', 'E']);
    expect(minorPentaScale).toHaveLength(5);
  });

  it('Should calculate Gb Minor Pentatonic Scale', () => {
    const minorPentaScale = getScale(KeyOf.GFlat, ScaleType.NaturalMinorPentatonic);
    expect(minorPentaScale).toStrictEqual(['Gb', 'A', 'B', 'Db', 'E']);
    expect(minorPentaScale).toHaveLength(5);
  });

  // it('Should calculate Bb Minor Pentatonic Scale', () => {
  //   const minorPentaScale = getPentatonicScale(KeyOf.BFlat, ScaleType.NaturalMinor);
  //   expect(minorPentaScale).toStrictEqual(['Bb', 'Db', 'Eb', 'F', 'Ab']);
  //   expect(minorPentaScale).toHaveLength(5);
  // });

});
