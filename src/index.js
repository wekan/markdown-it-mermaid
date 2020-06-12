import Mermaid from 'mermaid';


const MermaidChart = code => {
  try {
    var needsUniqueId = "render" + (Math.floor(Math.random() * 10000)).toString();
    Mermaid.mermaidAPI.render(needsUniqueId, code, sc => {code=sc});
    return `<div class="mermaid">${code}</div>`;
  } catch (err) {
    return `<pre>${err.name}: ${err.message}</pre>`;
  }
}


const MermaidPlugIn = (md, opts)=> {
  Mermaid.initialize(Object.assign(MermaidPlugIn.default, opts));

  const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence=(tokens, idx, opts, env, self)=>{
    const token = tokens[idx];
    const code = ${token.content.trim();
    if (token.info === 'mermaid') {
      return MermaidChart(code);
    }
    return defaultRenderer(tokens, idx, opts, env, self);
  }
}


MermaidPlugIn.default={
  startOnLoad: false,
  securityLevel: 'true',
    theme: "default",
    flowchart:{
      htmlLabels: false,
      useMaxWidth: true,
    }
};

export default MermaidPlugIn;
