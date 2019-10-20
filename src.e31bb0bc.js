// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.measure = measure;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.validate_component = validate_component;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function validate_store(store, name) {
  if (!store || typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, callback) {
  const unsub = store.subscribe(callback);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, fn) {
  return definition[1] ? assign({}, assign(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {}))) : ctx.$$scope.ctx;
}

function get_slot_changes(definition, ctx, changed, fn) {
  return definition[1] ? assign({}, assign(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {}))) : ctx.$$scope.changed || {};
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();
let running = false;

function run_tasks() {
  tasks.forEach(task => {
    if (!task[0](now())) {
      tasks.delete(task);
      task[1]();
    }
  });
  running = tasks.size > 0;
  if (running) raf(run_tasks);
}

function clear_loops() {
  // for testing...
  tasks.forEach(task => tasks.delete(task));
  running = false;
}

function loop(fn) {
  let task;

  if (!running) {
    running = true;
    raf(run_tasks);
  }

  return {
    promise: new Promise(fulfil => {
      tasks.add(task = [fn, fulfil]);
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  const target = {};

  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  for (const key in attributes) {
    if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key in node) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group) {
  const value = [];

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.push(group[i].__value);
  }

  return value;
}

function to_number(value) {
  return value === '' ? undefined : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      for (let j = 0; j < node.attributes.length; j += 1) {
        const attribute = node.attributes[j];
        if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
      }

      return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.data !== data) text.data = data;
}

function set_input_value(input, value) {
  if (value != null || input.value) {
    input.value = value;
  }
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}

function add_resize_listener(element, fn) {
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  const object = document.createElement('object');
  object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  object.type = 'text/html';
  object.tabIndex = -1;
  let win;

  object.onload = () => {
    win = object.contentDocument.defaultView;
    win.addEventListener('resize', fn);
  };

  if (/Trident/.test(navigator.userAgent)) {
    element.appendChild(object);
    object.data = 'about:blank';
  } else {
    object.data = 'about:blank';
    element.appendChild(object);
  }

  return {
    cancel: () => {
      win && win.removeEventListener && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

class HtmlTag {
  constructor(html, anchor = null) {
    this.e = element('div');
    this.a = anchor;
    this.u(html);
  }

  m(target, anchor = null) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(target, this.n[i], anchor);
    }

    this.t = target;
  }

  u(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  p(html) {
    this.d();
    this.u(html);
    this.m(this.t, this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
let stylesheet;
let active = 0;
let current_rules = {}; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;

  if (!current_rules[name]) {
    if (!stylesheet) {
      const style = element('style');
      document.head.appendChild(style);
      stylesheet = style.sheet;
    }

    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  node.style.animation = (node.style.animation || '').split(', ').filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  ).join(', ');
  if (name && ! --active) clear_rules();
}

function clear_rules() {
  raf(() => {
    if (active) return;
    let i = stylesheet.cssRules.length;

    while (i--) stylesheet.deleteRule(i);

    current_rules = {};
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = current_component;
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

function flush() {
  const seen_callbacks = new Set();

  do {
    // first, call beforeUpdate functions
    // and update components
    while (dirty_components.length) {
      const component = dirty_components.shift();
      set_current_component(component);
      update(component.$$);
    }

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        callback(); // ...so guard against infinite loops

        seen_callbacks.add(callback);
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
}

function update($$) {
  if ($$.fragment) {
    $$.update($$.dirty);
    run_all($$.before_update);
    $$.fragment.p($$.dirty, $$.ctx);
    $$.dirty = null;
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = key && {
      [key]: value
    };
    const child_ctx = assign(assign({}, info.ctx), info.resolved);
    const block = type && (info.current = type)(child_ctx);

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      flush();
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = {
      [info.value]: promise
    };
  }
}

const globals = typeof window !== 'undefined' ? window : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(changed, child_ctx);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function measure(blocks) {
  const rects = {};
  let i = blocks.length;

  while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();

  return rects;
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args) {
  const attributes = Object.assign({}, ...args);
  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === undefined) return;
    if (value === true) str += " " + name;
    const escaped = String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;');
    str += " " + name + "=" + JSON.stringify(escaped);
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  if (component.$$.props.indexOf(name) === -1) return;
  component.$$.bound[name] = callback;
  callback(component.$$.ctx[name]);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  if (component.$$.fragment) {
    run_all(component.$$.on_destroy);
    component.$$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    component.$$.on_destroy = component.$$.fragment = null;
    component.$$.ctx = {};
  }
}

function make_dirty(component, key) {
  if (!component.$$.dirty) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty = blank_object();
  }

  component.$$.dirty[key] = true;
}

function init(component, options, instance, create_fragment, not_equal, prop_names) {
  const parent_component = current_component;
  set_current_component(component);
  const props = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: prop_names,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty: null
  };
  let ready = false;
  $$.ctx = instance ? instance(component, props, (key, ret, value = ret) => {
    if ($$.ctx && not_equal($$.ctx[key], $$.ctx[key] = value)) {
      if ($$.bound[key]) $$.bound[key](value);
      if (ready) make_dirty(component, key);
    }

    return ret;
  }) : props;
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment($$.ctx);

  if (options.target) {
    if (options.hydrate) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment.l(children(options.target));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement !== 'undefined') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set() {// overridden by instance, if it has props
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set() {// overridden by instance, if it has props
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, detail));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.data === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

}

exports.SvelteComponentDev = SvelteComponentDev;
},{}],"../node_modules/svelte/store/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derived = derived;
exports.readable = readable;
exports.writable = writable;
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function () {
    return _internal.get_store_value;
  }
});

var _internal = require("../internal");

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */

function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value, start = _internal.noop) {
  let stop;
  const subscribers = [];

  function set(new_value) {
    if ((0, _internal.safe_not_equal)(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        const run_queue = !subscriber_queue.length;

        for (let i = 0; i < subscribers.length; i += 1) {
          const s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run, invalidate = _internal.noop) {
    const subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || _internal.noop;
    }

    run(value);
    return () => {
      const index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set,
    update,
    subscribe
  };
}
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 * @param {Stores} stores input stores
 * @param {function(Stores=, function(*)=):*}fn function callback that aggregates the values
 * @param {*=}initial_value when used asynchronously
 */


function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, set => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = _internal.noop;

    const sync = () => {
      if (pending) {
        return;
      }

      cleanup();
      const result = fn(single ? values[0] : values, set);

      if (auto) {
        set(result);
      } else {
        cleanup = (0, _internal.is_function)(result) ? result : _internal.noop;
      }
    };

    const unsubscribers = stores_array.map((store, i) => store.subscribe(value => {
      values[i] = value;
      pending &= ~(1 << i);

      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      (0, _internal.run_all)(unsubscribers);
      cleanup();
    };
  });
}
},{"../internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/regexparam/dist/regexparam.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(str, loose) {
  if (str instanceof RegExp) return {
    keys: false,
    pattern: str
  };
  var c,
      o,
      tmp,
      ext,
      keys = [],
      pattern = '',
      arr = str.split('/');
  arr[0] || arr.shift();

  while (tmp = arr.shift()) {
    c = tmp[0];

    if (c === '*') {
      keys.push('wild');
      pattern += '/(.*)';
    } else if (c === ':') {
      o = tmp.indexOf('?', 1);
      ext = tmp.indexOf('.', 1);
      keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
      pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
      if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
    } else {
      pattern += '/' + tmp;
    }
  }

  return {
    keys: keys,
    pattern: new RegExp('^' + pattern + (loose ? '(?=$|\/)' : '\/?$'), 'i')
  };
}
},{}],"../node_modules/svelte-spa-router/Router.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = push;
exports.pop = pop;
exports.replace = replace;
exports.link = link;
exports.querystring = exports.location = exports.loc = exports.default = void 0;

