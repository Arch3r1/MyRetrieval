var express = require('express');
var router = express.Router();
var data = require('../database/db');
const Sequelize = require('sequelize');

var user = require('../controller/user');

data.sequelize.authenticate().then(() => {
    console.log('data.db Connected successfully.');   
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/**
 * @swagger
 * definition:
 *   userinfo:
 *     properties:
 *       username:
 *         type: string
 *       mobile_phone:
 *         type: string
 *       email:
 *         type: string
 *       birthday:
 *         type: string
 *       sex:
 *         type: integer
 *       status:
 *         type: integer
 *       role:
 *         type: integer
 *       scope:
 *         type: string
 *       grade:
 *         type: string
 *       course:
 *         type: string
 *       created_at:
 *         type: datetime
 *       updated_at:
 *         type: datetime
 *   updatepwd:
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       newpassword:
 *         type: string
 *   updateUserinfo:
 *     properties:
 *       username:
 *         type: string
 *       mobile_phone:
 *         type: string
 *       email:
 *         type: string
 *       birthday:
 *         type: string
 *       sex:
 *         type: integer
 *       scope:
 *         type: string
 *       grade:
 *         type: string
 *       course:
 *         type: string
 *       created_at:
 *         type: datetime
 *       updated_at:
 *         type: datetime
 *
 */
/**
 * @swagger
 * /user/login_v1_1:
 *   get:
 *     tags:
 *       - user-v1.1
 *     description: User login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: username
 *         in: query
 *         required: true
 *         type: string
 *       - name: password
 *         description: password
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully
 *         schema:
 *           $ref: '#/definitions/userinfo'
 */
router.get('/user/login_v1_1',user.login_v1_1);
/**
 * @swagger
 * /user/getUserInfo_v1_1:
 *   get:
 *     tags:
 *       - user-v1.1
 *     description: get user information
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: uid
 *         description: uid
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully
 *         schema:
 *           $ref: '#/definitions/userinfo'
 */
router.get('/user/getUserInfo_v1_1',user.getUserInfo_v1_1);
/**
 * @swagger
 * /user/updateUserInfo_v1_1:
 *   put:
 *     tags:
 *       - user-v1.1
 *     description: update user information
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_info
 *         description: user_info object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/updateUserinfo'
 *     responses:
 *       200:
 *         description: Successfully
 *
 */
router.put('/user/updateUserInfo_v1_1',user.updateUserInfo_v1_1);
/**
 * @swagger
 * /user/updateUserPassword_v1_1:
 *   put:
 *     tags:
 *       - user-v1.1
 *     description: update user password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_pwd
 *         description: user_pwd object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/updatepwd'
 *     responses:
 *       200:
 *         description: Successfully
 *
 */
router.put('/user/updateUserPassword_v1_1',user.updateUserPassword_v1_1);
module.exports = router;