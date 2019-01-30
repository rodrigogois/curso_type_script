export default class Validators {
    static required(value) {
        return typeof value != null && value != '' && value != undefined;
    }

}