var _internal = require("svelte/internal");

var _store = require("svelte/store");

var _regexparam = _interopRequireDefault(require("regexparam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ../node_modules/svelte-spa-router/Router.svelte generated by Svelte v3.12.1 */
const {
  Error: Error_1,
  Object: Object_1
} = _internal.globals;
const file = "../node_modules/svelte-spa-router/Router.svelte";

function create_fragment(ctx) {
  var switch_instance_anchor, current;
  var switch_value = ctx.component;

  function switch_props(ctx) {
    return {
      props: {
        params: ctx.componentParams
      },
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  const block = {
    c: function create() {
      if (switch_instance) switch_instance.$$.fragment.c();
      switch_instance_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        (0, _internal.mount_component)(switch_instance, target, anchor);
      }

      (0, _internal.insert_dev)(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var switch_instance_changes = {};
      if (changed.componentParams) switch_instance_changes.params = ctx.componentParams;

      if (switch_value !== (switch_value = ctx.component)) {
        if (switch_instance) {
          (0, _internal.group_outros)();
          const old_component = switch_instance;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          switch_instance.$$.fragment.c();
          (0, _internal.transition_in)(switch_instance.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) (0, _internal.transition_in)(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) (0, _internal.transition_out)(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(switch_instance_anchor);
      }

      if (switch_instance) (0, _internal.destroy_component)(switch_instance, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
/**
 * @typedef {Object} Location
 * @property {string} location - Location (page/view), for example `/book`
 * @property {string} [querystring] - Querystring from the hash, as a string not parsed
 */

/**
 * Returns the current location from the hash.
 *
 * @returns {Location} Location object
 * @private
 */


function getLocation() {
  const hashPosition = window.location.href.indexOf('#/');
  let location = hashPosition > -1 ? window.location.href.substr(hashPosition + 1) : '/'; // Check if there's a querystring

  const qsPosition = location.indexOf('?');
  let querystring = '';

  if (qsPosition > -1) {
    querystring = location.substr(qsPosition + 1);
    location = location.substr(0, qsPosition);
  }

  return {
    location,
    querystring
  };
}
/**
 * Readable store that returns the current full location (incl. querystring)
 */


const loc = (0, _store.readable)(getLocation(), // eslint-disable-next-line prefer-arrow-callback
function start(set) {
  const update = () => {
    set(getLocation());
  };

  window.addEventListener('hashchange', update, false);
  return function stop() {
    window.removeEventListener('hashchange', update, false);
  };
});
/**
 * Readable store that returns the current location
 */

exports.loc = loc;
const location = (0, _store.derived)(loc, $loc => $loc.location);
/**
 * Readable store that returns the current querystring
 */

exports.location = location;
const querystring = (0, _store.derived)(loc, $loc => $loc.querystring);
/**
 * Navigates to a new page programmatically.
 *
 * @param {string} location - Path to navigate to (must start with `/`)
 */

exports.querystring = querystring;

function push(location) {
  if (!location || location.length < 1 || location.charAt(0) != '/') {
    throw Error('Invalid parameter location');
  } // Execute this code when the current call stack is complete


  setTimeout(() => {
    window.location.hash = '#' + location;
  }, 0);
}
/**
 * Navigates back in history (equivalent to pressing the browser's back button).
 */


function pop() {
  // Execute this code when the current call stack is complete
  setTimeout(() => {
    window.history.back();
  }, 0);
}
/**
 * Replaces the current page but without modifying the history stack.
 *
 * @param {string} location - Path to navigate to (must start with `/`)
 */


function replace(location) {
  if (!location || location.length < 1 || location.charAt(0) != '/') {
    throw Error('Invalid parameter location');
  } // Execute this code when the current call stack is complete


  setTimeout(() => {
    history.replaceState(undefined, undefined, '#' + location); // The method above doesn't trigger the hashchange event, so let's do that manually

    window.dispatchEvent(new Event('hashchange'));
  }, 0);
}
/**
 * Svelte Action that enables a link element (`<a>`) to use our history management.
 *
 * For example:
 *
 * ````html
 * <a href="/books" use:link>View books</a>
 * ````
 *
 * @param {HTMLElement} node - The target node (automatically set by Svelte). Must be an anchor tag (`<a>`) with a href attribute starting in `/`
 */


function link(node) {
  // Only apply to <a> tags
  if (!node || !node.tagName || node.tagName.toLowerCase() != 'a') {
    throw Error('Action "link" can only be used with <a> tags');
  } // Destination must start with '/'


  const href = node.getAttribute('href');

  if (!href || href.length < 1 || href.charAt(0) != '/') {
    throw Error('Invalid value for "href" attribute');
  } // onclick event handler


  node.addEventListener('click', event => {
    // Disable normal click event
    event.preventDefault(); // Push link or link children click

    let href;
    let target = event.target;

    while ((href = target.getAttribute('href')) === null) {
      target = target.parentElement;

      if (target === null) {
        throw Error('Could not find corresponding href value');
      }
    }

    push(href);
    return false;
  });
}

function instance($$self, $$props, $$invalidate) {
  let $loc;
  (0, _internal.validate_store)(loc, 'loc');
  (0, _internal.component_subscribe)($$self, loc, $$value => {
    $loc = $$value;
    $$invalidate('$loc', $loc);
  });
  /**
  * Dictionary of all routes, in the format `'/path': component`.
  *
  * For example:
  * ````js
  * import HomeRoute from './routes/HomeRoute.svelte'
  * import BooksRoute from './routes/BooksRoute.svelte'
  * import NotFoundRoute from './routes/NotFoundRoute.svelte'
  * routes = {
  *     '/': HomeRoute,
  *     '/books': BooksRoute,
  *     '*': NotFoundRoute
  * }
  * ````
  */

  let {
    routes = {}
  } = $$props;
  /**
   * Container for a route: path, component
   */

  class RouteItem {
    /**
     * Initializes the object and creates a regular expression from the path, using regexparam.
     *
     * @param {string} path - Path to the route (must start with '/' or '*')
     * @param {SvelteComponent} component - Svelte component for the route
     */
    constructor(path, component) {
      // Path must be a regular or expression, or a string starting with '/' or '*'
      if (!path || typeof path == 'string' && (path.length < 1 || path.charAt(0) != '/' && path.charAt(0) != '*') || typeof path == 'object' && !(path instanceof RegExp)) {
        throw Error('Invalid value for "path" argument');
      }

      const {
        pattern,
        keys
      } = (0, _regexparam.default)(path);
      this.path = path;
      this.component = component;
      this._pattern = pattern;
      this._keys = keys;
    }
    /**
     * Checks if `path` matches the current route.
     * If there's a match, will return the list of parameters from the URL (if any).
     * In case of no match, the method will return `null`.
     *
     * @param {string} path - Path to test
     * @returns {null|Object.<string, string>} List of paramters from the URL if there's a match, or `null` otherwise.
     */


    match(path) {
      const matches = this._pattern.exec(path);

      if (matches === null) {
        return null;
      } // If the input was a regular expression, this._keys would be false, so return matches as is


      if (this._keys === false) {
        return matches;
      }

      const out = {};
      let i = 0;

      while (i < this._keys.length) {
        out[this._keys[i]] = matches[++i] || null;
      }

      return out;
    }

  } // We need an iterable: if it's not a Map, use Object.entries


  const routesIterable = routes instanceof Map ? routes : Object.entries(routes); // Set up all routes

  const routesList = [];

  for (const [path, route] of routesIterable) {
    routesList.push(new RouteItem(path, route));
  } // Props for the component to render


  let component = null;
  let componentParams = {};
  const writable_props = ['routes'];
  Object_1.keys($$props).forEach(key => {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Router> was created with unknown prop '${key}'`);
  });

  $$self.$set = $$props => {
    if ('routes' in $$props) $$invalidate('routes', routes = $$props.routes);
  };

  $$self.$capture_state = () => {
    return {
      routes,
      component,
      componentParams,
      $loc
    };
  };

  $$self.$inject_state = $$props => {
    if ('routes' in $$props) $$invalidate('routes', routes = $$props.routes);
    if ('component' in $$props) $$invalidate('component', component = $$props.component);
    if ('componentParams' in $$props) $$invalidate('componentParams', componentParams = $$props.componentParams);
    if ('$loc' in $$props) loc.set($loc);
  };

  $$self.$$.update = ($$dirty = {
    component: 1,
    $loc: 1
  }) => {
    if ($$dirty.component || $$dirty.$loc) {
      {
        // Find a route matching the location
        $$invalidate('component', component = null);
        let i = 0;

        while (!component && i < routesList.length) {
          const match = routesList[i].match($loc.location);

          if (match) {
            $$invalidate('component', component = routesList[i].component);
            $$invalidate('componentParams', componentParams = match);
          }

          i++;
        }
      }
    }
  };

  return {
    routes,
    component,
    componentParams
  };
}

class Router extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, ["routes"]);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Router",
      options,
      id: create_fragment.name
    });
  }

  get routes() {
    throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set routes(value) {
    throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Router;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte/store":"../node_modules/svelte/store/index.mjs","regexparam":"../node_modules/regexparam/dist/regexparam.mjs"}],"components/Letters.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

/* components/Letters.svelte generated by Svelte v3.12.1 */
const file = "components/Letters.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = Object.create(ctx);
  child_ctx.letter = list[i];
  return child_ctx;
} // (7:0) {#each letters as letter}


function create_each_block(ctx) {
  var span,
      t_value = ctx.letter + "",
      t;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.add_location)(span, file, 7, 2, 107);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      (0, _internal.append_dev)(span, t);
    },
    p: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(span);
      }
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(7:0) {#each letters as letter}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  var each_1_anchor;
  let each_value = ctx.letters;
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      (0, _internal.insert_dev)(target, each_1_anchor, anchor);
    },
    p: function update(changed, ctx) {
      if (changed.letters) {
        each_value = ctx.letters;
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(changed, child_ctx);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      (0, _internal.destroy_each)(each_blocks, detaching);

      if (detaching) {
        (0, _internal.detach_dev)(each_1_anchor);
      }
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    text = ''
  } = $$props;
  const letters = text.split('');
  const writable_props = ['text'];
  Object.keys($$props).forEach(key => {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Letters> was created with unknown prop '${key}'`);
  });

  $$self.$set = $$props => {
    if ('text' in $$props) $$invalidate('text', text = $$props.text);
  };

  $$self.$capture_state = () => {
    return {
      text
    };
  };

  $$self.$inject_state = $$props => {
    if ('text' in $$props) $$invalidate('text', text = $$props.text);
  };

  return {
    text,
    letters
  };
}

class Letters extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, ["text"]);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Letters",
      options,
      id: create_fragment.name
    });
  }

  get text() {
    throw new Error("<Letters>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set text(value) {
    throw new Error("<Letters>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Letters;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/SiteName.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelteSpaRouter = require("svelte-spa-router");

var _Letters = _interopRequireDefault(require("~/components/Letters.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/SiteName.svelte generated by Svelte v3.12.1 */
const file = "components/SiteName.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = 'svelte-1wwgndk-style';
  style.textContent = ".siteName.svelte-1wwgndk{margin:0 0 20px;text-align:center;color:#343a40;font-size:50px;line-height:1;cursor:pointer}.siteName.svelte-1wwgndk span:nth-child(1){color:#5187ED}.siteName.svelte-1wwgndk span:nth-child(2){color:#D95040}.siteName.svelte-1wwgndk span:nth-child(3){color:#F2BD42}.siteName.svelte-1wwgndk span:nth-child(4){color:#F2BD42}.siteName.svelte-1wwgndk span:nth-child(5){color:#5187ED}.siteName.svelte-1wwgndk span:nth-child(6){color:#58A55D}.siteName.svelte-1wwgndk span:nth-child(7){color:#D95040}.siteName.svelte-1wwgndk span:nth-child(8){color:rebeccapurple}\n";
  (0, _internal.append_dev)(document.head, style);
}

function create_fragment(ctx) {
  var h1, current, dispose;
  var letters = new _Letters.default({
    props: {
      text: text
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      h1 = (0, _internal.element)("h1");
      letters.$$.fragment.c();
      (0, _internal.attr_dev)(h1, "class", "siteName svelte-1wwgndk");
      (0, _internal.add_location)(h1, file, 7, 0, 146);
      dispose = (0, _internal.listen_dev)(h1, "click", ctx.click_handler);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, h1, anchor);
      (0, _internal.mount_component)(letters, h1, null);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(letters.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(letters.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(h1);
      }

      (0, _internal.destroy_component)(letters);
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

const text = 'Seek&Find';

function instance($$self) {
  const click_handler = ev => (0, _svelteSpaRouter.push)('/');

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {};

  return {
    click_handler
  };
}

class SiteName extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-1wwgndk-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, []);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "SiteName",
      options,
      id: create_fragment.name
    });
  }

}

var _default = SiteName;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte-spa-router":"../node_modules/svelte-spa-router/Router.svelte","~/components/Letters.svelte":"components/Letters.svelte","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/svelte/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "afterUpdate", {
  enumerable: true,
  get: function () {
    return _internal.afterUpdate;
  }
});
Object.defineProperty(exports, "beforeUpdate", {
  enumerable: true,
  get: function () {
    return _internal.beforeUpdate;
  }
});
Object.defineProperty(exports, "createEventDispatcher", {
  enumerable: true,
  get: function () {
    return _internal.createEventDispatcher;
  }
});
Object.defineProperty(exports, "getContext", {
  enumerable: true,
  get: function () {
    return _internal.getContext;
  }
});
Object.defineProperty(exports, "onDestroy", {
  enumerable: true,
  get: function () {
    return _internal.onDestroy;
  }
});
Object.defineProperty(exports, "onMount", {
  enumerable: true,
  get: function () {
    return _internal.onMount;
  }
});
Object.defineProperty(exports, "setContext", {
  enumerable: true,
  get: function () {
    return _internal.setContext;
  }
});
Object.defineProperty(exports, "tick", {
  enumerable: true,
  get: function () {
    return _internal.tick;
  }
});

var _internal = require("./internal");
},{"./internal":"../node_modules/svelte/internal/index.mjs"}],"components/SearchInput.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

/* components/SearchInput.svelte generated by Svelte v3.12.1 */
const file = "components/SearchInput.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = 'svelte-5vgn9g-style';
  style.textContent = ".inputWrap.svelte-5vgn9g{display:flex;align-items:center;border:1px solid #dfe1e5;border-radius:50px;padding:2px 30px 2px 12px}.inputWrap.svelte-5vgn9g svg.svelte-5vgn9g{width:20px;color:#9aa0a6}.inputWrap.svelte-5vgn9g input.svelte-5vgn9g{flex:1;border:none;font-size:20px;line-height:1;padding:0.5em 0.6em}.inputWrap.svelte-5vgn9g input.svelte-5vgn9g:focus{outline:none}.inputWrap.svelte-5vgn9g:hover{box-shadow:0 0 0 0.2rem rgba(144, 178, 214, 0.25)}.inputWrap.svelte-5vgn9g:focus-within{box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.25)}\n";
  (0, _internal.append_dev)(document.head, style);
}

function create_fragment(ctx) {
  var div, svg, path, t, input_1, dispose;
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      svg = (0, _internal.svg_element)("svg");
      path = (0, _internal.svg_element)("path");
      t = (0, _internal.space)();
      input_1 = (0, _internal.element)("input");
      (0, _internal.attr_dev)(path, "fill", "currentColor");
      (0, _internal.attr_dev)(path, "d", "M9 3C5.68 3 3 5.68 3 9a5.99 5.99 0 0 0 9.88 4.58L18.29 19l.71-.7-5.42-5.43A5.99 5.99 0 0 0 9 3zm0 1a4.99 4.99 0 1 1 0 10A4.99 4.99 0 1 1 9 4z");
      (0, _internal.add_location)(path, file, 53, 4, 951);
      (0, _internal.attr_dev)(svg, "xmlns", "http://www.w3.org/2000/svg");
      (0, _internal.attr_dev)(svg, "viewBox", "0 0 22 22");
      (0, _internal.attr_dev)(svg, "class", "svelte-5vgn9g");
      (0, _internal.add_location)(svg, file, 52, 2, 886);
      (0, _internal.attr_dev)(input_1, "type", "text");
      (0, _internal.attr_dev)(input_1, "class", "svelte-5vgn9g");
      (0, _internal.add_location)(input_1, file, 55, 2, 1137);
      (0, _internal.attr_dev)(div, "class", "inputWrap svelte-5vgn9g");
      (0, _internal.add_location)(div, file, 51, 0, 860);
      dispose = [(0, _internal.listen_dev)(input_1, "input", ctx.input_1_input_handler), (0, _internal.listen_dev)(input_1, "keydown", ctx.keydown_handler)];
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, svg);
      (0, _internal.append_dev)(svg, path);
      (0, _internal.append_dev)(div, t);
      (0, _internal.append_dev)(div, input_1);
      (0, _internal.set_input_value)(input_1, ctx.searchText);
      ctx.input_1_binding(input_1);
    },
    p: function update(changed, ctx) {
      if (changed.searchText && input_1.value !== ctx.searchText) (0, _internal.set_input_value)(input_1, ctx.searchText);
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(div);
      }

      ctx.input_1_binding(null);
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  const dispatch = (0, _svelte.createEventDispatcher)();
  let input = null;
  let {
    searchText = ''
  } = $$props;

  const doSearch = () => {
    dispatch('doSearch');
  };

  (0, _svelte.onMount)(() => {
    input && input.focus();
  });
  const writable_props = ['searchText'];
  Object.keys($$props).forEach(key => {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<SearchInput> was created with unknown prop '${key}'`);
  });

  function input_1_input_handler() {
    searchText = this.value;
    $$invalidate('searchText', searchText);
  }

  function input_1_binding($$value) {
    _internal.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
      $$invalidate('input', input = $$value);
    });
  }

  const keydown_handler = ev => ev.key === 'Enter' && doSearch();

  $$self.$set = $$props => {
    if ('searchText' in $$props) $$invalidate('searchText', searchText = $$props.searchText);
  };

  $$self.$capture_state = () => {
    return {
      input,
      searchText
    };
  };

  $$self.$inject_state = $$props => {
    if ('input' in $$props) $$invalidate('input', input = $$props.input);
    if ('searchText' in $$props) $$invalidate('searchText', searchText = $$props.searchText);
  };

  return {
    input,
    searchText,
    doSearch,
    input_1_input_handler,
    input_1_binding,
    keydown_handler
  };
}

class SearchInput extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-5vgn9g-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, ["searchText"]);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "SearchInput",
      options,
      id: create_fragment.name
    });
  }

  get searchText() {
    throw new Error("<SearchInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set searchText(value) {
    throw new Error("<SearchInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = SearchInput;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posts = void 0;

var _store = require("svelte/store");

const localStoragePostsKey = 'seekFind_posts';
const posts = (0, _store.readable)([], set => {
  let localPosts = JSON.parse(localStorage.getItem(localStoragePostsKey));

  if (Array.isArray(localPosts)) {
    set(localPosts);
    return;
  }

  const pages = 10;
  const calls = [];

  for (let i = 1; i <= pages; i++) {
    calls.push(fetch(`https://node-hnapi.herokuapp.com/news?page=${i}`));
  }

  Promise.all(calls).then(responses => Promise.all(responses.map(r => r.json()))).then(postsGrouped => {
    const apiPosts = postsGrouped.reduce((acc, group) => [...acc, ...group], []);
    localStorage.setItem(localStoragePostsKey, JSON.stringify(apiPosts));
    set(apiPosts);
  });
  return () => {};
});
exports.posts = posts;
},{"svelte/store":"../node_modules/svelte/store/index.mjs"}],"pages/Home.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelteSpaRouter = require("svelte-spa-router");

