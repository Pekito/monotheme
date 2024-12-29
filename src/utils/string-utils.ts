export const createClassNames = (...args: Array<string>) => 
    ["m-component", ...args].join(" ");

export const classNamesFromObj = (classes: Record<string, boolean>) => 
    Object.entries(classes)
    .filter((value) => value[1])
    .map((value) => value[0])
    .join(" ");

export const classNamesFromArray = (classes: Array<string>) => createClassNames(...classes);