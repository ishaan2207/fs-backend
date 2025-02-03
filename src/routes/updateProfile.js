const express = require('express');
const router = express.Router();
const { updateProfileAbout, updateProfileInfo, updateProfileExperience,
    updateProfileEducation, updateProfileSkill } = require('../controllers/updateProfileController');

router.put('/:id', updateProfileInfo);
router.put('/about/:id', updateProfileAbout);
router.put('/experience/:id', updateProfileExperience);
router.put('/education/:id', updateProfileEducation);
router.put('/skill/:_id', updateProfileSkill);

module.exports = router;