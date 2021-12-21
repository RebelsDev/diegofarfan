import fs from 'fs'
import path from 'path'

const filePath = path.resolve('.', 'public/Razones_por_las_que_tu_marca_necesita_fotografía_publicitaria-Diego_Farfan.pdf')
const imageBuffer = fs.readFileSync(filePath)

export default function (req, res) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Razones_por_las_que_tu_marca_necesita_fotografía_publicitaria-Diego_Farfan.pdf');
    res.send(imageBuffer)
}