export function divideArrayByEvenOddSkills(state: any[]) {
  const evenSkills: any[] = [];
  const oddSkills: any[] = [];

  for (let i = 0; i < state.length; i++) {
    if (i % 2 === 0) {
      evenSkills.push(state[i]);
    } else {
      oddSkills.push(state[i]);
    }
  }

  return [evenSkills, oddSkills];
}