var _SiteName = _interopRequireDefault(require("~/components/SiteName.svelte"));

var _SearchInput = _interopRequireDefault(require("~/components/SearchInput.svelte"));

var _store = require("~/store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* pages/Home.svelte generated by Svelte v3.12.1 */
const file = "pages/Home.svelte";

function create_fragment(ctx) {
  var div2,
      t0,
      div1,
      small,
      t1,
      t2_value = ctx.postsCount || '...' + "",
      t2,
      t3,
      t4,
      updating_searchText,
      t5,
      div0,
      button0,
      t7,
      button1,
      current,
      dispose;
  var sitename = new _SiteName.default({
    $$inline: true
  });

  function searchinput_searchText_binding(value) {
    ctx.searchinput_searchText_binding.call(null, value);
    updating_searchText = true;
    (0, _internal.add_flush_callback)(() => updating_searchText = false);
  }

  let searchinput_props = {};

  if (ctx.searchText !== void 0) {
    searchinput_props.searchText = ctx.searchText;
  }

  var searchinput = new _SearchInput.default({
    props: searchinput_props,
    $$inline: true
  });

  _internal.binding_callbacks.push(() => (0, _internal.bind)(searchinput, 'searchText', searchinput_searchText_binding));

  searchinput.$on("doSearch", ctx.doSearch);
  const block = {
    c: function create() {
      div2 = (0, _internal.element)("div");
      sitename.$$.fragment.c();
      t0 = (0, _internal.space)();
      div1 = (0, _internal.element)("div");
      small = (0, _internal.element)("small");
      t1 = (0, _internal.text)("Search across ");
      t2 = (0, _internal.text)(t2_value);
      t3 = (0, _internal.text)(" articles from HackerNews");
      t4 = (0, _internal.space)();
      searchinput.$$.fragment.c();
      t5 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");
      button0 = (0, _internal.element)("button");
      button0.textContent = "Show results";
      t7 = (0, _internal.space)();
      button1 = (0, _internal.element)("button");
      button1.textContent = "Pick for me";
      (0, _internal.add_location)(small, file, 20, 4, 428);
      (0, _internal.add_location)(button0, file, 24, 6, 606);
      (0, _internal.add_location)(button1, file, 25, 6, 670);
      (0, _internal.attr_dev)(div0, "class", "btns");
      (0, _internal.add_location)(div0, file, 23, 4, 581);
      (0, _internal.attr_dev)(div1, "class", "searchWrap");
      (0, _internal.add_location)(div1, file, 19, 2, 399);
      (0, _internal.attr_dev)(div2, "class", "searchHome");
      (0, _internal.add_location)(div2, file, 15, 0, 355);
      dispose = (0, _internal.listen_dev)(button0, "click", ctx.click_handler);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div2, anchor);
      (0, _internal.mount_component)(sitename, div2, null);
      (0, _internal.append_dev)(div2, t0);
      (0, _internal.append_dev)(div2, div1);
      (0, _internal.append_dev)(div1, small);
      (0, _internal.append_dev)(small, t1);
      (0, _internal.append_dev)(small, t2);
      (0, _internal.append_dev)(small, t3);
      (0, _internal.append_dev)(div1, t4);
      (0, _internal.mount_component)(searchinput, div1, null);
      (0, _internal.append_dev)(div1, t5);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.append_dev)(div0, button0);
      (0, _internal.append_dev)(div0, t7);
      (0, _internal.append_dev)(div0, button1);
      current = true;
    },
    p: function update(changed, ctx) {
      if ((!current || changed.postsCount) && t2_value !== (t2_value = ctx.postsCount || '...' + "")) {
        (0, _internal.set_data_dev)(t2, t2_value);
      }

      var searchinput_changes = {};

      if (!updating_searchText && changed.searchText) {
        searchinput_changes.searchText = ctx.searchText;
      }

      searchinput.$set(searchinput_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(sitename.$$.fragment, local);
      (0, _internal.transition_in)(searchinput.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(sitename.$$.fragment, local);
      (0, _internal.transition_out)(searchinput.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(div2);
      }

      (0, _internal.destroy_component)(sitename);
      (0, _internal.destroy_component)(searchinput);
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $posts;
  (0, _internal.validate_store)(_store.posts, 'posts');
  (0, _internal.component_subscribe)($$self, _store.posts, $$value => {
    $posts = $$value;
    $$invalidate('$posts', $posts);
  });
  let searchText = '';

  const doSearch = () => {
    (0, _svelteSpaRouter.push)('/results/' + searchText);
  };

  function searchinput_searchText_binding(value) {
    searchText = value;
    $$invalidate('searchText', searchText);
  }

  const click_handler = () => doSearch();

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {
    if ('searchText' in $$props) $$invalidate('searchText', searchText = $$props.searchText);
    if ('postsCount' in $$props) $$invalidate('postsCount', postsCount = $$props.postsCount);
    if ('$posts' in $$props) _store.posts.set($posts);
  };

  let postsCount;

  $$self.$$.update = ($$dirty = {
    $posts: 1
  }) => {
    if ($$dirty.$posts) {
      $$invalidate('postsCount', postsCount = $posts ? $posts.length : 0);
    }
  };

  return {
    searchText,
    doSearch,
    postsCount,
    searchinput_searchText_binding,
    click_handler
  };
}

class Home extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, []);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Home",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Home;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte-spa-router":"../node_modules/svelte-spa-router/Router.svelte","~/components/SiteName.svelte":"components/SiteName.svelte","~/components/SearchInput.svelte":"components/SearchInput.svelte","~/store":"store.js"}],"components/SvgComment.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

