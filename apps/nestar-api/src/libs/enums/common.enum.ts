import { registerEnumType } from "@nestjs/graphql";

export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = "No data found!",
    CREATE_FAILED = "Create failed!",
    UPDATE_FAILED = "Update failed!",
    REMOVE_FAILED = "Remove failed!",
    UPLOAD_FAILED = "Upload failed!",
    BAD_REQUEST = "Bad request!",

    USED_MEMBER_NICK_OR_PHONE = "Member nick or phone is already used!",
    USED_MEMBER_EMAIL = "Member email is already used!",
    NO_MEMBER_NICK = "No member with that membernick!",
    BLOCKED_USER = "You have been blocked!",
    WRONG_PASSWORD = "Wrong password, try again!",
    MEMBER_NOT_EXIST = "Member does not exist!",
    NOT_AUTHENTICATED = "You are not authenticated, please login first!",
    TOKEN_NOT_EXIST = "Token not exist!",
    ONLY_SPECIFIC_ROLES_ALLOWED = "Allowed only for members with specific roles!",
    NOT_ALLOWED_REQUEST = "Not allowed request!",
    PROVIDE_ALLOWED_FORMAT = "Please provide jpg, png, jpeg, gif, webp format images!",
    SELF_SUBSCRIPTION_DENIED = "Self subscription denied!",
}

export enum Direction {
    ASC = 1,
    DESC = -1,
}
registerEnumType(Direction, {
    name: "Direction",
});