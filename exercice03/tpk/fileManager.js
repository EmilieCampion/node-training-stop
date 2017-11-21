// // -----type1 -----

// const fs = require('fs');

// // fs.readFile('./list.txt',(err,data)=>{
// //     if(err){
// //         console.log(err.message);
// //     }
// //     fs.writeFile( './list.txt', `${data}\n${arg}`, (err)=>{
// //         if(err) console.log(err.message)
// //         console.log('File saved');
// //     })
// // // console.log(data.toString());

// // });

// module.exports.saveToFile=(value)=>{
    
//     fs.appendFile('./list.txt', `\n${value}`, (err)=>{
//         if (err) console.log(err);
//         console.log('File saved !!!');
//     })
// };

// -----Type 2-----
const fs = require('fs');
let values = [];
module.exports = {
    init: (file, action, value) => {
        fs.readFile(file, (err, data) => {
            values = (data.toString().split('\n'));
            (action === "add") ? add(value,file) : remove(value,file)
        })
    }
}
const add = (value,file) => {
    if (checkValueinList(value)) {
        console.log('Value all ready in my list');
    } else {
        values.push(value);
    }
    save(file);
}
const remove = (value,file)=> {
    if (checkValueinList(value)) {
        values.splice(values.findIndex(item=>item === value),1)
    } else {
        console.log('Value is not in my list');
    }
    save(file);
}
const checkValueinList = (value)=> {
    return (values.filter((item) => {
        return item === value
    }).length === 1) ? true : false;
}
const save = (file)=>{
    let strTmp = values.reduce((prev,next)=>{
        return `${prev}\n${next}`
    });
    fs.writeFile(file,strTmp,(err)=>{
        if(err) console.log(err)
        console.log('file saved');
    });
}