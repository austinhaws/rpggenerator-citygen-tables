const populationType = require("./populationType");

module.exports = (a, b) => {
    const keys = Object.keys(populationType);
    const aIndex = keys.indexOf(a);
    const bIndex = keys.indexOf(b);
    return aIndex - bIndex;
};
