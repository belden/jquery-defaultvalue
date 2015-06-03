jQuery DefaultValue
===========

Placeholder is a fallback for the HTML5 placeholder attribute. It sets a default value on your input elements if they are empty. The default value disappears if the input gain focus or the user types something in it, even in browsers without support for the placeholder attribute.

Demo: http://jsfiddle.net/janjarfalk/rnqP3/

The placeholder attribute is perfect for label values like “Search here…”, “Username” or example values like “john@doe.com”. The placeholder attribute and Default Value works with text-, password-inputs and textareas.How to use DefaultvalueUse the HTML5 placeholder attribute is you normally would.

```html
<input placeholder="Enter a username…" type="text">
<input placeholder="…and a password" type="password">
```
Then initiate Default Value on those elements.
```js
$(' [placeholder] ').defaultValue();
```
###Empty input fields has the class name ‘empty’
When the default value is shown the class name ‘empty’ is added to the field. Take a look at the demo and see how the default values differs from the user created values.

###Default Value manipulates the DOM
Since you can’t change the type of an input field in Internet Explorer, Placeholder creates a clone of your password field but with the type text instead.

###Change log
| Version | Changes |
| ------- | ------- |
| 1.4.2 |	Fixed detection for native placeholder support and added two more attributes – row and cols – to the clone. (Thanks to marcus) |
| 1.4.1 |	Fixed an issue regarding detection for native placeholder support. |
| 1.4 |	Now uses the HTML5 attribute placeholder instead of rel |
| 1.3.1 |	Fixed Lazy compatibility (Thanks Anders Adlén) |
| 1.3 |	Refactored (Thanks Kristofer Karlsson) |
| 1.2 |	Fixed an ‘addClass’ is not a function error (Thanks pentarim) |
| 1.1 |	Refactored. Default values are now removed when closest form is submitted. Fixed tabindex issue. (Thanks a lot to Paul Elliott) |
