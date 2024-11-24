import conf from "../cong/conf";
import {Client, Account , ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(user){
                this.login(email,password);
                return user;
            }else{
                return user;
            }
        }catch(error){
            throw error
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout(){
        try{
            return this.account.deleteSessions();
        }catch(error){
            throw error;
        }
    }
}
const authService = new AuthService();
export default authService;

