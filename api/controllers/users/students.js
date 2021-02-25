const mongoose = require('mongoose');
const HttpStatus = require('http-status-codes');


const StudentModel = mongoose.model('Student');


module.exports = {
    getStudents, 
    createStudent, 
    updateStudent, 
    deleteStudent
}

async function getStudents(req, res) {
    let conditions = {};
    let result = await StudentModel.find(conditions, null, {})

    let total = await StudentModel.countDocuments(conditions);
    // console.log('data', result)
    return res.json({
        code:200,
        data: result,
        total: total
    });

}

async function createStudent(req, res) {
    let inputData = req.body;

    let record = new StudentModel(inputData);
    await record.save();

    return res.json({message: 'Student created successfully', data: record, code: 200});
}

async function updateStudent(req, res) {
    let id = req.params.id;
    const data = req.body;
    let conditions = {
        _id: id
    }

    let info = await StudentModel.findOneAndUpdate(conditions, data);

    if (info) {
        return res.json({message: 'Students updated successfully', code:200});
    }

    return res.json({message: 'Classified not found', code: 404});
}

async function deleteStudent(req, res){
    let id = req.params.id;

    let userInfo = await StudentModel.findByIdAndRemove(id);
    if(!userInfo){
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({message: 'User not found'});
    }
    return res.status(HttpStatus.ACCEPTED).json({message: 'User delete successfully'});
}