import {rows} from "../../../data/products";
export default function handler(req, res) {
    let id=req.query.id;
    let row=rows.find(i=>i.id==id)
    if(!row){
        res.status(404).json({message:'record is not defined'})
    }
    res.status(200).json(row);
}
