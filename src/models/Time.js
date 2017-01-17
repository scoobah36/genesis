import g from '../Genesis'

export default g("Time", function(){
    var self = {
        min:"23",
        sec:48,

        format: function(){
            return self.min + ":" + self.sec
        }
    }
    return self
})