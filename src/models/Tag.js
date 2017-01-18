import g from '../Genesis'
import DateTime from './Date'
import SubTag from './SubTag'

export default g("Tag", function(){
    var self = {
        tagish:"stuff",
        likeat:true,
        date: DateTime,
        subs: [SubTag],

        yo: function(){
            return self.tagish + self.likeat
        }
    }
    return self
})