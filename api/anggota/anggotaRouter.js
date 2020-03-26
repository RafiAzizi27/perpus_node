const {
    controllerAddAnggota,
    controllerGetAnggota,
    controllerUpdateAnggota,
    controllerDeleteAnggota

} = require("./anggotaController");

const router = require("express").Router();

router.post("/", controllerAddAnggota);
router.get("/", controllerGetAnggota);
router.patch("/:id", controllerUpdateAnggota);
router.delete("/:id", controllerDeleteAnggota);
module.exports = router;