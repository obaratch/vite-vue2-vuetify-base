import { isFunction } from "./LangUtils";

type CallbackFn = ({}) => void;
type Callable = CallbackFn | { callback: CallbackFn };

export class Store<T extends {}> {
  initialValues: T = {} as T;
  opts = {};
  state: T = {} as T;
  listeners: Callable[] = [];
  lastUpdated: Number;

  constructor(initialValues: T = {} as T, options?) {
    this.initialValues = initialValues;
    this.opts = {
      ...this.opts,
      ...options,
    };
    this.init();
  }

  init(vals?) {
    this.state = {
      ...this.initialValues,
      ...vals,
    };
    this.listeners = [];
    this.touch();
  }

  touch() {
    this.lastUpdated = Date.now();
  }

  subscribe(func: () => {}) {
    this.listeners.push(func);
  }

  unsubscribe(func: () => {}) {
    this.listeners = this.listeners.filter((f) => f != func);
  }

  async update(vals) {
    const prev = { ...this.state };
    const next = { ...prev, ...vals };
    this.state = next;
    this.touch();
    this.emit();
  }

  async emit(): Promise<void> {
    this.listeners.forEach((listener) => {
      if (isFunction(listener)) {
        listener(this.state);
        return;
      } else if (listener.callback && isFunction(listener.callback)) {
        // js obj with a callback function
        listener.callback(this.state);
        return;
      } else {
        throw TypeError("Unexpected listener type");
      }
    });
  }
}
