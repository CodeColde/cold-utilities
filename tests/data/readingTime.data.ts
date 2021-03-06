export const testArticle = `Originally published on https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/
    You already have a library/package written in TypeScript that you’re ready to publish to NPM, but you still want all the types to work and you don’t want to commit compiled JS files. This article is for you 😘.
    TLDR; you can see a simple example of this in action here:
    ccnokes/dom-event-utils
    dom-event-utils - Very small library that makes working with DOM event emitters API a little easier to work with.
    github.com
    If you haven’t written your TS based package yet, no worries, just start with this: npm init -y and tsc --init . This generates a default package.json and tsconfig.json for you. Then, follow the steps below:
    1. Add "declaration": true to your tsconfig.json
    This tells TypeScript to emit an .d.ts definitions file along with your compiled JavaScript. Note that at this point, when you run the TypeScript compiler, it will complain if you’re using a private type (i.e. not export-ed). This is because your types that are part of any public facing API (and that aren’t inline types) have to be exported so that users of your library can get type checking goodness. They don’t need to be in a separate file or anything, they just need that export keyword in front of them.
    2. Add "types": "index.d.ts" to your package.json
    When other people import your library, this tells the TypeScript compiler where to look for your library’s types. The filename of your .d.ts file will be the same as your main entry point. So, for example in your package.json you’ll want to have something like this in there:
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    (This also assumes your outDir in tsconfig is a folder named dist).
    3. Ensure that your dist folder is ignored in .gitignore
    We don’t want to track compiled JavaScript files in our git repository. We do, however, want them sent to NPM when we publish.
    4. Run your build
    Run tsc and whatever else to compile all your files. It might be a good idea to add a prepublish script to your package.json. Something like: "prepublish": "tsc"
    5. Run npm publish
    Boom! You just published a TypeScript based NPM package that interops seamlessly with TypeScript and JavaScript.
    If you want to verify that it works locally before you publish (this is a good idea), then in your package root, run npm link . Then go to another folder and npm link <your package name> . Go into a .ts file and import your package by name (just like you would normally if you had npm installed it). You should see your types coming through in your editor.
    Here’s what your final package.json might look like:

    Here’s what your final tsconfig.json might look like:`;