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
The `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>` tags are used to create headings in descending order of importance where `<h1>` is the most important and `<h6>` the least.

For example, if we want to write this:

> ## Section Title
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at egestas leo, at consequat lorem. Etiam at ligula et nisl maximus commodo.
> ### Subsection Title
> Aliquam elit arcu, iaculis vitae hendrerit sed, rutrum quis magna. Suspendisse iaculis sit amet enim quis interdum. Quisque fringilla et mauris at sollicitudin. Aenean dictum volutpat elit id varius. Fusce nec pellentesque arcu, ac dictum ex.
> ### Subsection title
> Sed sagittis ipsum eu purus condimentum accumsan. Pellentesque volutpat porttitor est, sit amet tincidunt risus vehicula porttitor. Morbi condimentum dapibus fringilla.

We should write it like this:

```html
<h2>Section Title</h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at egestas leo, at consequat lorem. Etiam at ligula et nisl maximus commodo.
<h3>Subsection Title</h3>
Aliquam elit arcu, iaculis vitae hendrerit sed, rutrum quis magna. Suspendisse iaculis sit amet enim quis interdum. Quisque fringilla et mauris at sollicitudin. Aenean dictum volutpat elit id varius. Fusce nec pellentesque arcu, ac dictum ex.
<h3>Subsection Title</h3>
Sed sagittis ipsum eu purus condimentum accumsan. Pellentesque volutpat porttitor est, sit amet tincidunt risus vehicula porttitor. Morbi condimentum dapibus fringilla.
```

### Bold and italics
There are four HTML elements to talk about here, two for bold and two for italic. But why are there two of each? Well, let's look at this example.

> My *favorite* character from *Sesame Street* is Grover

There are two different reasons for using italics here. The word *"favorite"* is italicized because we're making a point. This is really important, this is our favorite character. *"Favorite"* is italicized for emphasis. The phrase *"Sesame Street"* is not being italicized for emphasis. It's italicized because it's the title of a television show. In HTML, we want to distinguish between these two use cases. We want the browser to know when things should be verbally emphasized, versus when they're simply visually distinguished; to do that, HTML provides two different tags for italics:

* `<i>` — Visual-only italics
* `<em>` — Emphasis italics

For example:

```html
<p>My <em>favorite</em> character from <i>Sesame Street</i> is Grover</p>
```

### Lists
### Quotes
### Dates and times
### Code, pre, and br
### Superscripts, subscripts, and small text
