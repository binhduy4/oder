import { connect } from "mongoose";  
const MONGODB_URL = 'mongodb+srv://admin:admin123@app.l0wee.mongodb.net/?retryWrites=true&w=majority&appName=app';  

const connectDB = async () => {     
    await connect(MONGODB_URL, {         
        useCreateIndex: true,         
        useUnifiedTopology: true,         
        useNewUrlParser: true,         
        useFindAndModify: false     
    });     
    console.log('Kết nối cơ sở dữ liệu Quản lý Đơn hàng đang hoạt động'); 
} 

export default connectDB;
