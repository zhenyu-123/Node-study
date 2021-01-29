const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
//cat表（集合） string类型  
const Cat = mongoose.model('Cat', {
    name: String
});
// 存储一个对象
const kitty = new Cat({
    name: 'Zildjian'
});
kitty.save().then(() => console.log('meow'));