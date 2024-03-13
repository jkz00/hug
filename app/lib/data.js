import { Pratiche, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
const regex = new RegExp(q, 'i');
    try {
        await connectToDB();
        const users = await User.find ( {username:{ $regex: regex} });
        return users
    }
    catch (err) {
        console.log(err);
        
    }
}

export const fetchUser_singola = async (id) => {
    try {
        await connectToDB();
        const user = await User.findById(id)
        return user;
    }
    catch (err) {
        console.log(err);
        
    }
}
export const fetchPratica = async (q, mese) => {
const regex = new RegExp(q, 'i');
let filter = {
    $or: [
        { cliente: { $regex: regex } },
        { numero_pratica: { $regex: regex } }
    ]
};
if (mese) {{
    filter = {
        ...filter,
        mese: mese
        }
    }
}
    try {
        await connectToDB();
        const pratica = await Pratiche.find(filter)
        .sort({createdAt: -1})
        return pratica;
    }
    catch (err) {
        console.log(err);
        
    }
}

export const fetchPratica_singola = async (id) => {
        try {
            await connectToDB();
            const pratica = await Pratiche.findById(id)
            return pratica;
        }
        catch (err) {
            console.log(err);
            
        }
    }
export const fetchLastPratiche = async () => {
    try {
        await connectToDB();
        const date = new Date();
        const meseCorrente = date.toLocaleString('it-IT', {month: 'long'});
        const lastPratiche = await Pratiche.find({mese: meseCorrente})
        .sort({createdAt: -1})
        .limit(50)
        .exec();
        return lastPratiche;
    }
    catch (err) {
        console.log(err);
        return [];
        
    }
}
    export default fetchUsers; fetchPratica; fetchPratica_singola; fetchUser_singola; fetchLastPratiche;

