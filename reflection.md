# Reflection

### Chapter 2: Meaningful Names

I think this chapter was very insightful. I tried to apply the principles of meaningful names to my code and I think it made a big difference. I was able to understand my code better. I think the most important takeaway from this chapter is that names should reveal intent.

<br>

**Intent revealing name**

![chapter2](/img/image.png)

<br>

### Chapter 3: Functions

I mostly took away good things from this chapter. I think the most important takeaways is that functions should do one thing most of the time, that functions should either do something or answer something and lastly that they should be kept on the smaller side, although only 4 rows is a bit limiting. I think these are good principles to follow because it makes the code easier to understand and maintain.

<br>

**Function that does something (command query separation)**

![chapter3](/img/image-1.png)

<br>

### Chapter 4: Comments

I think the most important takeaway from this chapter is that comments should explain why, not what. Another important thing I learned is that you should be mindful of noise comments. Before this course I often found myself writing comments just to write comments, in turn just making noise all over the codebase. Now I understand that comments should be used sparingly and only when necessary.

<br>

**Explaining why**

![chapter4](/img/image-2.png)

<br>

### Chapter 5: Formatting

I think there are some good parts in this chapter, especially the parts about vertical spacing and line width. Today most of the formatting is done by the IDE or by tools like Prettier so you don't have to think about it too much. The part about vertical spacing is still relevant though. Formatting tools don't explicitly help you with that but I think it worth some extra manual work to make the code easier to read and follow.

<br>

**Vertical spacing (instance variables declared first)**

![chapter5](/img/image-3.png)

<br>

### Chapter 6: Objects and Data Structures

I think the most valuable part from this chapter is the Law of Demeter. Lower coupling between objects is a good thing in my opinion and I think the Law of Demeter is a good way to achieve that. Outside of that I think the chapter was a bit too theoretical for me. I think I would have liked to see more examples of how to apply the principles in practice.

My classes only communicate with themselves, their direct components or fields, objects they create and global objects.

<br>

### Chapter 7: Error Handling

I agree with most parts of chapter 7, although I didn't really apply much of it in my module or app except in one place where I use a "try, catch, finally" when fetching the products from the model. In the module I used console.warn when getting data from local storage because the errors were not critical and I didn't want to break the app, just log the error and continue.

<br>

**Error handling in the cart**

![chapter7](/img/image-4.png)

<br>

### Chapter 8: Boundaries

In chapter 8 I really like the part about testing third-party code before using it in your production code/project. This way you actually learn how the third-party code works in action and not just from documentation, although documentation is also usefull. In this app I don't use any third-party code so that isn't really an issue.

<br>

### Chapter 9: Unit Tests

Testing is of course very important and the F.I.R.S.T. rules are a good guideline to follow. Even though testing is important I don't think it's possible to test all parts of a codebase operating in a browser environment in a reasonable time frame because a lot of the code just consists of components just returning html and css. That being said I absolutely think the backend and important functionality should be tested. In this app I have some manual unit tests (can be found in the README.md file) and in the module I have some automated unit tests using Jest.

<br>

### Chapter 10: Classes

I think the most important part of this chapter is about cohesion, that classes should work together and only have a single responsibility. In other words it works towards separation of concerns. In my app for example the product class only handles a product and the cart component only handles the cart. Overall this is very important to making maintaining, testing and reuseability easier.

<br>

**Product class**

![chapter10](/img/image-5.png)

<br>

### Chapter 11: Systems

I didn't really understand chapter 11 that much. I understood the part about dependency injection and separation of concerns but overall it was a bit to abstract I think. There were a lot of parts about Java specific frameworks and such that didn't really apply to my project or any of my previous projects.
