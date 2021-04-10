export const formatValue = (value: number): string => {
  const splitedValue = String(value).split(".");
  const units = splitedValue[0];
  const decimals = splitedValue[1];

  const formetedValue = [];
  for (let i = units.length - 1; i >= 0; i -= 3) {
    formetedValue.unshift(units[i]);
    formetedValue.unshift(units[i - 1]);
    formetedValue.unshift(units[i - 2]);
    formetedValue.unshift("'");
  }
  if (formetedValue[0] === "'") {
    formetedValue.shift();
  }
  if (decimals) {
    return formetedValue.join("") + "." + decimals;
  } else {
    return formetedValue.join("");
  }
};

export const deformatValue = (value: string): number => {
  return +value.replace(",", ".").replaceAll("'", "");
};
