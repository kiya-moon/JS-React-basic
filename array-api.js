// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');    // fruits.join() 빈값으로 전달해도 기본적으로 ','를 넣어 string으로 출력해준다.
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result1 = fruits.split(',');  // ['🍎', '🥝', '🍌', '🍒'] > 구분자를 기준으로 각각 배열에 넣어줌
    const result2 = fruits.split(',' , 2);  // ['🍎', '🥝'] > limit 인자를 전달해 필요한 문자만 배열로 만들 수 있다.
    const result3 = fruits.split(); // ['🍎, 🥝, 🍌, 🍒'] > 필수적인 구분자를 전달하지 않으면 모든 문자가 배열 한 칸에 다 들어가게 된다.
    console.log(result1);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);    // [5, 4, 3, 2, 1]
    console.log(array);     // [5, 4, 3, 2, 1] > result 뿐만아니라 array 배열 자체를 reverse 시켜준다.
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);   // .slice(start num, end num) > end nume은 배제된다. > 실질적으로 index 2 부터 index 4까지 가져옴
    // splice는 대상 배열 자체의 값을 수정하지만,
    // slice는 대상 배열에서 값을 추출해 새로운 배열을 만들 때 사용한다.
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.clear();
    const result = students.some((student) => student.score < 50);  // 학생들 중 50점 이하가 있는지 확인
    console.log(result);
  
    const result2 = !students.every((student) => student.score >= 50);  // 모든 학생이 50점 이상인지 확인
    // 왜 굳이 !를 붙여서 true로 출력하는 거임? 아 check하라고 해서?
    console.log(result2);
  }
  console.clear();

  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => prev + curr.score, 0);   // 배열을 하나씩 돌면서 값을 누적시킬 때 사용
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
      .map((student) => student.score)
      .filter((score) => score >= 50)
      .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
      .map((student) => student.score)
      .sort((a, b) => a - b)    // a - b를 했을 때 마이너스 값이 리턴되면, 첫번째 값이 두번째 값보다 작다고 여겨져 작은 순으로 정렬됨
      // 반대로 b - a를 하면 큰 순서대로 정렬
      .join();
    console.log(result);
  }