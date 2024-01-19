export default function PasswordRegex() {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{6,}$/;
  return passwordRegex;
}
