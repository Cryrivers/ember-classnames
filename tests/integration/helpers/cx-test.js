
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cx', 'helper:cx', {
  integration: true
});

// Replace this with your real tests.
test('cx helper can accept serveral static class names', function(assert) {
  this.render(hbs`{{cx 'foo' 'bar'}}`);
  assert.equal(this.$().text().trim(), 'foo bar');
});

test('cx helper can accept mixed of static class names and variables', function(assert) {
  this.set('style', 'bar');
  this.render(hbs`{{cx 'foo' style}}`);
  assert.equal(this.$().text().trim(), 'foo bar');
});

test('cx helper can conditional class names', function(assert) {
  assert.expect(4);
  let template = hbs`{{cx style}}`;
  this.set('style', {
    foo: true,
    bar: true
  });
  this.render(template);
  assert.equal(this.$().text().trim(), 'foo bar');
  this.set('style.foo', false);
  this.render(template);
  assert.equal(this.$().text().trim(), 'bar');
  this.set('style.bar', false);
  this.render(template);
  assert.equal(this.$().text().trim(), '');
  this.set('style.foo', true);
  this.render(template);
  assert.equal(this.$().text().trim(), 'foo');
});
