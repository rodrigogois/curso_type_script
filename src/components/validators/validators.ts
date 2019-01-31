export default class Validators {
    public static required(value) {
        return typeof value != null && value !== "" && value !== undefined;
    }
}
