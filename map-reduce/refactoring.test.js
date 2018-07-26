const users = [
  { id: 1, login: 'riri', grades: [4, 2, 5] },
  { id: 2, login: 'fifi', grades: [4, 5, 9] },
  { id: 3, login: 'loulou', grades: [3, 7, 6] },
];

function extractUserIds(users) {
  let ids = [];
  users.forEach(user => {
    ids.push(user.id);
  });
  return ids;
}

function getAllGrades(users) {
  const grades = [];
  users.forEach(user => {
    user.grades.forEach(grade => grades.push(grade));
  });
  return grades;
}

function getMean(users) {
  const grades = getAllGrades(users);
  let total = 0;

  grades.forEach(grade => total += grade);

  return total / grades.length;
}

describe('refactoring', () => {
  it('extractUserIds !', () => {
    expect(extractUserIds(users)).toEqual(expect.arrayContaining([1, 2, 3]));
  });

  it('getAllGrades !', () => {
    expect(getAllGrades(users)).toEqual([4, 2, 5, 4, 5, 9, 3, 7, 6]);
  });

  it('getMean !', () => {
    expect(getMean(users)).toEqual(5);
  });
});
