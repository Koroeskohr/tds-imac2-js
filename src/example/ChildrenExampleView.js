import { h } from 'hyperapp'

import NodeWithChildren from './NodeWithChildren'

export default (/* state, actions */) =>
  h('div', {}, [
    NodeWithChildren({}, h('div', {}, 'enfants'))
  ])

/*
==
<div>
  <NodeWithChildren>
    <div>enfants</div>
  </NodeWithChildren>
</div>
*/
