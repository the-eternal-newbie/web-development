# HTML - Formatting Text
HTML Formatting is a process of formatting text for better look and feel. HTML provides the ability to format text without using CSS. There are many formatting tags in HTML. These tags are used to make text bold, italicized, or underlined.

In HTML the formatting tags are divided into two categories:

*    Physical tag: These tags are used to provide the visual appearance to the text.
*    Logical tag: These tags are used to add some logical or semantic value to the text.

## Syntax of HTML Elements — Tags

HTML is mostly plain text compose by *tags*. Tags provide web browsers with instructions about the web page, such as where to display images, and how the document is structured. These tags are always enclosed in angle brackets (`<p>`), they're comprised of elements and attributes, and they usually travel in pairs.

```html
<p>Visually, I'm a paragraph, because I am between two paragraph tags. But internally I'm called <i>element<i></p>
<label for="email">I'm a label element with an attribute called <i>for<i></label>
```

> An element is an object on a page (such as a heading, paragraph, or image), and attributes are qualities that describe that element (such as width and height).

An opening tag begins a section of page content, and a closing tag ends it. For example, to markup a section of text as a paragraph, you would open the paragraph with an opening paragraph tag `<p>` and close it with a closing paragraph tag `</p>` (closing tags always proceed the element with a /). A few tags are called non-container tags, because they don't contain any content - they stand alone. Examples are images and line breaks.

Tags can be nested. For example:

```html
<div><p>This paragraph is nested inside a division</p></div>
```

### Paragraphs
White space is ignored by web browsers, so, if you hit the space bar multiple times within a document, only one of those spaces will actually be displayed by the browser. So, HTML has a specific tag for defining a new paragraph called `<p>`. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

For example, if we want to write this:

```
Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Distinctio, harum? 
Eveniet necessitatibus, quo nisi aspernatur placeat enim dolore omnis officia vel neque odit, ipsa, doloremque quaerat ad deleniti recusandae nobis.
```
We should write it like this:
```html
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> <p>Distinctio, harum?</p> <p>Eveniet necessitatibus, quo nisi aspernatur placeat enim dolore omnis officia vel neque odit, ipsa, doloremque quaerat ad deleniti recusandae nobis.</p>
```
### Headlines
### Bold and italics
### Lists
### Quotes
### Dates and times
### Code, pre, and br
### Superscripts, subscripts, and small text
