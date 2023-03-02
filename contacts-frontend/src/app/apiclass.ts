export class Apiclass {
    public showDetails: boolean;

    constructor(
        public first_name: string,
        public last_name: string,
        public email: string,
        public phone: Number ,
        public date_of_birth: Date,
        public custome_date: Date,
        public custome_date_name: string,
        public address: string,
        public country: string,
        )

        {this.showDetails=false;}
}
