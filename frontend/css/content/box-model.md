# CSS Box Model

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

<img src="../../../img/box-model.png" width=550px style="margin-left:auto;margin-right:auto;display:block;">


## [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
The border property is a shorthand property for:

* `border-width`
* `border-style` (required)
* `border-color`

### Syntax
```css
border: border-width border-style border-color|initial|inherit;
```

## [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
The CSS padding properties are used to generate space around an element's content, inside of any defined borders. With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

CSS has properties for specifying the padding for each side of an element:

* `padding-top`
* `padding-right`
* `padding-bottom`
* `padding-left`

All the padding properties can have the following values:

* `length` - specifies a padding in px, pt, cm, etc.
* `%` - specifies a padding in % of the width of the containing element
* `inherit` - specifies that the padding should be inherited from the parent element


## [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
The `margin` properties are used to create space around elements, outside of any defined borders. With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

CSS has properties for specifying the margin for each side of an element:

* `margin-top`
* `margin-right`
* `margin-bottom`
* `margin-left`

All the margin properties can have the following values:

* `auto` - the browser calculates the margin
* `length` - specifies a margin in px, pt, cm, etc.
* `%` - specifies a margin in % of the width of the containing element
* `inherit` - specifies that the margin should be inherited from the parent element

### Syntax
```css
margin: length|auto|initial|inherit;
```

## [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) & [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
The `width`/`height` property sets the width/height of an element. The `width`/`height` of an element does not include `padding`, `borders`, or `margins`. If `width`/`height`: `auto`; the element will automatically adjust its width/height to allow its content to be displayed correctly.

If width/height is set to a numeric value (like pixels, (r)em, percentages) then if the content does not fit within the specified width/height, it will overflow. How the container will handle the overflowing content is defined by the `overflow` property.

### Syntax
```css
width/height: auto|value|initial|inherit;
```