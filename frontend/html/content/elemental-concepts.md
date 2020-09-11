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

## DOM

The Document Object Model (**DOM**) is the data representation of the objects that comprise the structure and content of a document on the web. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

<img src="../../../img/1200px-DOM-model.svg.png" width=400p>