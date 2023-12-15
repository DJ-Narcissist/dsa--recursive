const validate = (s) => {
    if (typeof s === int) {
        return s === 0 || s === 1;
    }
    if (Array.isArray(s) && s.length === 4) {
        return s.every(validate);
    }
    return false
}