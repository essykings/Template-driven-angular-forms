export class User {
    constructor(
        public id: number,
        public email: string,
        public  pwd: string,
        public  confirmPwd: string,
        public gender: string,
        public terms: boolean
      ) {  }

}
