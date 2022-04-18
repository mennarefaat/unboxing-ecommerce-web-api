import { User } from '../models/User.model';
import { BaseService } from './Base.service';
import { UserRepo } from '../repositories/User.repo';
export class UserService extends BaseService<User> {
  _repoObj = new UserRepo();
  async findOneByEmail(email: string) {
    try {
      const doc = await this._repoObj.findByEmail(email);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }
}
