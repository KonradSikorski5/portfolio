## How I fix problems: one example

**Problem:** a classmate asked whether keyboard-only shoppers can see which shirt size is selected on my store.

1. **Reproduce:** I tabbed to the size buttons with only the keyboard.
2. **Find out:** a dark outline was already there. It's 3px, and arrow keys move it from S to M.
3. **Fix:** nothing visual was broken, so I added an automatic test so it can't break later without anyone noticing.
4. **Check:** I removed the outline on purpose, saw the test fail, and put it back.

[Read the full help ticket](https://github.com/KonradSikorski5/is117-brand-studio-ks2334/blob/main/docs/help-ticket-size-focus.md)
