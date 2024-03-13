"use server"
import { revalidatePath } from "next/cache";
import { Pratiche, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser =async (FormData) => {
    const {username, email, password, nome_cognome, isAdmin, tel, isActive} = Object.fromEntries(FormData);
    try {
        connectToDB();

        const salt = await bcrypt.genSalt(15); 
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            nome_cognome,
            isAdmin,
            tel,
            isActive
        });
        await newUser.save();
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const updateUser = async (FormData) => {
    const {id} = Object.fromEntries(FormData);
    console.log(id);
    try {
        connectToDB();
        await Pratiche.findOneAndDelete(id)
          }
    catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/cruscotto")
};

export const deleteUser = async (FormData) => {
    const {id} = Object.fromEntries(FormData);
    console.log(id);
    try {
        connectToDB();
        await User.findOneAndDelete(id)
          }
    catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/cruscotto")
};


export const addPratica = async (FormData) => {
    const {cliente,numero_pratica, fornitore, stato, note, importo, provvigione, segnalatore, mese}  = Object.fromEntries(FormData);
    try {
        connectToDB();
        const newPratica = new Pratiche({
            numero_pratica,
            cliente,
            fornitore,
            stato,
            note,
            importo,
            provvigione: String(provvigione),
            segnalatore,
            mese
        });
        await newPratica.save();
        revalidatePath("/dashboard/cruscotto")
        redirect("/dashboard/cruscotto?success=true")

    }
    catch (err) {
        console.log(err);
        redirect("/dashboard/cruscotto?success=false")
    }
    
};
export const updatePratica = async (FormData) => {
    const {id, numero_pratica, cliente, fornitore, stato, note, importo, provvigione, segnalatore}  = Object.fromEntries(FormData);
    try {
        connectToDB();
        const updateFields = {
            numero_pratica,
            cliente,
            fornitore,
            stato,
            note,
            importo,
            provvigione: String(provvigione),
            segnalatore
        };
        Object.keys(updateFields).forEach(key => { if (updateFields[key] === undefined || updateFields[key] === '') {
            delete updateFields[key];
        }});
        await Pratiche.findByIdAndUpdate(id, updateFields)
    }
    catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/cruscotto")
    redirect("/dashboard/cruscotto")
};

export const deletePratica = async (FormData) => {
    const {id} = Object.fromEntries(FormData);
    console.log(id);
    try {
        connectToDB();
        await Pratiche.findOneAndDelete({_id: id})
        console.log((id)+"pratica eliminata")
          }
    catch (err) {
        console.log(err);
    }
    revalidatePath("/dashboard/cruscotto")
};

export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "Credenziali Errate";
      }
      throw err;
    }
  };