/* components/SvgComment.svelte generated by Svelte v3.12.1 */
const file = "components/SvgComment.svelte";

function create_fragment(ctx) {
  var svg, path;
  const block = {
    c: function create() {
      svg = (0, _internal.svg_element)("svg");
      path = (0, _internal.svg_element)("path");
      (0, _internal.attr_dev)(path, "d", "M918.78 31.966q-204 0-381.5 69.5t-282 187.5q-104.5 118-104.5 255 0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5q104.5-118\n    104.5-255t-104.5-255q-104.5-118-282-187.5t-381.5-69.5zm896 512q0 174-120 321.5t-326 233q-206 85.5-450 85.5-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15\n    0-27-10.5t-16-27.5v-1q-3-4-.5-12t2-10q-.5-2 4.5-9.5l6-9 7-8.5q7-8.5 8-9 7-8 31-34.5t34.5-38q10.5-11.5 31-39.5t32.5-51q12-23 27-59t26-76q-157-89-247.5-220t-90.5-281q0-174 120-321.5t326-233q206-85.5\n    450-85.5t450 85.5q206 85.5 326 233t120 321.5z");
      (0, _internal.attr_dev)(path, "fill", "currentColor");
      (0, _internal.add_location)(path, file, 1, 2, 70);
      (0, _internal.attr_dev)(svg, "xmlns", "http://www.w3.org/2000/svg");
      (0, _internal.attr_dev)(svg, "viewBox", "0 -256 1850 1850");
      (0, _internal.add_location)(svg, file, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, svg, anchor);
      (0, _internal.append_dev)(svg, path);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(svg);
      }
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

class SvgComment extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, null, create_fragment, _internal.safe_not_equal, []);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "SvgComment",
      options,
      id: create_fragment.name
    });
  }

}

