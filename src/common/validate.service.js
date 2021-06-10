export const Validate = {
  /**
   * @param {string} fullName 'Vlad'
   * @returns {bool}
   */
  isFullName(fullName) {
    return fullName.match(/^[a-z]+ [a-z]+$/i);
  },
  /**
   * @param {string} phoneNumber '795984631887'
   * @returns {bool}
  */
  isPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace('+', '');
    return (
      phoneNumber.match(/[2-9]+/i) !== null &&
      phoneNumber.match(/[2-9]+/i)[0].length == 11 &&
      phoneNumber.length == 11
    );
  }
}
