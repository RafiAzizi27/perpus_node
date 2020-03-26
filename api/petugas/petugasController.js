const {
    serviceAddPetugas,
    serviceGetPetugas,
    serviceUpdatePetugas,
    serviceDeletePetugas

} = require("./petugasService")

module.exports = {
    controllerGetPetugas:(req,res)=>{
        serviceGetPetugas((err,result)=>{
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
    controllerAddPetugas: (req, res)=>{
        const data = req.body;
        console.log(data);
        serviceAddPetugas(data, (err, results)=>{
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success : 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                data
            })
        })
    },
    controllerUpdatePetugas: (req,res) =>{
        const body = req.body
        const param = req.params
        const data = {
            nm_petugas  : body.nm_petugas,
            jabatan     : body.jabatan,
            tlpn_petugas: body.tlpn_petugas,
            kd_petugas  : param
        }
        serviceUpdatePetugas(body, (err, results) =>{
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
    controllerDeletePetugas: (req, res) =>{
        const data = req.body

        serviceDeletePetugas(data, (err, results)=>{
            if(err){
                console.log(err)
                return
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "record not found"
                })
            }
            else{
                return res.json({
                    success: 1,
                    message: "Berhasil dihapus"
                })
            }
        })
    }
}