var _default = SvgComment;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs"}],"components/SvgClock.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

/* components/SvgClock.svelte generated by Svelte v3.12.1 */
const file = "components/SvgClock.svelte";

function create_fragment(ctx) {
  var svg, path0, path1, path2, path3, path4, path5, path6, path7, path8, path9, path10;
  const block = {
    c: function create() {
      svg = (0, _internal.svg_element)("svg");
      path0 = (0, _internal.svg_element)("path");
      path1 = (0, _internal.svg_element)("path");
      path2 = (0, _internal.svg_element)("path");
      path3 = (0, _internal.svg_element)("path");
      path4 = (0, _internal.svg_element)("path");
      path5 = (0, _internal.svg_element)("path");
      path6 = (0, _internal.svg_element)("path");
      path7 = (0, _internal.svg_element)("path");
      path8 = (0, _internal.svg_element)("path");
      path9 = (0, _internal.svg_element)("path");
      path10 = (0, _internal.svg_element)("path");
      (0, _internal.attr_dev)(path0, "d", "M165.544 130.872c0 44.479-36.062 80.55-80.569 80.55-44.489 0-80.56-36.071-80.56-80.55 0-44.508 36.071-80.564 80.56-80.564 44.507 0 80.569 36.056 80.569 80.564z");
      (0, _internal.add_location)(path0, file, 1, 2, 87);
      (0, _internal.attr_dev)(path1, "fill", "#FFF");
      (0, _internal.attr_dev)(path1, "d", "M153.685 130.872c0 37.947-30.754 68.721-68.71 68.721-37.942 0-68.706-30.773-68.706-68.721 0-37.961 30.764-68.725 68.706-68.725 37.956-.001 68.71 30.763 68.71 68.725z");
      (0, _internal.add_location)(path1, file, 2, 2, 262);
      (0, _internal.attr_dev)(path2, "fill", "#E8586B");
      (0, _internal.attr_dev)(path2, "d", "M84.747 66.513v63.839L28.594 100.06v-.012C39.38 80.079 60.489 66.513 84.747 66.513z");
      (0, _internal.add_location)(path2, file, 3, 2, 455);
      (0, _internal.attr_dev)(path3, "d", "M101.566 29.9c0 9.151-7.426 16.587-16.592 16.587-9.156 0-16.578-7.436-16.578-16.587 0-9.171 7.421-16.587 16.578-16.587 9.167 0 16.592 7.416 16.592 16.587z");
      (0, _internal.add_location)(path3, file, 4, 2, 569);
      (0, _internal.attr_dev)(path4, "fill", "#FFF");
      (0, _internal.attr_dev)(path4, "d", "M97.581 29.9c0 6.945-5.638 12.597-12.606 12.597-6.95 0-12.607-5.652-12.607-12.597 0-6.969 5.657-12.617 12.607-12.617 6.968.001 12.606 5.648 12.606 12.617z");
      (0, _internal.add_location)(path4, file, 5, 2, 739);
      (0, _internal.attr_dev)(path5, "d", "M82.418 24.797h5.112v29.345h-5.112z");
      (0, _internal.add_location)(path5, file, 6, 2, 921);
      (0, _internal.attr_dev)(path6, "d", "M90.874 33.881c0 3.242-2.644 5.88-5.899 5.88-3.237 0-5.881-2.639-5.881-5.88v-5.273c0-3.256 2.644-5.891 5.881-5.891a5.894 5.894 0 015.899 5.891v5.273zm21.268 29.723l-4.627-1.652 9.487-26.633\n    4.645 1.653z");
      (0, _internal.add_location)(path6, file, 7, 2, 972);
      (0, _internal.attr_dev)(path7, "d", "M121.745 46.303a5.707 5.707 0 01-7.261 3.441 5.703 5.703 0 01-3.45-7.271l1.7-4.768a5.699 5.699 0 017.271-3.446 5.683 5.683 0 013.432 7.251l-1.692 4.793zM82.477 66.851h4.199v71.836h-4.199z");
      (0, _internal.add_location)(path7, file, 10, 2, 1198);
      (0, _internal.attr_dev)(path8, "d", "M82.477 66.521h4.199v14.502h-4.199zm51.419 61.59h14.502v4.18h-14.502zm-5.279-19.761l-1.876-3.742 13.113-6.614 1.885 3.737zM110.82 88.531l-3.733-1.919 6.687-12.952 3.733 1.929zm-89.857\n    39.648h14.493v4.189H20.963z");
      (0, _internal.add_location)(path8, file, 12, 2, 1405);
      (0, _internal.attr_dev)(path9, "d", "M87.142 143.411h-5.025l.417-76.963h4.199zM62.789 86.242l-3.743 1.891-6.6-13.132 3.733-1.876zm-19.815 17.807l-1.929 3.713-12.957-6.687 1.925-3.732zM82.681\n    179.258h4.209v14.521h-4.209zm-61.718-51.263h14.493v4.199H20.963zm19.786 23.94l1.89 3.723-13.127 6.638-1.89-3.742zm17.807 19.819l3.713 1.924-6.703 12.947-3.708-1.924z");
      (0, _internal.add_location)(path9, file, 15, 2, 1640);
      (0, _internal.attr_dev)(path10, "d", "M133.896 127.936h14.502v4.18h-14.502zm-51.264 51.399h4.199v14.503h-4.199zm23.931-5.287l3.742-1.885 6.619 13.122-3.733 1.895zm19.829-17.807l1.914-3.713 12.966 6.697-1.924 3.723zM80.309\n    130.328a4.452 4.452 0 014.452-4.452c2.439 0 4.423 1.993 4.423 4.452a4.42 4.42 0 01-4.423 4.423c-2.46-.001-4.452-1.974-4.452-4.423z");
      (0, _internal.add_location)(path10, file, 18, 2, 1983);
      (0, _internal.attr_dev)(svg, "version", "1.0");
      (0, _internal.attr_dev)(svg, "xmlns", "http://www.w3.org/2000/svg");
      (0, _internal.attr_dev)(svg, "viewBox", "0 0 165.544 211.421");
      (0, _internal.add_location)(svg, file, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, svg, anchor);
      (0, _internal.append_dev)(svg, path0);
      (0, _internal.append_dev)(svg, path1);
      (0, _internal.append_dev)(svg, path2);
      (0, _internal.append_dev)(svg, path3);
      (0, _internal.append_dev)(svg, path4);
      (0, _internal.append_dev)(svg, path5);
      (0, _internal.append_dev)(svg, path6);
      (0, _internal.append_dev)(svg, path7);
      (0, _internal.append_dev)(svg, path8);
      (0, _internal.append_dev)(svg, path9);
      (0, _internal.append_dev)(svg, path10);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(svg);
      }
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

class SvgClock extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, null, create_fragment, _internal.safe_not_equal, []);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "SvgClock",
      options,
      id: create_fragment.name
    });
  }

}

