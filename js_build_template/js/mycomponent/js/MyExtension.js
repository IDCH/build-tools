// START WRAPPER: The YUI.add wrapper is added by the build system, when you use YUI Builder to build your component from the raw source in this file
// YUI.add('myextension', function(Y) {

    /* Any frequently used shortcuts, strings and constants */
    var Lang = Y.Lang;

    /*
     * MyExtension initialization.
     *
     * Although this is a function constructor,
     * since the extension gets mixed into another class, it's 
     * invoked during the host classes initialization phase. 
     */
    function MyExtension(config) {
    
        /* 
         * HOST METHOD OVERLAP - Use the AOP infrastructure
         * to inject logic before/after methods on the main 
         * class.
         *
         * If the extension implements a method which 
         * exists on the main class, it will be replaced with 
         * the extensions version. 
         */

        Y.Do.after(this._doSomethingAfterMainClassMethod, this, "doSomething");
        Y.Do.before(this._doSomethingBeforeMainClassMethod, this, "doSomething");
    }

    /*
     * The attributes this extension provides
     */
    MyExtension.ATTRS = {

        attrA : {
            value: "A"                     // The default value for attrA, used if the user does not set a value during construction.

            /*
            , valueFn: "_defAttrAVal"      // Can be used as a substitute for "value", when you need access to "this" to set the default value.
             
            , setter: "_setAttrA"          // Used to normalize attrA's value while during set. Refers to a prototype method, to make customization easier
            , getter: "_getAttrA"          // Used to normalize attrA's value while during get. Refers to a prototype method, to make customization easier
            , validator: "_validateAttrA"  // Used to validate attrA's value before updating it. Refers to a prototype method, to make customization easier

            , readOnly: true               // Cannot be set by the end user. Can be set by the component developer at any time, using _set
            , writeOnce: true              // Can only be set once by the end user (usually during construction). Can be set by the component developer at any time, using _set
            
            , lazyAdd: false               // Add (configure) the attribute during initialization. 
            
                                           // You only need to set lazyAdd to false if your attribute is
                                           // setting some other state in your setter which needs to be set during initialization 
                                           // (not generally recommended - the setter should be used for normalization. 
                                           // You should use listeners to update alternate state). 

            , broadcast: 1                 // Whether the attribute change event should be broadcast or not.
            */
        }
        
        // ... attrB, attrC, attrD ... attribute configurations.
    };

    MyExtension.prototype = {
        myExtensionPublicMethod : function() {
            // A new public method that the extension adds to the built class.

            // When naming, you need to be aware of over-writing methods on the main class, since these
            // methods get augmented onto the built class
        },
        
        _myExtensionProtectedMethod : function() {
            // A new protected/private method the extension provides
            
            // When naming, you need to be aware of over-writing methods on the main class, since these
            // methods get augmented onto the built class
        },
    
        _doSomethingAfterMainClassMethod : function() {
            // Custom behavior
        },
        
        _doSomethingBeforeMainClassMethod : function() {
            // Custom behavior
        }
    };

    Y.namespace("MyApp").MyExtension = MyExtension;

// }, "3.1.0");
// END WRAPPER
