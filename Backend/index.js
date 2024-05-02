import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import 'dotenv/config'

const storage = multer.diskStorage({
destination: function (req, file, cb) {
    return cb(null, './uploads');
},
filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`)
},
});


const upload = multer({storage})

const app = express();

app.use('/uploads', express.static('uploads'));

app.use(express.urlencoded({extended:'false'}));
app.use(express.json());
app.use(cors());

// Define schema for registration
const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String
});

// Define schema for login
const LoginSchema = new mongoose.Schema({
    username: String,
    password: String
});

const BusinessSchema = new mongoose.Schema({
    businessName: String,
    businessDescription: String,
    businessCategory: String,
    businessLogo: String,
    businessAddress: String,
    businessPhoneNumber: String,
    businessEmailAddress: String,
    businessWebsite: String,
    mapEmbed: String,
    openingHour: String,
    closingHour: String,
    weekOffDays: String,
    taxID: String,
    numberOfEmployees: String,
    establishmentDate: String,
    bankAccountInfo: String,
    uploadedFiles: String,
    youtubeLinks: String,
    ownerFullName: String,
    ownerPhoneNumber: String,
    ownerEmailAddress: String,
    ownerAddress: String,
    servicesOffered: String,
    facebookURL: String,
    twitterURL: String,
    instagramURL: String,
    linkdinURL: String,
    githubURL: String,

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' ,  unique: true}
});

const BusinessModel = mongoose.model("Business", BusinessSchema);

// Define model for registration
const RegisterModel = mongoose.model("Client", RegisterSchema);

// Define model for login
const LoginModel = mongoose.model("Login", LoginSchema);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('database is connected');
    })
    .catch(error => {
        console.log(error);
    });

// Registration endpoint
app.post('/register', async (req, res) => {
    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user with hashed password
        const user = await RegisterModel.create({ ...req.body, password: hashedPassword });

        res.json(user);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await RegisterModel.findOne({ name: username });

        if (user) {
            // Compare hashed password with the one provided by the user
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                // Passwords match, login successful
                res.json({ message: "success" });
            } else {
                // Passwords don't match
                res.json({ message: "The password is incorrect" });
            }
        } else {
            // User not found
            res.json({ message: "User not registered" });
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post("/business-information",upload.single("businessLogo") ,async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    try {
        // Check if the user has already submitted any forms
       
        let existingBusiness = await BusinessModel.findOne({ userId: req.body.userId });

        if (existingBusiness) {
            // If the user has already submitted forms, update the existing document
            existingBusiness = await BusinessModel.findOneAndUpdate(
                { userId: req.body.userId },
                { $set: { ...req.body, businessLogo: req.file.path } },
                { new: true }
            );
            res.json(existingBusiness);
        } else {
            // If the user is submitting the first form, create a new document
            const newBusinessInformation = await BusinessModel.create({ ...req.body });
            res.json(newBusinessInformation);
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/business-information', async (req, res) => {
    try {
        // Find all business information in the database
        const businessInfo = await BusinessModel.find();

        if (!businessInfo || businessInfo.length === 0) {
            return res.status(404).json({ message: "No business information found" });
        }

        res.json(businessInfo);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});




app.listen(5000, () => {
    console.log("server is running on port 5000");
});