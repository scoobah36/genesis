import g from 'genesis-object'
import Time from './Time'

export default g(function(){
    var self = {
        day:0,
        month:0,
        year:1971,

        format: function(){
            return self.day + "/" + self.month + "/" + self.year;
        }
    }
    return self
}, [Time])