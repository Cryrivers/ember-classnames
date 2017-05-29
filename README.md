[![Build Status](https://travis-ci.org/Cryrivers/ember-classnames.svg?branch=master)](https://travis-ci.org/Cryrivers/ember-classnames)
# ember-classnames
`ember-classnames` is an Ember.js wrapper for the popular [`classnames`](https://github.com/JedWatson/classnames) library made by **Jed Watson**

## Installation

`ember install ember-classnames`

## Usage

### JavaScript

```js
import Ember from 'ember';
import cx from 'classnames';
import hbs from 'htmlbars-inline-precompile'

export default Ember.Component.extend({
  layout: hbs`<div class=${cx('foo', 'bar', { qux: true })}></div>`
});
```


### Templates

```hbs
<div class="{{cx 'foo' 'bar' qux=true}}"></div>
<div class="{{cx 'button' button--disabled=disabled}}">
  Button
</div>
```

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
