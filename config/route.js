const express = require('express')
const router = express.Router()
const notesCntrlr = require('../app/controller/notesCntrlr')
const userCntrlr = require('../app/controller/userCntrlr')
const authentication = require('../app/middleware/authentication')

router.post('/user/register',userCntrlr.register)
router.post('/user/login',userCntrlr.login)
router.get('/user/account',authentication,userCntrlr.account)
router.delete('/user/logout',authentication,userCntrlr.logout)

router.get('/user/notes',authentication, notesCntrlr.list)
router.post('/user/notes', authentication, notesCntrlr.create)
router.get('/user/notes/:id', authentication, notesCntrlr.show)
router.put('/user/notes/:id', authentication, notesCntrlr.update)
router.delete('/user/notes/:id', authentication, notesCntrlr.destroy)

module.exports = router