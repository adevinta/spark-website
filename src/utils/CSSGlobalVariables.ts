/*
 *
 * @Package: css-global-variables (CSSGlobalVariables)
 * @Url: https://github.com/colxi/css-global-variables/
 * @Author: colxi
 * @Email: colxi.kl@gmail.com
 * @Date:  2018-03-18
 * @License: MIT
 *
 */

export class CSSGlobalVariables {
  // private ID counter
  #identifierCounter = 0

  /**
   *
   * new CSSGlobalVariables() : Returns a Proxy containing all the found CSS global variables.
   *                            Accepts a Configuration Object, with the following properties:
   *  filter     : [String],
   *  autoprefix : [Boolean],
   *  normalize  : [Function],
   *  callback   : [Function]
   *
   **/
  constructor({
    filter,
    autoprefix,
    normalize,
    callback = () => {},
  }: {
    filter?: string | undefined
    autoprefix?: boolean | undefined
    normalize?: ((name: string) => string) | undefined
    callback: (customProperties: { [key: string]: string }) => void
  }) {
    // Usage of 'new' keyword is mandatory
    if (!new.target)
      throw new Error('Calling CSSGlobalVariables constructor without "new" is forbidden')

    if (filter) {
      try {
        document.querySelectorAll(filter)
      } catch (e) {
        throw new Error(`Provided "filter" is an invalid selector ${filter}`)
      }
    }

    // Generate and assign instance ID
    this.#identifierCounter++
    const id = this.#identifierCounter

    // __varsCache__ : Contains (internally) the CSS variables and values.
    const __varsCache__: { [key: string]: string } = {}

    /**
     *
     * varsCacheProxy (Proxy Object) : Public Proxy object containing the CSS
     * variables and their values. Provides bound methods for live getting and
     * setting of the variables and values.
     *
     * @type {Proxy Object}
     *
     */
    const varsCacheProxy = new Proxy(__varsCache__, {
      get: function (target, name) {
        // check if there is any new CSS declarations to be considered
        // before returning any
        //updateVarsCache();
        name = normalizeVariableName(name)
        return Reflect.get(target, name)
      },
      set: function (target, name, value) {
        //updateVarsCache();
        name = normalizeVariableName(name)
        value = String(value)
        // set the variable value
        document.documentElement.style.setProperty(name, value)
        // update the cache object
        const response = Reflect.set(target, name, value)
        debugger
        callback(Object.assign({}, target))
        return response
      },
      deleteProperty: function () {
        /* not allowed */
        //updateVarsCache();
        return false
      },
      has: function (target, name) {
        //updateVarsCache();
        name = normalizeVariableName(name)
        return Reflect.has(target, name)
      },
      defineProperty: function (target, name, attr) {
        //
        // it only allows to set the value
        //
        //updateVarsCache();
        name = normalizeVariableName(name)
        if (typeof attr === 'object' && attr.hasOwnProperty('value')) {
          let value = String(attr.value)
          // set the CSS variable value
          document.documentElement.style.setProperty(name, value)
          // update the cache
          Reflect.set(target, name, value)
        }
        return target
      },
      ownKeys: function (target) {
        //updateVarsCache();
        return Reflect.ownKeys(target)
      },
      getOwnPropertyDescriptor: function (target, name) {
        //updateVarsCache();
        name = normalizeVariableName(name)
        return Reflect.getOwnPropertyDescriptor(target, name)
      },
    })

    /**
     *
     * normalizeVariableName()  Forces name to be a String, and attach the
     * mandatory '--' prefix when autoprefixer is Enabled
     *
     * @param  {[String]} name  Name of thw requested variable
     *
     * @return {[String]}
     *
     */
    function normalizeVariableName(name = '') {
      name = String(name)
      // if normalize was provided execute it
      if (normalize) name = normalize(name)

      // If CSS variable name does not start with '--', prefix it, when autoprefix=true,
      // or trigger an Error when not.
      if (name.substring(0, 2) !== '--') {
        if (autoprefix) name = '--' + name
        else
          throw new Error('Invalid CSS Variable name. Name must start with "--" (autoprefix=false)')
      }

      return name
    }

    /**
     *
     * updateVarsCache() : Updates the variables and values cache object. Inspects
     * STYLE elements and attached stylesheets, ignoring those that have been
     * previously checked. Finally, checks the inline CSS variables declarations.
     * Analyzed Elements will be Flagged with an HTML attribute
     *
     * @return {[boolean]} Returns true
     *
     */
    function updateVarsCache() {
      // iterate all document stylesheets
      Array.from(document.styleSheets).forEach(_styleSheet => {
        // if element has the ignore directive, ignore it and continue
        if (_styleSheet.ownerNode.getAttribute('css-global-vars-ignore')) return

        // if filters have been provided to constructor...
        if (filter) {
          // get all elements that match the filter...
          let elements = document.querySelectorAll(filter)
          let isMember = false
          // iterate all selector resulting collection
          for (let i in Object.keys(elements)) {
            // if current element matches the current stylesheet,
            // set flag to true and finish iteration
            if (elements[i] === _styleSheet.ownerNode) {
              isMember = true
              break
            }
          }
          // if any filtered element matched the current stylesheet abort.
          if (!isMember) return false
        }

        let abort = false
        try {
          _styleSheet.rules || _styleSheet.cssRules
        } catch (e) {
          if (!_styleSheet.ownerNode.hasAttribute('css-global-vars-ignore')) {
            _styleSheet.ownerNode.setAttribute('css-global-vars-ignore', true)
            console.warn(
              'Cross Origin Policy restrictions are blocking the access to the CSS rules of a remote stylesheet. The affected stylesheet is going to be ignored by CSSGlobalVariables. Check the documentation for instructions to prevent this issue.',
            )
          } else {
            console.warn('Unexpected error reading CSS properties.')
          }
          abort = true
        }
        if (abort) return

        // if Style element has been previously analyzed ignore it;
        // if not, mark element as analyzed to prevent future analysis
        let ids = _styleSheet.ownerNode.getAttribute('css-global-vars-id')

        if (String(ids).split(',').includes(String(id))) return
        else {
          // not cached yet!
          let value = _styleSheet.ownerNode.getAttribute('css-global-vars-id')
          // check if is null or empty (crossbrowser solution),
          // and attach the new instance id
          if (value === null || value === '') value = id
          else value += ',' + id
          // set the new value to the object
          _styleSheet.ownerNode.setAttribute('css-global-vars-id', value)
        }

        // iterate each CSS rule...
        Array.from(_styleSheet.rules || _styleSheet.cssRules).forEach(cssRule => {
          // select only the :root entries
          if (cssRule.selectorText === ':root') {
            let css = cssRule.cssText.split('{')
            css = css[1].replace('}', '').split(';')
            // iterate each :root CSS property
            for (let i = 0; i < css.length; i++) {
              let prop = css[i].split(':')
              // if is a CSS variable property, insert in the cache
              if (prop.length === 2 && prop[0].indexOf('--') === 1) {
                __varsCache__[prop[0].trim()] = prop[1].trim()
              }
            }
          }
        })
        console.log('updateVarsCache', __varsCache__)
      })
      // After collecting all the variables definitions, check their computed
      // values, consulting the :root element inline style definitions,
      // and assigning those values to the variables, in cache
      for (let p in __varsCache__) {
        if (__varsCache__.hasOwnProperty(p)) {
          __varsCache__[p] = window
            .getComputedStyle(document.documentElement, null)
            .getPropertyValue(p)
            .trim()
        }
      }
      callback(__varsCache__)
      // done !
      return true
    }

    // Create a mutation observer. When new styles are attached to the DOM (Style or Link element)
    // will perform an update of the document CSS variables
    const observer = new MutationObserver(mutations => {
      let update = false
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            if (
              mutation.addedNodes[i].tagName === 'STYLE' ||
              mutation.addedNodes[i].tagName === 'LINK'
            )
              update = true
          }
          for (let i = 0; i < mutation.removedNodes.length; i++) {
            if (
              mutation.removedNodes[i].tagName === 'STYLE' ||
              mutation.removedNodes[i].tagName === 'LINK'
            )
              update = true
          }
        }
      })
      if (update) {
        // update needs to be scheduled to guarantee that the new styles
        // are visible through the document.styleSheets API
        debugger
        setTimeout(updateVarsCache, 500)
      }
    })
    // Initialize the observer. Set the target and the config
    observer.observe(document.documentElement, {
      attributes: false,
      childList: true,
      characterData: true,
      subtree: true,
    })

    // analyze the document style elements to generate
    // the collection of CSS variables, and return the proxy object
    updateVarsCache()

    return varsCacheProxy
  }
}
