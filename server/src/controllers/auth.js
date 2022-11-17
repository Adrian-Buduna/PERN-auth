const db = require("../db");
const { hash } = require("bcryptjs");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query(
      "SELECT user_id, email, user_name FROM users"
    );
    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.register = async (req, res) => {
  const { email, password, user_name } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    await db.query(
      "insert into users(email, password, user_name) values($1 , $2 , $3)",
      [email, hashedPassword, user_name]
    );

    return res.status(201).json({
      success: true,
      message: "The registration was successfull",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
