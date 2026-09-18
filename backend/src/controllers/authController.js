export const login = (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required',
    })
  }

  const user = {
    id: 1,
    name,
    email,
  }

  return res.status(200).json({
    success: true,
    message: 'Login successful',
    data: {
      user,
    },
  })
}