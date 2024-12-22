function ValidatePassword(pass) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,12}$/;

  return regex.test(pass);
}

export default ValidatePassword;
