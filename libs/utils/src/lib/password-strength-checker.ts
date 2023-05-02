export const enum PasswordCheckStrength {
  Short,
  Common,
  Weak,
  Ok,
  Strong,
}

const commonPasswordPatterns = /passw.*|12345.*|09876.*|qwert.*|asdfg.*|zxcvb.*|footb.*|baseb.*|drago.*/;

export const passwordMinLength = 4;

export const checkPasswordStrength = (password: string): PasswordCheckStrength => {
  if (!password) {
    return 0;
  }

  let numberOfElements = 0;
  numberOfElements = /.*[a-z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Lowercase letters
  numberOfElements = /.*[A-Z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Uppercase letters
  numberOfElements = /.*[0-9].*/.test(password) ? ++numberOfElements : numberOfElements;      // Numbers
  numberOfElements = /[^a-zA-Z0-9]/.test(password) ? ++numberOfElements : numberOfElements;   // Special characters (inc. space)

  let currentPasswordStrength = PasswordCheckStrength.Short;

  if (!password || password.length < 5) {
    currentPasswordStrength = PasswordCheckStrength.Short;
  } else if (commonPasswordPatterns.test(password)) {
    currentPasswordStrength = PasswordCheckStrength.Common;
  } else if (numberOfElements < 3) {
    currentPasswordStrength = PasswordCheckStrength.Weak;
  } else if (numberOfElements === 3) {
    currentPasswordStrength = PasswordCheckStrength.Ok;
  } else {
    currentPasswordStrength = PasswordCheckStrength.Strong;
  }

  return currentPasswordStrength;
}
