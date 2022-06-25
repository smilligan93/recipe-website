/* eslint-disable no-param-reassign */
const acceptableDenominators = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const maxDistanceToNumerator = 0.0001;

function convertDecimalToFraction(n: number): string | undefined {
    const negative = n < 0;
    if (negative) n = -n;

    const wholePart = Math.floor(n);
    n -= wholePart;

    const denom = acceptableDenominators.find((d) => Math.abs(d * n - Math.round(d * n)) <= maxDistanceToNumerator);
    if (typeof denom === 'undefined') {
        return undefined;
    }
    const numer = Math.round(denom * n);

    if (denom === 1) {
        return `${(wholePart + numer) * (negative ? -1 : 1)}`;
    }

    return `${(negative ? '-' : '') + (wholePart ? `${wholePart} ` : '') + numer}/${denom}`;
}

export default convertDecimalToFraction;
