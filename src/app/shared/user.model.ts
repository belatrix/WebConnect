export class User {
  constructor(
    public user_id: number,
    public username: string,
    public token: string,
    public is_base_profile_complete: boolean,
    public is_password_reset_required: boolean,
    public is_staff: boolean,
    public reset_password_code: boolean
  ){};
}
