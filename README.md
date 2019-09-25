# Cold Utilities - The Variety Utility Function Package
CodeColde's Personal Utility Package.

Fork the (test project)[https://codesandbox.io/embed/utility-package-with-typescript-t908w?fontsize=14] if you want to play around!

See below the table of contents with docs regarding what each function does:

## Generics
These utilities aren't limited to a particular case for usability. These can vary, and are simply generally handy utilities.

### Strip HTML Tags
Retrieve a HTML string and strip all tags.

```javascript
    import { stripHTMLTags } from '@codecolde/utility-package';

    const HTMLString = `<p>Hello <i>To All</i> <a href='link'><span>a great</span></a> World</p>`;
    const stripped = stripHTMLTags(HTMLString); // returns 'Hello To All a great World'.
```

### Pipe
Used for left-sided function execution. Expects an initializer, but returns the return value of provided functions.

```javascript
    import { pipe } from '@codecolde/utility-package';
    
    const carInit = owner => ({ // for typescript, the return value must be of the type of return the pipe will produce. This return value is also the case for the piped functions
        owner
    });
    
    const redCar = car => ({
        color: "red",
        ...car
    });

    const bmwBrand = car => ({
        brand: "bmw",
        ...car
    });

    const audiBrand = car => ({
        brand: "audi",
        ...car
    });

    const myCar = pipe(         // returns {
        carInit("CodeColde"),   //  owner: 'CodeColde',
        redCar,                 //  color: 'red',
        bmwBrand                //  brand: 'bmw',
    );                          // }

    const myCar = pipe(         // returns {
        carInit("User"),        //  owner: 'User',
        redCar,                 //  color: 'red',
        audiBrand               //  brand: 'audi',
    );                          // }
```


## Articles
For articles, a user might want some things to touch up their article publishing. Below are some utility functions that you can use:

### Reading Time
Check the duration of an article that a user has wrote. Accepts an array of strings or a string.

```javascript
    import { readingTime } from '@codecolde/utility-package';

    const article = `<article text here>` || `['article', 'content', 'here']`;
    const duration = readingTime(article); // returns a number, rounding down. If an article takes 2.9 minutes to read, it returns 2.
```