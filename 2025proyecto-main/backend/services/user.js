import  { getDependency } from "../libs/dependencies.js";

export class UserService {
    static async getSignleOrNullByUsername (username) {
        const UserModel = getDependency (`UserModel`);
        return await UserModel.getSignleOrNullByUsername (username);
    }

    static async get() {
        const UserModel = getDependency(`UserModel`);
        return await UserModel.get();
    }
}