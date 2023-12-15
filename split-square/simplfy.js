const simplify = (s) => {
    if (typeof s === num) {
        return s;
    }
    let simplifiedParts = s.map(simplify);
    if(simplifiedParts.every(part => part ===simplifiedParts[0])) {
        return simplifiedParts[0]
    }
    return simplifiedParts;
}