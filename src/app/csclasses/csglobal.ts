export class Csglobal {
    constructor() {
        this.isLoggedIn = false;
        this.isAdministrator = false;
    };
    isLoggedIn: boolean;
    isAdministrator: boolean;
}

export class csAsync {
    inProgress: boolean = false;
    success: boolean = true;
    message: string = "";
}

export class csResp {
    control: csControl = new csControl();
    data: object = {};
}
export class csControl {
    success: boolean = false;
    statusCode: string = "";
    statusMessage: string = ""; 
}

export class csAuth {
    isLoggedIn: boolean = false;
    message: string = "";
    currentUser: csCurrentUser = new csCurrentUser(); 
}

export class csLogin {
    userId: string = "";
    password: string = "";
}

export class csCurrentUser {
    id: number = 0;
    userId: string = "";
    name: string = "";
    password: string = "";
    phone: string = "";
    phoneExtension: string = "";
    fax: string = "";
    email: string = "";
    notifyOnUpdates: boolean = false; 
    userPrivleges: Array<object> = [];
    userRoles: Array<object> = [];
}