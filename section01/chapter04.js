let name;
let nickname = "colin";

let displayName = name ?? nickname;
console.log(displayName);

// switch문
// if문과 기능은 동일함.
// break 가 늘 따라다님.
let animal = "cat";

switch (animal) {
  case "tiger": {
    console.log("호랑이");
    break;
  }
  case "dog": {
    console.log("개");
    break;
  }
  default: {
    console.log("그런동물은 모릅니다.");
  }
}
