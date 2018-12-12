const messages = {
  firstname: "write your name, must be more 3 letters",
  lastname: "write your surname, must be more 3 letters",
  password: "write your password",
  repeatPassword: "passwords must be equal",
  email: "invalid mail",
  phone: "invalid phone, need 0991112233",
  country: "required",
  sity: "required",
  avatar: "required"
};
// default arguments, return message if argument do not valid mail (^.+@[^.].*.[a-z]{2,}$)
export function validEmail(args) {
  let errors = {};
  let regex = new RegExp("^.+@[^.].*.[a-z]{2,}$");
  Object.keys(args).map(key => {
    if (!regex.test(args[key])) {
      errors[key] = messages[key];
    }
    return false;
  });
  return errors;
}
// default arguments, return message if argument do not number(9 or more letters)
export function validPhone(args) {
  let errors = {};
  let regex = new RegExp("^[0-9]{9,}$");
  Object.keys(args).map(key => {
    if (!regex.test(args[key])) {
      errors[key] = messages[key];
    }
    return false;
  });
  return errors;
}
// default arguments, return message if argument less  3 letter
export function moreThreeLetter(args) {
  let errors = {};
  Object.keys(args).map(key => {
    if (args[key].length < 3) {
      errors[key] = messages[key];
    }
    return false;
  });
  return errors;
}
// default arguments, return message more 0 letter
export function required(args) {
  let errors = {};
  Object.keys(args).map(key => {
    if (!args[key]) {
      errors[key] = messages[key];
    }
    return false;
  });
  return errors;
}
// need 2 arguments, compare them end return 2nd arguments message
export function equal(args) {
  let errors = {};
  Object.keys(args).reduce((first, second) => {
    if (args[first] !== args[second]) {
      errors[second] = messages[second];
    }
    return false;
  });
  return errors;
}
