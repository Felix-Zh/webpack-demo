import foo from '../../modules/foo';
import _ from 'lodash';
import $ from 'jquery';


function createUI() {
  const $el = $(`
    <div>
      <p>Module foo: ${JSON.stringify(foo)}.</p>
      <p>Version of Lodash: ${_.VERSION}.</p>
      <p>And I was composed by jQuery ${$.fn.jquery}.</p>
    </div>
  `);

  return $el;
}

$(document.body).append(createUI());
