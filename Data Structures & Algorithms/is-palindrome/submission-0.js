class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = "";
        for (let ch of s.toLowerCase()) {
            if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
                res += ch;
            }
        }
        const reverse = res.split("").reverse().join("");

        return reverse===res;
    }
}
