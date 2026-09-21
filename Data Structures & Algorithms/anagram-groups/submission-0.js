class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map();

        for (let str of strs) {
            let sorted = [...str].sort().join(""); // act act
            if (res.has(sorted)) {
                res.get(sorted).push(str);
            } else {
                res.set(sorted, [str]);
            }
        }

        return Array.from(res.values())
    }
}
