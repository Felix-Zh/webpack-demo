import foo from '../../modules/foo';
// import baz from '../../modules/baz';

function createUI() {
  const el = document.createElement('div');
  const html = `
    <p>Module foo: ${JSON.stringify(foo)}.</p>
  `;

  el.innerHTML = html;

  return el;
}

document.body.appendChild(createUI());

console.log(0)