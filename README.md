```
Anagram: a word, phrase, or name formed by rearranging the letters of another,
eg:
- spar, rasp, aspr
- tea, eat
- listen, silent
- tab, bat
- ttt != tttt
- tta != ttb
```

```
Part 1

Write a function to determine if two strings are anagrams of each other.

E.g
func isAnagram(word1, word2 string) bool {
	// ...
}
```

[2:28 PM] Sai Sathyanantha R. (Unverified)

```

Part 2

Now, given a word find all of the anagrams within a list of words

func getAnagrams(word string, words []string) []string {

	// ...

}

example 1:

word = 'tea'

words = ['bat', 'take', 'fat', 'ate', 'fate', 'eat', 'teak']

output = ['ate', 'eat']

example 2:

word = 'teak'

words = ['bat', 'take', 'fat', 'ate', 'fate', 'eat']

output = ['take']

example 3:

word = 'frog'

words = ['bat', 'take', 'fat', 'ate', 'fate', 'eat']

output = []

```

```
Part 3

Now, given a list of words, group them by anagrams

E.g.

func groupAnagrams(words []string) [][]string {
	// ...
}


example 1:
input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

example 2:
input: ['frog', 'beat', 'golf', 'free']
output: [['frog'], ['beat'], ['golf'], ['free']]
```
