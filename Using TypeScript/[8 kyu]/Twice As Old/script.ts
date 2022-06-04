export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  const theResultYear: number = Math.abs(2 * sonYearsOld - dadYearsOld);
  return theResultYear;
}

console.log(twiceAsOld(36, 7));
