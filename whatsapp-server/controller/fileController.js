import dotenv from 'dotenv'
dotenv.config();

const URL = process.env.URL;

export const uploadFile = (req , res) =>{
    if(!req.file){
        return res.status(404).send("File Not Found :(");
    }

    console.log(`Controller-${req.file}`);

    const fileUrl  = `${URL}/file/${req.file.filename}`;

    return res.status(200).send(fileUrl);
  
} 