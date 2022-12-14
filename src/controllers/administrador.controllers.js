import { pool } from '../db.js'

export const getAdministrador = async (req, res)=> {
    try {
        const [ rows ] = await pool.query('SELECT email, password FROM users')
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}