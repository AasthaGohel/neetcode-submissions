class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Array(26).fill(0);
        let maxLen = 0;
        let maxFreq = 0;
        let left = 0;

        for(let right=0;right<s.length;right++) {
            let idx = s.charCodeAt(right)-65;

            count[idx]++;
            maxFreq = Math.max(maxFreq, count[idx]);

            while((right-left+1)-maxFreq>k) {
                let leftIdx = s.charCodeAt(left)-65;
                count[leftIdx]--;
                left++;
            }

            maxLen = Math.max(maxLen, right-left+1);
        }

        return maxLen;
    }
}
