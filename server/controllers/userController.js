const ApiError = require('../error/ApiError')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
  return   jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role}  = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Wrong email or password. Please try again'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User already exists. Please create another name'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where:{email}})
        if (!user) {
            return next(ApiError.internal("User is not found"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password. Please try again'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
           return next((ApiError.badRequest('ID is not set')))
        }
        res.json(id)
    }
}

module.exports = new UserController()