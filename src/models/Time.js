import g from 'genesis-object'

export default g(function(){
    var self = {
        min:"23",
        sec:48,

        format: function(){
            return self.min + ":" + self.sec
        }
    }
    return self
})