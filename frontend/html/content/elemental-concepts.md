<div align="right"><a href="../HTML.md"> <h3> Back </h3> </a></div>

# Elemental Concepts

## A simple HTML Document

```html
<!DOCTYPE html>
<html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        <!-- This is a comment -->
    </body>
</html>
```
* The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document
* The `<html>` element is the root element of an HTML page
* The `<head>` element contains meta information about the HTML page
* The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
* The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
* The `<h1>` element defines a large heading
* The `<p>` element defines a paragraph


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
## Block & block elements

Every HTML element has a default display value, depending on what type of element it is. There are two display values: block and inline.

### Block elements
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

#### The `<div>` element
The `<div>` element is often used as a container for other HTML elements. The `<div>` element has no required attributes, but style, class and id are common. When used together with CSS, the `<div>` element can be used to style blocks of content:

```html
<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div> 
```
<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div>

</br>
Here are the block-level elements in HTML:

<table>
<tbody>
  <tr>
    <td>&lt;address&gt;</td>
    <td>&lt;article&gt;</td>
    <td>&lt;aside&gt;</td>
    <td>&lt;blockquote&gt;</td>
    <td>&lt;canvas&gt;</td>
    <td>&lt;dd&gt;</td>
    <td>&lt;div&gt;</td>
    <td>&lt;dl&gt;</td>
    <td>&lt;dt&gt;</td>
    <td>&lt;fieldset&gt;</td>
  </tr>
  <tr>
    <td>&lt;figcaption&gt;</td>
    <td>&lt;figure&gt;</td>
    <td>&lt;footer&gt;</td>
    <td>&lt;form&gt;</td>
    <td>&lt;h1&gt;-&lt;h6&gt;</td>
    <td>&lt;header&gt;</td>
    <td>&lt;hr&gt;</td>
    <td>&lt;li&gt;</td>
    <td>&lt;main&gt;</td>
    <td>&lt;nav&gt;</td>
  </tr>
  <tr>
    <td>&lt;noscript&gt;</td>
    <td>&lt;ol&gt;</td>
    <td>&lt;p&gt;</td>
    <td>&lt;pre&gt;</td>
    <td>&lt;section&gt;</td>
    <td>&lt;table&gt;</td>
    <td>&lt;tfoot&gt;</td>
    <td>&lt;ul&gt;</td>
    <td>&lt;video&gt;</td>
  </tr>
</tbody>
</table>
</br>

### Inline elements
An inline element does not start on a new line and it only takes up as much width as necessary.

#### The `<span>` element
The `<span>` element is an inline container used to mark up a part of a text, or a part of a document. The `<span>` element has no required attributes, but style, class and id are common. When used together with CSS, the `<span>` element can be used to style parts of the text:

```html
<p>My mother has <span style="color:blue;font-weight:bold">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold">dark green</span> eyes.</p>
```

<p>My mother has <span style="color:blue;font-weight:bold">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold">dark green</span> eyes.</p>

</br>
Here are the block-level elements in HTML:

<table>
<tbody>
  <tr>
    <td>&lt;a&gt;</td>
    <td>&lt;abbr&gt;</td>
    <td>&lt;acronym&gt;</td>
    <td>&lt;b&gt;</td>
    <td>&lt;bdo&gt;</td>
    <td>&lt;big&gt;</td>
    <td>&lt;br&gt;</td>
    <td>&lt;button&gt;</td>
    <td>&lt;cite&gt;</td>
    <td>&lt;code&gt;</td>
  </tr>
  <tr>
    <td>&lt;dfn&gt;</td>
    <td>&lt;em&gt;</td>
    <td>&lt;i&gt;</td>
    <td>&lt;img&gt;</td>
    <td>&lt;input&gt;</td>
    <td>&lt;kbd&gt;</td>
    <td>&lt;label&gt;</td>
    <td>&lt;map&gt;</td>
    <td>&lt;object&gt;</td>
    <td>&lt;output&gt;</td>
  </tr>
  <tr>
    <td>&lt;q&gt;</td>
    <td>&lt;samp&gt;</td>
    <td>&lt;script&gt;</td>
    <td>&lt;select&gt;</td>
    <td>&lt;small&gt;</td>
    <td>&lt;span&gt;</td>
    <td>&lt;strong&gt;</td>
    <td>&lt;textarea&gt;</td>
    <td>&lt;time&gt;</td>
    <td>&lt;tt&gt;</td>
    <td>&lt;var&gt;</td>
  </tr>
</tbody>
</table>
</br>

## DOM

The Document Object Model (**DOM**) is the data representation of the objects that comprise the structure and content of a document on the web. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

<img src="../../../img/1200px-DOM-model.svg.png" width=400p>