import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-power-colorpicker/selected-color', 'Integration | Component | ember power colorpicker/selected color', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-power-colorpicker/selected-color}}`);

  assert.equal(this.$().text().trim(), '');
});
