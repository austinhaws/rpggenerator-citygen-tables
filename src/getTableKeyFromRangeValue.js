module.exports = ({ table, value }) => {
    const result = Object.entries(table).find(([, minMax]) => minMax.min <= value && minMax.max >= value);
    return result && result[0];
};
