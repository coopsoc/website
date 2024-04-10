/**
 * Partitions a list into smaller sublists, each with a maximum of n elements.
 * @param {any[]} list - The list to be partitioned.
 * @param {number} n   - The number of elements in each part.
 * @returns {any[][]}
 */
export function partition(list, n) {
    let result = [];

    for (let i = 0; i < list.length; i += n) {
        result.push(list.slice(i, i + n));
    }

    return result;
};
