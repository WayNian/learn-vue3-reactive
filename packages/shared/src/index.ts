const isObject = (value: any): boolean => {
  return typeof value === "object" && value !== null;
};

export { isObject };
