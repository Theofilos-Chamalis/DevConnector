// Function that checks is something is empty
const isEmpty = value => {
  return (
    value === undefined || // Undefined
    value === null || // Null
    (typeof value === "object" && Object.keys(value).length === 0) || // Empty Object
    (typeof value === "string" && value.trim().length === 0) // Empty String
  );
};

module.exports = isEmpty;
