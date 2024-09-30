import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );

    this.account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite error!!:: getcurrentUser", error);
    }

    return null;
  }

  async logout(){
    try {
        await this.account.deleteSessions('current');
    } catch (error) {
        console.log("appwrite service :: logout error!!", error);
        
        
    }
  }
}

const authService = new AuthService();

export default AuthService;
