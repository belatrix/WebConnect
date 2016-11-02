import { Location } from './location.model'

export class Employee {
  constructor(
    public pk?: number,
    public username?: string,
    public email?: string,
    public first_name?: string,
    public last_name?: string,
    public location?: Location,
    public skype_id?: string,
    public avatar?: string,
    public is_base_profile_complete?: boolean,
    public is_password_reset_required?: boolean,
    public last_month_score?: number,
    public last_year_score?: number,
    public current_month_score?: number,
    public current_year_score?: number,
    public level?: number,
    public total_score?: number,
    public is_active?: boolean,
    public is_blocked?: boolean,
    public last_login?: string,
    public total_given?: number
  ) {}
}
