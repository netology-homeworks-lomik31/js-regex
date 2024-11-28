export class Validator {
    constructor(string) {
        this.string = string;
    }

    validateUsername() {

        let nickname = this.string;

        const allowedChars = /^[A-Za-z0-9_-]+$/;
        if (!allowedChars.test(nickname))
            return false;


        if (/^[-_\d]/.test(nickname) || /[-_\d]$/.test(nickname))
            return false;

        if (/\d{4}/.test(nickname))
            return false;

        return true;

    }
}

