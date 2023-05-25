// convert {lastName=The last name must be between 2 and 50 characters, firstName=User first name is required, password=The user password is required, phoneNumber=The phone number is required, email=The email is required}
export const parseStringToObject = (str: string): object => {
  // remove the curly braces
  const strWithoutCurlyBraces = str.replace('{', '').replace('}', '');
  // split the string into an array of strings
  const strArray = strWithoutCurlyBraces.split(',');
  // convert the array of strings into an array of key-value pairs
  const strArrayKeyValue = strArray.map(str => {
    const keyValueArray = str.split('=');
    return keyValueArray;
  });
  // convert the array of key-value pairs into an object
  const strObject = strArrayKeyValue.reduce(
    (accumulator: any, currentValue) => {
      const key = currentValue[0];
      const value = currentValue[1];
      // remove spaces from the key
      key.replace(' ', '');
      key.replace('"', '');
      // remove the quotes from the value
      value.replace('"', '');
      accumulator[key] = value;
      return accumulator;
    },
    {}
  );
  return strObject;
};

export const parseBadRequest = (message: string): string => {
  const errorObject = parseStringToObject(message);
  const errorMessage = Object.values(errorObject).reduce(
    (accumulator: string, currentValue: string) =>
      accumulator + currentValue + '\n'
  );
  return errorMessage;
};
