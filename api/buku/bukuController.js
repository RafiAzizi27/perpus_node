const {
    serviceAddBuku,
    serviceGetBuku,
    serviceUpdateBuku,
    serviceDeleteBuku
} = require("./BukuService")

module.exports = {
    controllerGetBuku:(req,res)=>{
        serviceGetBuku((err,result)=>{
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
    controllerAddBuku: (req, res)=>{
        const body = req.body;
        serviceAddBuku(body, (err, results)=>{
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
    controllerUpdateBuku: (req,res) =>{
        const body = req.body
        const param = req.params
        const data = {
            nm_buku     : body.nm_buku,
            pengarang   : body.pengarang,
            penerbit    : body.penerbit,
            tarif       : body.tarif,
            durasi      : body.durasi,
            kd_buku     : param
        }
        serviceUpdateBuku(body, (err, results) =>{
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
    controllerDeleteBuku: (req, res) =>{
        const data = req.body

        serviceDeleteBuku(data, (err, results)=>{
            if (err) {
                console.log(err)
                return res.json({
                    message: "Delete Buku Failed"
                })
            } else {
                res.json({
                    message: "Data berhasil dihapus"
                })
            }
        })
    }
}

