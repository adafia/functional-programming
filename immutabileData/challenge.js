const grades = [60, 55, 80, 90, 99, 92, 75, 72];

const total = grades.reduce(sum);

function sum(acc, grade) {
  return acc + grade
}

const count = grades.length;

const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade) {
  const {a = 0, b = 0, c = 0, d = 0, e = 0, f = 0} = acc
  if (grade >= 90){
    return { ...acc, a: a + 1}
  } else if (grade >= 80) {
    return { ...acc, b: b + 1}
  } else if (grade >= 70) {
    return { ...acc, c: c + 1}
  } else if (grade >= 60) {
    return {...acc, d: d + 1}
  } else {
    return {...acc, f: f + 1}
  }
}
console.log(letterGradeCount)