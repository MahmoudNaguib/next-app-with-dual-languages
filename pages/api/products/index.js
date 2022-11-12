import {rows} from "../../../data/products";
export default function handler(req, res) {
    res.status(200).json(rows);
}
