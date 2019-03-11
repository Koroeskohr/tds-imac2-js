import { h } from 'hyperapp'

const fishBody ='=';

export default (state, actions) => 
    h('main',{},[
        h('p', {}, '<'+ fishBody.repeat(state.fishSize) +'°>'),
        h('button', {onclick: actions.decreaseFishSize},'-'),
        h('button', {onclick: actions.increaseFishSize}, '+')
    ]
    )


