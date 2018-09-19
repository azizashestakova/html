let compare = (value1, value2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value1 === "number" && typeof value2 === "number") {
                resolve(value1 < value2 ? -1 : value1 === value2 ? 0 : 1);
            } else {
                reject("Arguments must be numbers");
            }
        }, 1000);
    });
};
