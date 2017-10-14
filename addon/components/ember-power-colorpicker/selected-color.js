import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../../templates/components/ember-power-colorpicker/selected-color';

export default Component.extend({
  layout,
  tagName: '',

  computedStyle: computed('color.value', {
    get() {
      return htmlSafe(`background-color:#${get(this, 'color.value')}`);
    }
  })
});
