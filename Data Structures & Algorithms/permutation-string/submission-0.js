class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    // Frequency of characters in s1
    for (let ch of s1) {
        freq1[ch.charCodeAt(0) - 97]++;
    }

    // First window of s2
    for (let i = 0; i < s1.length; i++) {
        freq2[s2.charCodeAt(i) - 97]++;
    }

    // Check first window
    if (freq1.toString() === freq2.toString()) {
        return true;
    }

    // Slide the window
    for (let right = s1.length; right < s2.length; right++) {
        // Add new character
        freq2[s2.charCodeAt(right) - 97]++;

        // Remove character leaving the window
        const left = right - s1.length;
        freq2[s2.charCodeAt(left) - 97]--;

        // Compare frequencies
        if (freq1.toString() === freq2.toString()) {
            return true;
        }
    }

    return false;
    }
}
