import g from '../Genesis'
import Time from './Time'

export default g("Tag", function(){
    var self = {
        tagish:"stuff",
        likeat:true,
        time: Time,

        yo: function(){
            return self.tagish + self.likeat
        }
    }
    return self
})