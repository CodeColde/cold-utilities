# Cold Utilities - The Variety Utility Function Package
CodeColde's Personal Utility Package. See below the table of contents with docs regarding what each function does:

## Articles
For articles, a user might want some things to touch up their article publishing. Below are some utility functions that you can use:

### Reading Time
Check the duration of an article that a user has wrote. Accepts an array of strings or a string.

```javascript
    import { readingTime } from 'cold-utilities';

    const article = `<article text here>` || `['article', 'content', 'here']`;
    const duration = readingTime(article); // returns a number, rounding down. If an article takes 2.9 minutes to read, it returns 2.
```