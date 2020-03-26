const {
    serviceAddAnggota,
    serviceGetAnggota,
    serviceUpdateAnggota,
    serviceDeleteAnggota
} = require("./anggotaService")

module.exports = {
    controllerGetAnggota:(req,res)=>{
        serviceGetAnggota((err,result)=>{
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success : 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                result
            })
        })
    }
    ,
    controllerAddAnggota: (req, res)=>{
        const body = req.body;
        serviceAddAnggota(body, (err, results)=>{
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success : 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                body
            })
        })
    },
    controllerUpdateAnggota: (req,res) =>{
        const body = req.body
        const param = req.params
        const data = {
            nm_anggota  : body.nm_anggota,
            alamat      : body.alamat,
            tlpn        : body.tlpn,
            kd_anggota  : param
        }
        serviceUpdateAnggota(body, (err, results) =>{
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message:"update failed"
                })
            }else{
                return res.json({
                    success: 1,
                    message: "update berhasil",
                    body
                })
            }
        })
    },
    controllerDeleteAnggota: (req, res) =>{
        const data = req.body

        serviceDeleteAnggota(data, (err, results)=>{
            if (err) {
                console.log(err)
                return res.json({
                    message: "Delete Anggota Failed"
                })
            } else {
                res.json({
                    message: "Data berhasil dihapus"
                })
            }
        })
    }
}

