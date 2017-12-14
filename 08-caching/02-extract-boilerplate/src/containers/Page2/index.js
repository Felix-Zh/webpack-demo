import foo from '../../modules/foo';


function createUI() {
  const el = document.createElement('div');
  const html = `
    <p>Module foo: ${JSON.stringify(foo)}.</p>
  `;

  el.innerHTML = html;

  return el;
}

document.body.appendChild(createUI());
