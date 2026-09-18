export const savePreferences = (req, res) => {
  const {
    profession,
    interests,
    voice,
    briefLength,
  } = req.body

  if (
    !profession ||
    !Array.isArray(interests) ||
    interests.length === 0 ||
    !voice ||
    !briefLength
  ) {
    return res.status(400).json({
      success: false,
      message: 'All preferences are required',
    })
  }

  const preferences = {
    profession,
    interests,
    voice,
    briefLength,
  }

  return res.status(200).json({
    success: true,
    message: 'Preferences saved successfully',
    data: {
      preferences,
    },
  })
}