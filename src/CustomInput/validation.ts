export const isValidValue = (value: string): boolean => {
  const chars = value.split("");
  let result = true;
  // loop through input entries
  // TODO add regex
  chars.forEach((char) => {
    if (
      !(
        Number.isInteger(+char) ||
        char === "." ||
        char === "," ||
        char === "'" ||
        // undefined is needed for clear input
        char === undefined
      )
    ) {
      return (result = false);
    }
  });

  // prevent from typing decimal value twice
  if (
    value.includes(",") &&
    (value.indexOf(",") !== value.lastIndexOf(",") ||
      (value.indexOf(",") === value.lastIndexOf(",") && value.includes(".")))
  ) {
    return false;
  }

  if (
    value.includes(".") &&
    (value.indexOf(".") !== value.lastIndexOf(".") ||
      (value.indexOf(".") === value.lastIndexOf(".") && value.includes(",")))
  ) {
    return false;
  }
  return result;
};
