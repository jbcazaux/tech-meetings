const users = [
  { id: 1, login: 'riri', grades: [4, 2, 5] },
  { id: 2, login: 'fifi', grades: [4, 5, 9] },
  { id: 3, login: 'loulou', grades: [3, 7, 6] },
];

const extractUserIds = (users) => users.map(user => user.id);

const getAllGrades = (users) => users.reduce((acc, user) => acc.concat(user.grades), []);

const add = (total, grade) => total + grade;

Array.prototype.sum = function () {
  return Array.prototype.reduce.bind(this, add, 0).call();
};

const sum = (arr) => Array.prototype.reduce.call(arr, add, 0);

const getMean = (users) =>
  users
    .reduce((acc, user) => ({
      ...acc,
      total: acc.total + user.grades.sum(),
      nb: acc.nb + user.grades.length
    }), {
      total: 0,
      nb: 0,
      mean: function () {
        return this.total / this.nb;
      }
    })
    .mean();

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

  it('sums !', () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });

  it('sums on prototype', () => {
    expect([1, 2, 3].sum()).toEqual(6);
  });
});
