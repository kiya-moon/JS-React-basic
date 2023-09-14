'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);  // {"name":"tori","color":"white","size":null,"birthDate":"2023-09-14T17:24.670Z"}
// 함수는 object에 포함되지 않기 때문에 변환되지 않는다.
// symbol도 포함 x
console.log(json);

// 콜백함수를 추가하여 상세하게 통제 가능
// a. 배열 형태로 전달
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// b. 콜백함수 전달
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// 유용한 사이트
// JSON Diff : 서버에 요청한 첫 번째 데이터와 두 번째 데이터를 비교해 줌. 디버깅 시 유용하게 사용 가능
// JSON Beautifier : 서버에서 복붙할 때 json이 망가질 수 있는데, 이때 다시 예쁘게 정렬해줌
// JSON Parser : JSON이 object로 어떻게 변환되는지 보여줌
// JSON Validator : JSON이 이상할 때 어디가 이상한 지 찾아줌