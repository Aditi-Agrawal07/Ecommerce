import multer from "multer";

var uploader = multer({
    storage: multer.diskStorage({}),
    limits: {fileSize: 5000000}
})

export {uploader}