var _default = SvgClock;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs"}],"components/PostResult.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _SvgComment = _interopRequireDefault(require("~/components/SvgComment.svelte"));

var _SvgClock = _interopRequireDefault(require("~/components/SvgClock.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/PostResult.svelte generated by Svelte v3.12.1 */
const file = "components/PostResult.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = 'svelte-16y9t9c-style';
  style.textContent = ".post.svelte-16y9t9c{text-align:left;padding:20px}.post.svelte-16y9t9c h2.svelte-16y9t9c{margin:0;font-weight:normal;font-size:22px}.post.svelte-16y9t9c h2 small.svelte-16y9t9c{display:block;font-size:14px;color:#888}.post.svelte-16y9t9c .infos.svelte-16y9t9c{margin:0;display:flex}.post.svelte-16y9t9c .infos span.svelte-16y9t9c{flex:0 0 auto;display:flex;align-items:center;color:#444}.post.svelte-16y9t9c .infos span.svelte-16y9t9c svg{width:16px;margin-right:7px}.post .infos span+span.svelte-16y9t9c{margin-left:20px}\n";
  (0, _internal.append_dev)(document.head, style);
} // (48:0) {#if post}


function create_if_block(ctx) {
  var article,
      h2,
      small,
      t0_value = ctx.post.domain + "",
      t0,
      t1,
      a,
      t2_value = ctx.post.title + "",
      t2,
      a_href_value,
      t3,
      p,
      span0,
      t4,
      t5_value = ctx.post.user + "",
      t5,
      t6,
      span1,
      t7,
      t8_value = ctx.post.time_ago + "",
      t8,
      t9,
      span2,
      t10,
      t11_value = ctx.post.comments_count + "",
      t11,
      current;
  var svgclock = new _SvgClock.default({
    $$inline: true
  });
  var svgcomment = new _SvgComment.default({
    $$inline: true
  });
  const block = {
    c: function create() {
      article = (0, _internal.element)("article");
      h2 = (0, _internal.element)("h2");
      small = (0, _internal.element)("small");
      t0 = (0, _internal.text)(t0_value);
      t1 = (0, _internal.space)();
      a = (0, _internal.element)("a");
      t2 = (0, _internal.text)(t2_value);
      t3 = (0, _internal.space)();
      p = (0, _internal.element)("p");
      span0 = (0, _internal.element)("span");
      t4 = (0, _internal.text)("@ ");
      t5 = (0, _internal.text)(t5_value);
      t6 = (0, _internal.space)();
      span1 = (0, _internal.element)("span");
      svgclock.$$.fragment.c();
      t7 = (0, _internal.space)();
      t8 = (0, _internal.text)(t8_value);
      t9 = (0, _internal.space)();
      span2 = (0, _internal.element)("span");
      svgcomment.$$.fragment.c();
      t10 = (0, _internal.space)();
      t11 = (0, _internal.text)(t11_value);
      (0, _internal.attr_dev)(small, "class", "svelte-16y9t9c");
      (0, _internal.add_location)(small, file, 50, 6, 747);
      (0, _internal.attr_dev)(a, "href", a_href_value = ctx.post.url);
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.add_location)(a, file, 51, 6, 782);
      (0, _internal.attr_dev)(h2, "class", "svelte-16y9t9c");
      (0, _internal.add_location)(h2, file, 49, 4, 736);
      (0, _internal.attr_dev)(span0, "class", "user svelte-16y9t9c");
      (0, _internal.add_location)(span0, file, 54, 6, 872);
      (0, _internal.attr_dev)(span1, "class", "timeAgo svelte-16y9t9c");
      (0, _internal.add_location)(span1, file, 55, 6, 918);
      (0, _internal.attr_dev)(span2, "class", "commentsCount svelte-16y9t9c");
      (0, _internal.add_location)(span2, file, 56, 6, 982);
      (0, _internal.attr_dev)(p, "class", "infos svelte-16y9t9c");
      (0, _internal.add_location)(p, file, 53, 4, 848);
      (0, _internal.attr_dev)(article, "class", "post svelte-16y9t9c");
      (0, _internal.add_location)(article, file, 48, 2, 709);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, article, anchor);
      (0, _internal.append_dev)(article, h2);
      (0, _internal.append_dev)(h2, small);
      (0, _internal.append_dev)(small, t0);
      (0, _internal.append_dev)(h2, t1);
      (0, _internal.append_dev)(h2, a);
      (0, _internal.append_dev)(a, t2);
      (0, _internal.append_dev)(article, t3);
      (0, _internal.append_dev)(article, p);
      (0, _internal.append_dev)(p, span0);
      (0, _internal.append_dev)(span0, t4);
      (0, _internal.append_dev)(span0, t5);
      (0, _internal.append_dev)(p, t6);
      (0, _internal.append_dev)(p, span1);
      (0, _internal.mount_component)(svgclock, span1, null);
      (0, _internal.append_dev)(span1, t7);
      (0, _internal.append_dev)(span1, t8);
      (0, _internal.append_dev)(p, t9);
      (0, _internal.append_dev)(p, span2);
      (0, _internal.mount_component)(svgcomment, span2, null);
      (0, _internal.append_dev)(span2, t10);
      (0, _internal.append_dev)(span2, t11);
      current = true;
    },
    p: function update(changed, ctx) {
      if ((!current || changed.post) && t0_value !== (t0_value = ctx.post.domain + "")) {
        (0, _internal.set_data_dev)(t0, t0_value);
      }

      if ((!current || changed.post) && t2_value !== (t2_value = ctx.post.title + "")) {
        (0, _internal.set_data_dev)(t2, t2_value);
      }

      if ((!current || changed.post) && a_href_value !== (a_href_value = ctx.post.url)) {
        (0, _internal.attr_dev)(a, "href", a_href_value);
      }

      if ((!current || changed.post) && t5_value !== (t5_value = ctx.post.user + "")) {
        (0, _internal.set_data_dev)(t5, t5_value);
      }

      if ((!current || changed.post) && t8_value !== (t8_value = ctx.post.time_ago + "")) {
        (0, _internal.set_data_dev)(t8, t8_value);
      }

      if ((!current || changed.post) && t11_value !== (t11_value = ctx.post.comments_count + "")) {
        (0, _internal.set_data_dev)(t11, t11_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(svgclock.$$.fragment, local);
      (0, _internal.transition_in)(svgcomment.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(svgclock.$$.fragment, local);
      (0, _internal.transition_out)(svgcomment.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(article);
      }

      (0, _internal.destroy_component)(svgclock);
      (0, _internal.destroy_component)(svgcomment);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(48:0) {#if post}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  var if_block_anchor, current;
  var if_block = ctx.post && create_if_block(ctx);
  const block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = (0, _internal.empty)();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      (0, _internal.insert_dev)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      if (ctx.post) {
        if (if_block) {
          if_block.p(changed, ctx);
          (0, _internal.transition_in)(if_block, 1);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          (0, _internal.transition_in)(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_block, 1, 1, () => {
          if_block = null;
        });
        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);

      if (detaching) {
        (0, _internal.detach_dev)(if_block_anchor);
      }
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    post = null
  } = $$props;
  const writable_props = ['post'];
  Object.keys($$props).forEach(key => {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<PostResult> was created with unknown prop '${key}'`);
  });

  $$self.$set = $$props => {
    if ('post' in $$props) $$invalidate('post', post = $$props.post);
  };

  $$self.$capture_state = () => {
    return {
      post
    };
  };

  $$self.$inject_state = $$props => {
    if ('post' in $$props) $$invalidate('post', post = $$props.post);
  };

  return {
    post
  };
}

class PostResult extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-16y9t9c-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, ["post"]);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "PostResult",
      options,
      id: create_fragment.name
    });
  }

  get post() {
    throw new Error("<PostResult>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set post(value) {
    throw new Error("<PostResult>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = PostResult;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","~/components/SvgComment.svelte":"components/SvgComment.svelte","~/components/SvgClock.svelte":"components/SvgClock.svelte","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/SearchResults.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _SiteName = _interopRequireDefault(require("~/components/SiteName.svelte"));

var _SearchInput = _interopRequireDefault(require("~/components/SearchInput.svelte"));

var _PostResult = _interopRequireDefault(require("~/components/PostResult.svelte"));

var _store = require("~/store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* pages/SearchResults.svelte generated by Svelte v3.12.1 */
const file = "pages/SearchResults.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = 'svelte-17marat-style';
  style.textContent = ".searchResults.svelte-17marat{text-align:center;display:flex;flex-direction:column;height:100vh}.searchResults.svelte-17marat header.svelte-17marat{flex:0 0 auto;display:flex;align-items:center;padding:10px 15px;box-shadow:0 0 4px #bbb;background-color:#fff}.searchResults.svelte-17marat .siteName{font-size:30px;margin:0 30px 0 0;flex:0 0 auto}.searchResults.svelte-17marat .inputWrap{flex:1;max-width:400px}.searchResults.svelte-17marat .inputWrap input{font-size:18px !important;padding:.3em .5em !important}.searchResults.svelte-17marat .posts.svelte-17marat{flex:1 1 auto;overflow:auto;overscroll-behavior:contain}\n";
  (0, _internal.append_dev)(document.head, style);
}

function get_each_context(ctx, list, i) {
  const child_ctx = Object.create(ctx);
  child_ctx.post = list[i];
  return child_ctx;
} // (66:4) {#each _posts as post (post.id)}


function create_each_block(key_1, ctx) {
  var first, current;
  var postresult = new _PostResult.default({
    props: {
      post: ctx.post
    },
    $$inline: true
  });
  const block = {
    key: key_1,
    first: null,
    c: function create() {
      first = (0, _internal.empty)();
      postresult.$$.fragment.c();
      this.first = first;
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, first, anchor);
      (0, _internal.mount_component)(postresult, target, anchor);
      current = true;
    },
    p: function update(changed, ctx) {
      var postresult_changes = {};
      if (changed._posts) postresult_changes.post = ctx.post;
      postresult.$set(postresult_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(postresult.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(postresult.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(first);
      }

      (0, _internal.destroy_component)(postresult, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(66:4) {#each _posts as post (post.id)}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div1,
      header,
      t0,
      updating_searchText,
      t1,
      div0,
      each_blocks = [],
      each_1_lookup = new Map(),
      current;
  var sitename = new _SiteName.default({
    $$inline: true
  });

  function searchinput_searchText_binding(value) {
    ctx.searchinput_searchText_binding.call(null, value);
    updating_searchText = true;
    (0, _internal.add_flush_callback)(() => updating_searchText = false);
  }

  let searchinput_props = {};

  if (ctx.searchText !== void 0) {
    searchinput_props.searchText = ctx.searchText;
  }

  var searchinput = new _SearchInput.default({
    props: searchinput_props,
    $$inline: true
  });

  _internal.binding_callbacks.push(() => (0, _internal.bind)(searchinput, 'searchText', searchinput_searchText_binding));

  searchinput.$on("doSearch", ctx.doSearch);
  let each_value = ctx._posts;

  const get_key = ctx => ctx.post.id;

  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  const block = {
    c: function create() {
      div1 = (0, _internal.element)("div");
      header = (0, _internal.element)("header");
      sitename.$$.fragment.c();
      t0 = (0, _internal.space)();
      searchinput.$$.fragment.c();
      t1 = (0, _internal.space)();
      div0 = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(header, "class", "svelte-17marat");
      (0, _internal.add_location)(header, file, 59, 2, 1345);
      (0, _internal.attr_dev)(div0, "class", "posts svelte-17marat");
      (0, _internal.add_location)(div0, file, 64, 2, 1458);
      (0, _internal.attr_dev)(div1, "class", "searchResults svelte-17marat");
      (0, _internal.add_location)(div1, file, 57, 0, 1314);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div1, anchor);
      (0, _internal.append_dev)(div1, header);
      (0, _internal.mount_component)(sitename, header, null);
      (0, _internal.append_dev)(header, t0);
      (0, _internal.mount_component)(searchinput, header, null);
      (0, _internal.append_dev)(div1, t1);
      (0, _internal.append_dev)(div1, div0);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }

      current = true;
    },
    p: function update(changed, ctx) {
      var searchinput_changes = {};

      if (!updating_searchText && changed.searchText) {
        searchinput_changes.searchText = ctx.searchText;
      }

      searchinput.$set(searchinput_changes);
      const each_value = ctx._posts;
      (0, _internal.group_outros)();
      each_blocks = (0, _internal.update_keyed_each)(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, div0, _internal.outro_and_destroy_block, create_each_block, null, get_each_context);
      (0, _internal.check_outros)();
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(sitename.$$.fragment, local);
      (0, _internal.transition_in)(searchinput.$$.fragment, local);

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(sitename.$$.fragment, local);
      (0, _internal.transition_out)(searchinput.$$.fragment, local);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(div1);
      }

      (0, _internal.destroy_component)(sitename);
      (0, _internal.destroy_component)(searchinput);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let $posts;
  (0, _internal.validate_store)(_store.posts, 'posts');
  (0, _internal.component_subscribe)($$self, _store.posts, $$value => {
    $posts = $$value;
    $$invalidate('$posts', $posts);
  });
  let {
    params = {}
  } = $$props;
  const {
    query
  } = params;
  let searchText = query || '';

  const doSearch = () => {
    /* nothing to do */
  };

  const writable_props = ['params'];
  Object.keys($$props).forEach(key => {
    if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<SearchResults> was created with unknown prop '${key}'`);
  });

  function searchinput_searchText_binding(value) {
    searchText = value;
    $$invalidate('searchText', searchText);
  }

  $$self.$set = $$props => {
    if ('params' in $$props) $$invalidate('params', params = $$props.params);
  };

  $$self.$capture_state = () => {
    return {
      params,
      searchText,
      searchRegex,
      _posts,
      $posts
    };
  };

  $$self.$inject_state = $$props => {
    if ('params' in $$props) $$invalidate('params', params = $$props.params);
    if ('searchText' in $$props) $$invalidate('searchText', searchText = $$props.searchText);
    if ('searchRegex' in $$props) $$invalidate('searchRegex', searchRegex = $$props.searchRegex);
    if ('_posts' in $$props) $$invalidate('_posts', _posts = $$props._posts);
    if ('$posts' in $$props) _store.posts.set($posts);
  };

  let searchRegex, _posts;

  $$self.$$.update = ($$dirty = {
    searchText: 1,
    $posts: 1,
    searchRegex: 1
  }) => {
    if ($$dirty.searchText) {
      $$invalidate('searchRegex', searchRegex = new RegExp(searchText, 'i'));
    }

    if ($$dirty.$posts || $$dirty.searchText || $$dirty.searchRegex) {
      $$invalidate('_posts', _posts = $posts.filter(post => {
        if (searchText.trim().length) {
          return searchRegex.test(post.title);
        }

        return true;
      }));
    }
  };

  return {
    params,
    searchText,
    doSearch,
    _posts,
    searchinput_searchText_binding
  };
}

class SearchResults extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-17marat-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, ["params"]);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "SearchResults",
      options,
      id: create_fragment.name
    });
  }

  get params() {
    throw new Error("<SearchResults>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set params(value) {
    throw new Error("<SearchResults>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = SearchResults;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","~/components/SiteName.svelte":"components/SiteName.svelte","~/components/SearchInput.svelte":"components/SearchInput.svelte","~/components/PostResult.svelte":"components/PostResult.svelte","~/store":"store.js","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"routes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Home = _interopRequireDefault(require("./pages/Home.svelte"));

var _SearchResults = _interopRequireDefault(require("./pages/SearchResults.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  '/': _Home.default,
  '/results/:query?': _SearchResults.default
};
exports.default = _default;
},{"./pages/Home.svelte":"pages/Home.svelte","./pages/SearchResults.svelte":"pages/SearchResults.svelte"}],"App.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelteSpaRouter = _interopRequireDefault(require("svelte-spa-router"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* App.svelte generated by Svelte v3.12.1 */
const file = "App.svelte";

function create_fragment(ctx) {
  var div, main, t0, footer, t1, sup, t3, current;
  var router = new _svelteSpaRouter.default({
    props: {
      routes: _routes.default
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      main = (0, _internal.element)("main");
      router.$$.fragment.c();
      t0 = (0, _internal.space)();
      footer = (0, _internal.element)("footer");
      t1 = (0, _internal.text)("Made by Alex Parra on Oct 19");
      sup = (0, _internal.element)("sup");
      sup.textContent = "th";
      t3 = (0, _internal.text)(", 2019");
      (0, _internal.add_location)(main, file, 7, 2, 120);
      (0, _internal.add_location)(sup, file, 10, 38, 199);
      (0, _internal.add_location)(footer, file, 10, 2, 163);
      (0, _internal.attr_dev)(div, "class", "appRoot");
      (0, _internal.add_location)(div, file, 5, 0, 95);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, main);
      (0, _internal.mount_component)(router, main, null);
      (0, _internal.append_dev)(div, t0);
      (0, _internal.append_dev)(div, footer);
      (0, _internal.append_dev)(footer, t1);
      (0, _internal.append_dev)(footer, sup);
      (0, _internal.append_dev)(footer, t3);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(router.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(router.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        (0, _internal.detach_dev)(div);
      }

      (0, _internal.destroy_component)(router);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

class App extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, null, create_fragment, _internal.safe_not_equal, []);
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment.name
    });
  }

}

var _default = App;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte-spa-router":"../node_modules/svelte-spa-router/Router.svelte","./routes":"routes.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./App.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _App.default({
  target: document.body,
  props: {
    name: 'Svelte'
  }
});
var _default = app;
exports.default = _default;
},{"./App.svelte":"App.svelte"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53591" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map