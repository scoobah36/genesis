import g from '../Genesis'
import Time from './Time'

export default g("Date", function(){
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