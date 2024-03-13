import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20,
    },
    nome_cognome:{
        type:String,
        required:true,
        min:3,
        max:30,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50,
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    img:{
        type:String,
        default:"",
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    Tel:{
        type:String,
        min:10,
        max:10,
    },

},
{timestamps:true}
);

const praticaSchema = new mongoose.Schema({

    numero_pratica:{
        type:String,
        default:"",
    },
    cliente:{
        type:String,
        required:true,
    },
    fornitore:{
        type:String,
        required:true,
    },
    stato:{
        type:String,
        enum: ['insoluto','trasmessa', 'rifiutata', 'istruttoria_interna', 'attesa_firma', 'attesa_DDT_Fattura', 'attesa_esito', 'deliberata', 'contratto', 'in_consegna', 'bloccata','completa'],
        default: 'generale',
    },
    mese:{
        type:String,
        enum: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
        default:"",
    },
    note:{
        type:String,
    },
    importo:{
        type:Number,
        default:0,
        
    },
    provvigione:{
        type:String,
    },
    segnalatore:{
        type:String,
        min:3,
        max:40,
    },

},
{timestamps:true}
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Pratiche = mongoose.models.Pratiche || mongoose.model("Pratiche", praticaSchema);