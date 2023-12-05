import multer from "multer";
import dotenv from 'dotenv'
import {GridFsStorage} from 'multer-gridfs-storage';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url : `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.k0bmskc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        console.log('file:', file); // Add this line
        const match = ["image/png", "image/jpeg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }

    
});


export default multer({storage});