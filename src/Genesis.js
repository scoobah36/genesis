
export default function(objectName, objectDefinition, extensions) {
    
    var genesis = {
        __name__: objectName,
        __def__: objectDefinition,
        _isGenesis: true,

        create: function (data, suppressInit) {

            var walk = function(wobj, wdata){
                for (var key in wobj) {
                    // skip loop if the property is from prototype
                    if (!wobj.hasOwnProperty(key) || _.isFunction(attr)) continue;

                    var attr = wobj[key];
                    var val = wdata[key];
                    if(_.isObject(attr)){
                        if(attr._isGenesis){
                            wobj[key] = attr.create(val || {});
                        }else {
                            wobj[key] = walk(attr, val || {});
                        }
                    }else if(val != undefined) {
                        wobj[key] = val;
                    }
                }
                return wobj;
            }

            var data = data || {};

            // create obj
            var obj;
            if (_.isFunction(genesis.__def__)) {
                obj = walk(genesis.__def__(), data);
            } else {
                throw new Error('objectDefinition must be a function');
            }

            if (!obj) {
                throw new Error('could not create property', genesis.__name__, genesis.__def__, data);
            }

            _.extend(obj, {
                __uid__: Math.random(),
                __name__: objectName
            });

            // call obj.init
            if (_.isFunction(obj.init) && !suppressInit) {
                obj.init.apply(obj, arguments);
            }

            return obj;
        }
    };

    var exts = [];
    if(_.isArray(extensions)){
        extensions.forEach(function(ext){
            if(ext._isGenesis && _.isFunction(ext.__def__)){
                exts.push(ext.__def__);
            }
        });
    }
    exts.push(objectDefinition);

    genesis.__def__ = function(){
        return _.extend.apply(this, _.map(exts, function(e){
            return e();
        }));
    }

    return genesis;
}
