const express = require('express')
const router = express.Router()
const db = require('../db/database')




router.get('/', (req, res) => {
    db.find({}).exec((err, data) => {
        if (err) throw err;
        res.render('admin/admin', {
            title: 'Admin',
            postData: data
        });
    })
    // router.post('/',  (req, res)=>{    
    //     res.render('admin/admin',{title: 'Admin'})
    // })

    router.get('/add-post', (req, res) => {
        res.render('admin/post-upload', {
            title: 'Add Post'
        })
    })
})
router.post('/add-post', (req, res) => {
    const post = new db({
        title: req.body.title,
        sDesc: req.body.sDesc,
        lDesc: req.body.lDesc
    }).save()
    res.render('admin/post-upload', {
        title: 'Add Post'
    })
})

router.get('/edit/:id', (req, res) => {
    db.findById(req.params.id).exec((err, data) => {
        if (err) throw err;
        res.render('admin/edit', {
            title: 'Edit Post',
            postData: data
        })
    })
})
router.post('/update/', (req, res) => {
    const update = db.findByIdAndUpdate(req.body.id, {
        title: req.body.title,
        sDesc: req.body.sDesc,
        lDesc: req.body.lDesc
    })
    update.exec((err, data) => {
        res.redirect('/admin/');
    })
})
router.get('/delete/:id', (req, res)=>{
    db.findByIdAndDelete(req.params.id).exec((err, data) => {
        if (err) throw err;
        res.redirect('/admin/');
    })
})
module.exports = router;