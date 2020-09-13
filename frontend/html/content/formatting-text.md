<div align="right"><a href="../HTML.md"> <h3> Back </h3> </a></div>

# HTML - Formatting Text

HTML Formatting is a process of formatting text for better look and feel. HTML provides the ability to format text without using CSS. There are many formatting tags in HTML. These tags are used to make text bold, italicized, or underlined.

In HTML the formatting tags are divided into two categories:

*    Physical tag: These tags are used to provide the visual appearance to the text.
*    Logical tag: These tags are used to add some logical or semantic value to the text.

## Paragraphs
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
> [Extra reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

## Headlines
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

> [Extra reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

## Bold and italics
There are four HTML elements to talk about here, two for bold and two for italic. But why are there two of each? Well, let's look at this example.

> My *favorite* character from *Sesame Street* is Grover

There are two different reasons for using italics here. The word *"favorite"* is italicized because we're making a point. This is really important, this is our favorite character. *"Favorite"* is italicized for emphasis. The phrase *"Sesame Street"* is not being italicized for emphasis. It's italicized because it's the title of a television show. In HTML, we want to distinguish between these two use cases. We want the browser to know when things should be verbally emphasized, versus when they're simply visually distinguished; to do that, HTML provides two different tags for italics:

* `<i>` — Visual-only italics
* `<em>` — Emphasis italics

For example:

```html
<p>My <em>favorite</em> character from <i>Sesame Street</i> is Grover</p>
```
> Extra reference ([em](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) | [i](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i))

## Lists
The HTML `<li>` element is used to represent an item in a list. It must be contained in a parent element: an ordered list (`<ol>`), an unordered list (`<ul>`), or a menu (`<menu>`). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.

### Ordered list
An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag. The list items will be marked with numbers by default:
```html
 <ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> 
```
> 1. Coffee
> 2. Tea
> 3. Milk

### Unordered list
An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag. The list items will be marked with bullets (small black circles) by default:

```html
<ul>
    <li>Neil Armstrong</li>
    <li>Alan Bean</li>
    <li>Peter Conrad</li>
    <li>Edgar Mitchell</li>
    <li>Alan Shepard</li>
</ul>
```
> * Neil Armstrong
> * Alan Bean
> * Peter Conrad
> * Edgar Mitchell
> * Alan Shepard 


### Description list
A description list is a list of terms, with a description of each term. The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), and the `<dd>` tag describes each term:

```html
 <dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```
> <dl>
>  <dt>Coffee</dt>
>  <dd>- black hot drink</dd>
>  <dt>Milk</dt>
>  <dd>- white cold drink</dd>
> </dl> 

> Extra reference ([li](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) | [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) | [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) | [dl](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) | [dt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt))

## Quotes

### Block quotations

The HTML `<blockquote>` element defines a section that is quoted from another source. Browsers usually indent `<blockquote>` elements.

```html
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote> 
```
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote> 

### Short quotations

The HTML `<q>` tag defines a short quotation. Browsers normally insert quotation marks around the quotation.

```html
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p> 
```
> <p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p> 

## Dates and times

```html
<time datetime="2025-05-08-">May 8</time>
```
> <time datetime="2025-05-08-">May 8</time>

## Code, pre, and br
## Superscripts, subscripts, and small text
