import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});

const User = mongoose.model('User', UserSchema);

export default User;
