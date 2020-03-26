const {
    controllerAddPetugas,
    controllerUpdatePetugas,
    controllerGetPetugas,
    controllerDeletePetugas

} = require("./petugasController");

const router = require("express").Router();

router.post("/", controllerAddPetugas);
router.get('/', controllerGetPetugas)
router.patch("/:id", controllerUpdatePetugas);
router.delete("/", controllerDeletePetugas);

module.exports = router;